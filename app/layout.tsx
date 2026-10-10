import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "funny.kkoreng",
  description: "쓸데없이 웃긴 실험실",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
