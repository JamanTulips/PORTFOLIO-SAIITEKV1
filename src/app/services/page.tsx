import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";

export default function Services() {
    return (
        <main>
            <PageHeader title="Services" breadcrumb={[{ label: "Home", href: "/" }, { label: "Pages", href: "#" }, { label: "Services", active: true }]} />
            <ServicesSection />
        </main>
    );
}
