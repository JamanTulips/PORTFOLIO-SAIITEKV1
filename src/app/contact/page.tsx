import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
    return (
        <main>
            <PageHeader title="Contact Us" breadcrumb={[{ label: "Home", href: "/" }, { label: "Pages", href: "#" }, { label: "Contact", active: true }]} />
            <ContactSection />
        </main>
    );
}
