import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { MobileNavbar } from "./components/MobileNavbar";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shaffan Mohd Portfolio ",
  description: "Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex items-center justify-center w-full ">
            <div className="w-full max-w-5xl h-screen  flex">
              <div className="lg:hidden flex">
                <MobileNavbar />
              </div>
              <div className="w-[400px] py-16 px-4 fixed top-0 bottom-0 lg:flex hidden ">
                <NavBar />
              </div>

              <div className="w-full py-16 lg:ml-[400px]  px-4 lg:px-0">
                {children}
                <Analytics />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
