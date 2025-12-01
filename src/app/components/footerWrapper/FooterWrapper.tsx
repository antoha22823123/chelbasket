"use client";

import { usePathname } from "next/navigation";
import Footer from "../footer/footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  const hideOn = ["/auth", "/register"];

  if (hideOn.includes(pathname)) return null;

  return <Footer />;
}