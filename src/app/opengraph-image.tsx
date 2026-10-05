import { ImageResponse } from "next/og";
import { ogCard, ogContentType, ogSize } from "@/components/og-card";

export const alt =
  "automatizacionesMSL. CRM, automatización y soluciones a medida para agencias de viajes y otros negocios.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return new ImageResponse(ogCard(), size);
}
