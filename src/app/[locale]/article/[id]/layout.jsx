export async function generateStaticParams() {
  return ["en", "id"].map((locale) => ({ locale }));
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
