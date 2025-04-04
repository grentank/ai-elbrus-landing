import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
// import "./fonts.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const rfRostin = localFont({
  src: [
    {
      path: "../public/fonts/RF-Rostin-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/RF-Rostin-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/RF-Rostin-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/RF-Rostin-Ultralight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-rf-rostin",
});

export const metadata: Metadata = {
  title: "AI-инженер",
  description: "Курс от Эльбрус Буткемп: AI-инженер",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${rfRostin.variable}`}>
      <body>{children}</body>
    </html>
  );
}
