import { Inter } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/NavComponent";
import Provider from "@/components/workers/providers";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <Provider>
        <body className={inter.className} >
          <NavComponent></NavComponent>
          {children}
          <Toaster/>
        </body>
      </Provider>
    </html>
  );
}
