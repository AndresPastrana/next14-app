import "@/app/ui/global.css";
import Fonts from "./fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Fonts.inter.className} antialiased`}>{children}</body>
    </html>
  );
}
