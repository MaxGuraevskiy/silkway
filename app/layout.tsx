import "./globals.css";
import { Inter, Roboto, Source_Sans_Pro, Manrope } from "next/font/google";
import { Metadata } from "next";

import { darkTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";

import Header from "./layouts/header";
import Footer from "./layouts/footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});
const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: "300",
  variable: "--font-roboto",
});
const sans_pro = Source_Sans_Pro({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans-pro",
  weight: "200",
  display: "optional",
});

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  weight: "200",
  display: "optional",
});

/** @type {import("next").Metadata} */
export const metadata: Metadata = {
  title: "SilkWay",
  description: "SilkWay",
  keywords: ["Guraevskiy", "Max Guraevskiy", "Next.js", "HSE", "SilkWay"],
  authors: [{ name: "Max Guraevskiy", url: "https://guraevskiy.ru/" }],
  creator: "Maxim Guraevskiy",
  icons: {
    icon: "./favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SilkWay",
    description: "SilkWay",
    url: "https://guraevskiy.ru/",
    siteName: "SilkWay",
    locale: "ru_ru",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      {/* <ThemeProvider theme={darkTheme}> */}
      <CssBaseline />
      <body
        className={
          (inter.variable, roboto.variable, sans_pro.variable, manrope.variable)
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
