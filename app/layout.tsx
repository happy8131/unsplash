import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import RecoilRootProvider from "./recoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unsplash",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRootProvider>
      <html lang="en">
        <body suppressHydrationWarning={true} className={inter.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </RecoilRootProvider>
  );
}
