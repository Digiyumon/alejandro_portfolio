import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Al's portfolio</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/icon_button.css" />
        <link rel="stylesheet" href="/PopUpWindow.css" />
        <link rel="stylesheet" href="/draggable_bar.css" />
        <link rel="stylesheet" href="/star_background.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="/about_window_forms.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dongle&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
