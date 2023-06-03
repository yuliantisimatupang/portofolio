import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yulianti Simatupang",
  description: "This is portofolio by Yulianti Simatupang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* -- google font -- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
