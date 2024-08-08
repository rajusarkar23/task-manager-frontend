import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{
          background: 'linear-gradient(to left, #323445, #12131c)',
          color: "white",
          minHeight: '100vh',
          margin: 0,
          }}>
        <h1 className="flex justify-center items-center text-2xl font-bold mt-3">Your daily task manager.</h1>
        {children}
      </body>
    </html>
  );
}
