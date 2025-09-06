import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NavigationProvider } from "@/context/NavigationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pekes Deluxe - Cortes divertidos para tus pequeños",
  description: "La mejor peluquería canina con servicios premium para el cuidado y belleza de tu mascota. Reserva tu cita hoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 relative overflow-x-hidden`}
      >
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-medium"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-fast"></div>
        </div>
        
        <div className="relative z-10">
          <NavigationProvider>
            <Navbar />
            {children}
            <Footer />
          </NavigationProvider>
        </div>
      </body>
    </html>
  );
}
