import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>nusaiba</title>
      </head>
      <body>
<nav className="top-nav">
  <div className="nav-inner">
    <a href="#projects">projects</a>
        <a href="#art">art</a>
    <a href="#about">bout me</a>
  </div>
</nav>
        {children}
      </body>
    </html>
  );
}
