import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { TRUST_LOGOS, type TrustLogo } from "@/lib/trust-logos";

function LogoMark({ name, logo, darkBg, appIcon, embedded }: TrustLogo) {
  if (appIcon) {
    return (
      <img
        src={logo}
        alt=""
        aria-hidden
        className="h-14 w-14 rounded-2xl object-cover shadow-sm ring-1 ring-slate-200/80"
        loading="lazy"
        width={56}
        height={56}
      />
    );
  }

  if (embedded) {
    return (
      <div className="h-14 w-full rounded-lg overflow-hidden ring-1 ring-slate-200">
        <img
          src={logo}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-14 w-full items-center justify-center rounded-lg px-3",
        darkBg ? "bg-slate-900" : "bg-white",
      )}
    >
      <img
        src={logo}
        alt=""
        aria-hidden
        className="max-h-10 max-w-[120px] w-auto object-contain"
        loading="lazy"
      />
    </div>
  );
}

export function TrustLogoItem({ name, logo, darkBg, appIcon, embedded, href }: TrustLogo) {
  const card = (
    <div className="mx-3 flex min-w-[148px] max-w-[168px] flex-col items-center gap-2.5 py-1">
      <div
        className={cn(
          "flex w-full items-center justify-center",
          !appIcon && !embedded && "rounded-xl border border-slate-200 bg-slate-50/80 p-2 shadow-sm",
          (appIcon || embedded) && "px-0.5",
        )}
      >
        <LogoMark
          name={name}
          logo={logo}
          darkBg={darkBg}
          appIcon={appIcon}
          embedded={embedded}
        />
      </div>
      <p className="text-center text-[11px] font-medium leading-snug text-slate-600 line-clamp-2 sm:text-xs">
        {name}
      </p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group" aria-label={`${name} case study`}>
        <div className="transition-transform duration-300 group-hover:-translate-y-0.5">{card}</div>
      </Link>
    );
  }

  return card;
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
