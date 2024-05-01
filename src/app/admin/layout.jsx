export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/pbs/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/quill@2.0.0/dist/quill.core.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
        <script src="https://cdn.jsdelivr.net/npm/quill@2.0.0/dist/quill.core.js"></script>
      </body>
    </html>
  );
}
