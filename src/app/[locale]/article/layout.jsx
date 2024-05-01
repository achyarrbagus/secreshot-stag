export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <script src="https://cdn.jsdelivr.net/npm/quill@2.0.0/dist/quill.core.js"></script>
      </body>
    </html>
  );
}
