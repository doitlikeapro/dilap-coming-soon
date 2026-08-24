import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do it like a pro - Coming Soon",
  description:
    "Something extraordinary is coming. Master your craft like never before.",
};

export default function ComingSoonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
