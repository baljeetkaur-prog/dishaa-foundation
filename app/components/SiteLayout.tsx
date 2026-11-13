
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isComingSoonPage = pathname === "/coming-soon";

  if (isComingSoonPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <FloatingActions />
      <Footer />
    </>
  );
}
