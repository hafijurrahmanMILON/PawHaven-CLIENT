import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Nunito, Comfortaa } from "next/font/google";
import Footer from "@/Components/Footer";
import { Toaster } from "react-hot-toast";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata = {
  title: "PawHaven | Pet Care & Service Platform",
  description:
    "PawHaven is a modern pet care and service platform where users can explore pet services, view detailed offerings, and access protected features through a simple authentication system.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${comfortaa.variable} antialiased`}>
          <Navbar></Navbar>
          <div className="min-h-screen">{children}</div>
          <Footer></Footer>
          <Toaster></Toaster>
      </body>
    </html>
  );
}
