import PageHeader from "@/components/PageHeader";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Our Blog",
    description:
        "Read the latest healthcare technology insights, PACS and RIS updates, and digital health articles from the Saiitek team.",
    path: "/blog",
});

export default function Blog() {
    return (
        <main>
            <PageHeader
                title="Our Blog"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Pages", href: "#" },
                    { label: "Our Blog", active: true },
                ]}
            />
            <section className="container py-5">
                <div className="text-center mx-auto" style={{ maxWidth: "760px" }}>
                    <h2 className="mb-3">Healthcare Technology Insights</h2>
                    <p className="text-muted mb-0">
                        Articles and updates from Saiitek about PACS, RIS, HIS automation,
                        AI-assisted healthcare workflows, and digital transformation for
                        medical institutions.
                    </p>
                </div>
            </section>
        </main>
    );
}
