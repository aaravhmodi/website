import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import { join, extname, basename } from "path";

const publicDir = new URL("../public", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const files = ["DSC05135.JPG", "DSC05143.JPG", "DSC04808.JPG", "IMG_8808.jpeg"];

for (const file of files) {
  const input = join(publicDir, file);
  const outName = basename(file, extname(file)) + ".webp";
  const output = join(publicDir, outName);

  const { width, height } = await sharp(input).metadata();
  console.log(`${file}: ${width}x${height}`);

  await sharp(input)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output);

  const { size: inSize } = (await import("fs")).statSync(input);
  const { size: outSize } = (await import("fs")).statSync(output);
  console.log(`  -> ${outName}: ${(inSize/1024).toFixed(0)}KB -> ${(outSize/1024).toFixed(0)}KB`);
}
