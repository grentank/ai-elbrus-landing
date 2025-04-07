import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
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
  title: "Курс AI для разработчиков",
  description: "Курс от Эльбрус Буткемп: AI-инженер",
  generator: "v0.dev",
  openGraph: {
    title: "Курс AI для разработчиков",
    description: "Курс от Эльбрус Буткемп: AI-инженер",
    url: "https://ai.elbrusboot.camp",
    siteName: "Курс AI для разработчиков",
    images: [
      {
        url: "https://ai.elbrusboot.camp/images/og.png",
        width: 1200,
        height: 630,
        alt: "Курс AI для разработчиков",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Курс AI для разработчиков",
    description: "Курс от Эльбрус Буткемп: AI-инженер",
    images: ["https://ai.elbrusboot.camp/images/og.png"],
  },
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
