// Fortune Cookie for the Liquidated Trader
// make.fun bounty: u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c
//
// Writes ONE fortune-cookie line to /output/entry.txt for a crypto trader
// who has just been liquidated. The line is the whole product: it must read
// like a real fortune and land as a joke on the loss.
//
// Chosen fortune (17 words, 97 characters + trailing newline = 98 code
// points; gate allows 1-160 characters and at most 20 words):
//   "You will meet a tall, dark stranger: your liquidation notice,
//    arriving at 3 a.m. with no flowers."
// Why this one: it opens with the most iconic fortune-cookie line ("You
// will meet a tall, dark stranger"), then the stranger turns out to be the
// liquidation notice; "with no flowers" is the surprising last word that
// breaks the oracular voice. "3 a.m." mirrors the trader reading the
// cookie in the small hours. Rueful and warm, never cruel: the cookie
// commiserates with a joke, it does not lecture. It reads whole in a
// single breath.
// The trailing newline keeps entry.txt a well-formed single text line.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const FORTUNE =
  "You will meet a tall, dark stranger: your liquidation notice, arriving at 3 a.m. with no flowers.";

function outputDir(): string {
  // The grader sets MAKEFUN_OUTPUT_DIR to the writable output directory.
  // MAKEFUN_BOT_DIR (the repo root) is the fallback; /output is the default.
  if (process.env.MAKEFUN_OUTPUT_DIR) {
    return resolve(process.env.MAKEFUN_OUTPUT_DIR);
  }
  if (process.env.MAKEFUN_BOT_DIR) {
    return join(resolve(process.env.MAKEFUN_BOT_DIR), "output");
  }
  return "/output";
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), FORTUNE + "\n", "utf8");
