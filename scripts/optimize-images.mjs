/**
 * Convierte los JPG/PNG de `public/` a WebP para reducir el peso del sitio.
 *
 *   node scripts/optimize-images.mjs            # convierte y borra el original
 *   node scripts/optimize-images.mjs --dry-run  # solo informa
 *   node scripts/optimize-images.mjs --keep     # conserva el original
 *
 * Reglas por carpeta (ver TARGETS): ancho maximo y calidad. Tras convertir hay
 * que actualizar las referencias en `src/lib/site.ts` y en los componentes;
 * el script imprime el listado de archivos generados para facilitarlo.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const TARGETS = [
  // Fotos de portada y hero: se sirven a ancho completo.
  { dir: "public/images", maxWidth: 1920, quality: 80 },
  // Fichas y galeria de proyectos: nunca ocupan mas de media pantalla.
  { dir: "public/images/proyectos", maxWidth: 1600, quality: 80 },
  // Sellos de certificacion: se muestran a 148 px; conservan transparencia.
  { dir: "public/certs", maxWidth: 640, quality: 85 },
];

const CONVERTIBLE = new Set([".jpg", ".jpeg", ".png"]);

const dryRun = process.argv.includes("--dry-run");
const keepOriginal = process.argv.includes("--keep");

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

/** Originales a borrar al final: Windows bloquea el archivo mientras se lee. */
const pendingDeletes = [];

let totalBefore = 0;
let totalAfter = 0;
let converted = 0;

for (const { dir, maxWidth, quality } of TARGETS) {
  if (!fs.existsSync(dir)) continue;

  const files = fs
    .readdirSync(dir)
    .filter((name) => {
      const full = path.join(dir, name);
      return (
        fs.statSync(full).isFile() &&
        CONVERTIBLE.has(path.extname(name).toLowerCase())
      );
    })
    .sort();

  for (const name of files) {
    const from = path.join(dir, name);
    const to = path.join(dir, `${path.basename(name, path.extname(name))}.webp`);

    // foo.jpg y foo.jpeg colapsarian en el mismo foo.webp y una de las dos
    // fotos se perderia en silencio: mejor abortar y renombrar a mano.
    if (fs.existsSync(to) && !keepOriginal) {
      throw new Error(
        `Colision de nombres: ${from} sobrescribiria ${to}. Renombra el origen.`
      );
    }

    const sizeBefore = fs.statSync(from).size;

    // Se carga a memoria para no dejar el original bloqueado al borrarlo.
    const image = sharp(fs.readFileSync(from));
    const { width } = await image.metadata();

    if (dryRun) {
      console.log(`. ${from} (${kb(sizeBefore)}, ${width}px)`);
      totalBefore += sizeBefore;
      continue;
    }

    await image
      .resize({
        width: Math.min(width ?? maxWidth, maxWidth),
        withoutEnlargement: true,
      })
      .webp({ quality, effort: 6 })
      .toFile(to);

    const sizeAfter = fs.statSync(to).size;
    totalBefore += sizeBefore;
    totalAfter += sizeAfter;
    converted += 1;

    if (!keepOriginal) pendingDeletes.push(from);

    console.log(`OK ${to}  ${kb(sizeBefore)} -> ${kb(sizeAfter)}`);
  }
}

for (const file of pendingDeletes) fs.rmSync(file, { force: true });

if (dryRun) {
  console.log(`\nTotal convertible: ${kb(totalBefore)}.`);
} else {
  const saved = totalBefore - totalAfter;
  const pct = totalBefore ? ((saved / totalBefore) * 100).toFixed(1) : "0";
  console.log(
    `\n${converted} imagenes: ${kb(totalBefore)} -> ${kb(totalAfter)} (-${pct} %).`
  );
}
