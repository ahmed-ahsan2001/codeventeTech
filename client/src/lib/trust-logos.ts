import zakariaMasjid from "@/assets/clients/zakaria-masjid.jpg";
import kkwt from "@/assets/clients/kkwt.jpg";
import fiabila from "@/assets/clients/fiabila.jpg";
import akimpression from "@/assets/clients/akimpression.jpg";
import ahConvertech from "@/assets/clients/ah-convertech.jpg";
import hamzaEnterprises from "@/assets/clients/hamza-enterprises.png";
import quranApp from "@/assets/clients/quran-app.png";
import agbGroup from "@/assets/clients/agb-group.png";

export interface TrustLogo {
  name: string;
  logo: string;
  /** Use a dark pill when the logo artwork needs a dark background */
  darkBg?: boolean;
  /** Square app-icon style (rounded, no extra pill padding) */
  appIcon?: boolean;
  /** Logo image includes its own background artwork */
  embedded?: boolean;
  href?: string;
}

export const TRUST_LOGOS: TrustLogo[] = [
  { name: "Masjid Zakariya", logo: zakariaMasjid },
  { name: "Khadija-tul-Kubra Welfare Trust", logo: kkwt },
  { name: "Fiabila", logo: fiabila },
  { name: "AK Impression", logo: akimpression, darkBg: true },
  { name: "A.H Convertech", logo: ahConvertech },
  { name: "M Hamza Enterprises", logo: hamzaEnterprises },
  { name: "A.G.B Group", logo: agbGroup, embedded: true },
  {
    name: "Quran App",
    logo: quranApp,
    appIcon: true,
    href: "/portfolio/quran-app",
  },
];
