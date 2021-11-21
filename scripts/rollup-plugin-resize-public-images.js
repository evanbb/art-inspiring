import sharp from "sharp";
import { mkdir, readdir } from "fs";
import { promisify } from "util";

const readDirAsync = promisify(readdir);
const mkdirAsync = promisify(mkdir);

export default function resizeImages() {
  return {
    name: "rollup-plugin-resize-public-images",
    async generateBundle() {
      const images = await readDirAsync("public/images");
      await mkdirAsync("public/build/images", {
        recursive: true,
      });

      const formats = new Map([
        ["tb", [200, 30]],
        ["sm", [420, 40]],
        ["md", [767, 50]],
        ["lg", [1024, 65]],
        ["xl", [1366, 80]],
        ["fl", [null, 100]],
      ]);

      for (const image of images) {
        for (const [desc, [width, quality]] of formats) {
          await sharp(`public/images/${image}`)
            .resize(width)
            .jpeg({ quality })
            .toFile(
              `public/build/images/${image.replace(/\.jpg/, `.${desc}.jpg`)}`
            );
        }
      }
    },
  };
}
