/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/utils/cn";
import SideNavbarReceiver from "@/components/SideNavbarReceiver";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex ",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          }
        )}
      >
        <SideNavbarReceiver />
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
