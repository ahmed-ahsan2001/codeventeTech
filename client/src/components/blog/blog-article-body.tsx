import { Link } from "wouter";
import type { ReactNode } from "react";

export function P({ children }: { children: ReactNode }) {
  return <p className="text-slate-600 leading-relaxed mb-6">{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">{children}</h3>;
}

export function Ul({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">{children}</ul>;
}

export function Ol({ children }: { children: ReactNode }) {
  return <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">{children}</ol>;
}

export function Li({ children }: { children: ReactNode }) {
  return <li className="leading-relaxed">{children}</li>;
}

export function InternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href}>
      <span className="text-electric font-medium hover:underline cursor-pointer">{children}</span>
    </Link>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-sky-100 bg-sky-50 p-6 my-8 text-slate-700 text-sm leading-relaxed">
      {children}
    </div>
  );
}

export function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-8 rounded-xl border border-slate-200">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-900">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold border-b border-slate-200">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-100 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-600 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
