"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/Components/NavBar/NavBar";
import { Footer } from "@/Components/Footer/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>

        <body className={inter.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
