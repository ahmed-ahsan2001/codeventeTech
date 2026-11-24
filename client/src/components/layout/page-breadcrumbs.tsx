import { Link } from "wouter";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function PageBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden className="text-slate-300">/</span>}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-electric transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-slate-700 font-medium" : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}