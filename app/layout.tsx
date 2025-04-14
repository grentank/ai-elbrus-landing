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
  title:
    "Онлайн-курс по искусственному интеллекту для разработчиков — обучение AI от Эльбрус Буткемп",
  description:
    "Освой искусственный интеллект на практике: 2 недели онлайн, проекты с Python и ML-инструментами, менторы и поддержка. Курс от Эльбрус Буткемп.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.webp",
  },
  openGraph: {
    title:
      "Онлайн-курс по искусственному интеллекту для разработчиков — обучение AI от Эльбрус Буткемп",
    description:
      "Освой искусственный интеллект на практике: 2 недели онлайн, проекты с Python и ML-инструментами, менторы и поддержка. Курс от Эльбрус Буткемп.",
    url: "https://ai.elbrusboot.camp",
    siteName:
      "Онлайн-курс по искусственному интеллекту для разработчиков — обучение AI от Эльбрус Буткемп",
    images: [
      {
        url: "https://ai.elbrusboot.camp/images/og_preview.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн-курс по искусственному интеллекту для разработчиков — обучение AI от Эльбрус Буткемп",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Онлайн-курс по искусственному интеллекту для разработчиков — обучение AI от Эльбрус Буткемп",
    description:
      "Освой искусственный интеллект на практике: 2 недели онлайн, проекты с Python и ML-инструментами, менторы и поддержка. Курс от Эльбрус Буткемп.",
    images: ["https://ai.elbrusboot.camp/images/og_preview.jpg"],
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
