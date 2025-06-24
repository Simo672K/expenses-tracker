import type { Metadata } from "next";
import { lato } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Expanses app",
  description: "Opensource app to manage your expanses the right way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body style={{ height: "100%" }} className={`${lato.className}`}>
        {children}
      </body>
    </html>
  );
}
