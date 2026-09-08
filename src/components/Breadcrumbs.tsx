import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";

interface BreadcrumbsProps {
  crumbs: readonly Crumb[];
}

/*
 * El separador es una barra, no un middot ni una flecha animada.
 * La ultima miga no es enlace y lleva aria-current.
 */
export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav aria-label="Migas de pan">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;

            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-slate-800">
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className="transition-colors hover:text-orange-500">
                    {crumb.label}
                  </Link>
                )}
                {isLast ? null : (
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
