import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Maintenance from "./components/Maintenance";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Achintya Interior and Floor Solutions | Premium Design & Flooring",
  description:
    "Experience bespoke interior design and premium flooring solutions with Achintya. Transforming spaces into masterpieces.",
};

// Toggle this to true to enable maintenance mode
const IS_MAINTENANCE = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        {IS_MAINTENANCE ? <Maintenance /> : children}
      </body>
    </html>
  );
}
