import { Link } from "wouter";
import { TRUST_LOGOS, type TrustLogo } from "@/lib/trust-logos";

export function TrustLogoItem({ name, logo, darkBg, appIcon, embedded, href }: TrustLogo) {
  const inner = appIcon ? (
    <div className="flex items-center justify-center h-[76px] min-w-[76px] mx-2">
      <img
        src={logo}
        alt={`${name} icon`}
        className="h-14 w-14 rounded-2xl object-cover shadow-md ring-1 ring-slate-200/80 hover:scale-105 transition-transform duration-300"
        loading="lazy"
        width={56}
        height={56}
      />
    </div>
  ) : embedded ? (
    <div className="flex items-center justify-center h-[76px] min-w-[120px] mx-2 rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-sm hover:ring-electric/25 transition-all duration-300">
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-full w-full object-cover"
        loading="lazy"
        width={120}
        height={76}
      />
    </div>
  ) : (
    <div
      className={`flex items-center justify-center h-[76px] min-w-[168px] mx-2 px-6 rounded-xl border transition-all duration-300 ${
        darkBg
          ? "bg-slate-900 border-slate-800 hover:border-slate-700"
          : "bg-white border-slate-200 hover:border-electric/25 hover:shadow-[0_8px_30px_rgba(0,102,255,0.08)]"
      }`}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-11 max-w-[132px] w-auto object-contain"
        loading="lazy"
        width={132}
        height={44}
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={`${name} case study`}>
        {inner}
      </Link>
    );
  }

  return inner;
}

export function TrustLogoItems() {
  return (
    <>
      {TRUST_LOGOS.map((client) => (
        <TrustLogoItem key={client.name} {...client} />
      ))}
    </>
  );
}
