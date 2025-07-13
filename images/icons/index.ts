import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { readFile } from 'node:fs/promises';

const dir = dirname(fileURLToPath(import.meta.url));

const appstoreios = await readFile(join(dir, './app-store-ios.svg'), 'utf8');
const book = await readFile(join(dir, './book.svg'), 'utf8');
const bluesky = await readFile(join(dir, './bluesky.svg'), 'utf8');
const dribbble = await readFile(join(dir, './dribbble.svg'), 'utf8');
const github = await readFile(join(dir, './github.svg'), 'utf8');
const godotcon_boston = await readFile(
  join(dir, './godotcon-boston.svg'),
  'utf8'
);
const googleplay = await readFile(join(dir, './google-play.svg'), 'utf8');
const itchio = await readFile(join(dir, './itchio.svg'), 'utf8');
const linkedin = await readFile(join(dir, './linkedin.svg'), 'utf8');
const pen = await readFile(join(dir, './pen.svg'), 'utf8');
const speakerdeck = await readFile(join(dir, './speaker-deck.svg'), 'utf8');
const stackoverflow = await readFile(join(dir, './stack-overflow.svg'), 'utf8');
const youtube = await readFile(join(dir, './youtube.svg'), 'utf8');

export {
  appstoreios,
  book,
  bluesky,
  dribbble,
  github,
  godotcon_boston,
  googleplay,
  itchio,
  linkedin,
  pen,
  speakerdeck,
  stackoverflow,
  youtube
};
