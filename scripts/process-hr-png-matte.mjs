/**
 * Replaces near-black matte in HR section PNGs with cream (#FAF8F4) so they sit on the page background.
 * Requires: pip install pillow (or python3 with PIL).
 * Run after replacing assets in client/src/assets/hr/: node scripts/process-hr-png-matte.mjs
 */
import { execSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "client/src/assets/hr");
const files = [
  "hr-choose-payroll.png",
  "hr-key-features.png",
  "hr-benefits.png",
  "why-choose-hr.png",
];

const py = `
from PIL import Image
import os
cream = (250, 248, 244, 255)
assets = os.environ["HR_ASSETS"]
for name in os.environ["HR_FILES"].split(","):
    path = os.path.join(assets, name)
    if not os.path.isfile(path):
        continue
    img = Image.open(path).convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r < 45 and g < 45 and b < 45 and a > 0:
                px[x, y] = cream
    img.save(path, "PNG")
    print("processed", name)
`;

execSync("python3 -c " + JSON.stringify(py), {
  env: {
    ...process.env,
    HR_ASSETS: assetsDir,
    HR_FILES: files.join(","),
  },
  stdio: "inherit",
});
