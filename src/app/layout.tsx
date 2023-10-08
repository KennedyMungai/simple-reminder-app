import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Separator } from "@/components/ui/separator";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Reminder App",
  description: "A simple reminder app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={opensans.className}>
          <div className="flex min-h-screen w-full flex-col items-center dark:bg-black">
            <NavBar />
            <Separator />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
