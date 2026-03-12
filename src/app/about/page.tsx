import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";

export default function About() {
    return (
        <main>
            <PageHeader title="About Us" breadcrumb={[{ label: "Home", href: "/" }, { label: "Pages", href: "#" }, { label: "About", active: true }]} />
            <AboutSection />
        </main>
    );
}
