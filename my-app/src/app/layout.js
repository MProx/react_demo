export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <p1> Header </p1>
        </header>
        {children}
        <footer style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
          <p1> footer </p1>
        </footer>
      </body>
    </html >
  );
}