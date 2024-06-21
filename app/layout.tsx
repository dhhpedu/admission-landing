import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuyển sinh - Trường Đại Học Hải Phòng",
  description: "Đội ngũ giảng viên có trình độ chuyên môn và kinh nghiệm giảng dạy. Họ là những chuyên gia trong lĩnh vực của mình, nhiều người đã có kinh nghiệm thực tiễn trong các ngành công nghiệp tương ứng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
