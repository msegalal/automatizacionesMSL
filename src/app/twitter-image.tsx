import { ImageResponse } from "next/og";
import { ogCard, ogContentType, ogSize } from "@/components/og-card";

export const alt =
  "automatizacionesMSL. Menos tareas manuales y mejor seguimiento para agencias de viajes.";
export const size = ogSize;
export const contentType = ogContentType;

export default function TwitterImage() {
  return new ImageResponse(ogCard(), size);
}
