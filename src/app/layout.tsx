import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Diya Patel — Product Designer",
  description:
    "Junior product designer shipping scalable B2B systems at Petpooja. AI-assisted workflows, design systems, and a CS background.",
  keywords: [
    "Diya Patel",
    "Product Designer",
    "UI/UX Designer",
    "Petpooja",
    "Ahmedabad",
    "Design Systems",
    "AI-assisted Design",
  ],
  authors: [{ name: "Diya Patel" }],
  openGraph: {
    title: "Diya Patel — Product Designer",
    description:
      "Designing clear, scalable B2B products with AI-assisted workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
