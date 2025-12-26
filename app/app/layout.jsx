export const metadata = {
  title: "Website Pertama",
  description: "Website sederhana pakai Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
