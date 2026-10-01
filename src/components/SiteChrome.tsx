import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";

interface SiteChromeProps {
  children: ReactNode;
  currentPath?: string;
}

/*
 * Cabecera y pie compartidos por las páginas de servicio y contenido.
 */
export default function SiteChrome({ children, currentPath }: SiteChromeProps) {
  return (
    <>
      <SiteHeader currentPath={currentPath} />

      {children}

      <Footer />
    </>
  );
}
