import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajesh Nasit | Senior Full-Stack & React Native Developer",
  description:
    "Senior full-stack and mobile developer with 15+ years of experience in React Native, Next.js, Node.js, TypeScript, RESTful APIs, Supabase, and PostgreSQL.",
  keywords: [
    "Senior Full-Stack Developer",
    "React Native Developer",
    "Mobile App Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "NestJS",
    "RESTful APIs",
    "Supabase",
    "PostgreSQL",
    "iOS and Android",
    "Rajesh Nasit",
  ],
  icons: {
    icon: "/profile.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
