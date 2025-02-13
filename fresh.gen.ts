// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $DraggableBar from "./islands/DraggableBar.tsx";
import * as $IconButton from "./islands/IconButton.tsx";
import * as $PopUpWindow from "./islands/PopUpWindow.tsx";
import * as $ProgressBar from "./islands/ProgressBar.tsx";
import * as $workWindow from "./islands/workWindow.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/DraggableBar.tsx": $DraggableBar,
    "./islands/IconButton.tsx": $IconButton,
    "./islands/PopUpWindow.tsx": $PopUpWindow,
    "./islands/ProgressBar.tsx": $ProgressBar,
    "./islands/workWindow.tsx": $workWindow,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
