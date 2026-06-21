import PageHeader from "@/components/PageHeader";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Testimonials",
    description:
        "Read client testimonials about Saiitek healthcare technology solutions — real feedback from hospitals and medical institutions using our PACS, RIS, and HIS platforms.",
    path: "/testimonials",
});

export default function Testimonials() {
    return (
        <main>
            <PageHeader
                title="Testimonials"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Pages", href: "#" },
                    { label: "Testimonials", active: true },
                ]}
            />
            <section className="container py-5">
                <div className="text-center mx-auto" style={{ maxWidth: "760px" }}>
                    <h2 className="mb-3">Trusted by Healthcare Institutions</h2>
                    <p className="text-muted mb-0">
                        Saiitek solutions help medical teams improve imaging workflows,
                        patient data access, and hospital automation with reliable digital
                        healthcare platforms.
                    </p>
                </div>
            </section>
        </main>
    );
}
