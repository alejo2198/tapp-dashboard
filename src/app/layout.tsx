import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "User Dashboard as a Trial  ",
};

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add all available weights
  style: ["normal", "italic"], // Add all available styles
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
