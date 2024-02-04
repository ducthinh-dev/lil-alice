import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>alice cool</title>
      </head>
      <body>
        <header>this is my header</header>
        <div className="font-sans">{children}</div>
        <footer>this is my footer</footer>
      </body>
    </html>
  );
}
