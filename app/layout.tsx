import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { TOKEN_ADDRESS, TOKEN_NAME, TOKEN_SYMBOL } from "@/data/config";

export const metadata: Metadata = {
  title: `${TOKEN_NAME} (${TOKEN_SYMBOL})`,
  description: TOKEN_ADDRESS,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="madagascar">
      <body className="min-h-screen h-screen  font-grandstander">
        <Header />
        <div className="bg-base-200 w-full flex flex-col items-center justify-center ">
          <div className="w-full p-1 max-w-7xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
