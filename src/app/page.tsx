import HealthcareHero from "@/components/HealthcareHero";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});
import HealthcareInnovation from "@/components/HealthcareInnovation";
import HealthcareServices from "@/components/HealthcareServices";
import ClinicalNetwork from "@/components/ClinicalNetwork";
import ContactSection from "@/components/ContactSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import PartnersStandards from "@/components/PartnersStandards";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.homePage}>
      <HealthcareHero />
      <HealthcareInnovation />
      <HealthcareServices />
      <ClinicalNetwork />
      <GalleryCarousel />
      <PartnersStandards />
      <ContactSection />
    </main>
  );
}
