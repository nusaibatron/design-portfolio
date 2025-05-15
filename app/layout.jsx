import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nusaiba’s Site</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
