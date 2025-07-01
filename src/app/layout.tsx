import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "사이트 A",
  description: "Spring boot, next js 연동 테스트"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  border min-h-screen flex flex-col`}
      >
        <header>
          <nav className="flex">
            <Link href="/" className ="p-2 hover:bg-gray-400 rounded">메인</Link>
            <Link href="/posts" className ="p-2 hover:bg-gray-400 rounded">글 목록</Link>
          </nav>
        </header>
        <main className="border-2 border-red-400 flex-1 flex flex-col">{children}</main>
        <footer className="border-2 border-blue-400 text-center p-2">푸터</footer>
        
      </body>
    </html>
  );
}
