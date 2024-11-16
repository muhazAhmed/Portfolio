import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import BottomMenu from "@/components/BottomMenu";
import Footer from "@/components/Footer";
import SEO from "@/seo/seoConfig";

export const metadata: Metadata = SEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={"antialiased"}>
        <ThemeProvider>
          <Suspense fallback={<Loader />}>
            <Navbar />
            {children}
            <Footer />
            <BottomMenu />
          </Suspense>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                fontWeight: "bold",
              },
              success: {
                style: {
                  color: "green",
                },
              },
              error: {
                style: {
                  color: "red",
                },
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
