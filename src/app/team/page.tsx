import PageHeader from "@/components/PageHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Team",
  description:
    "Meet the Saiitek team behind our healthcare technology solutions — experts in PACS, RIS, HIS automation, and medical software development in Nepal.",
  path: "/team",
});

export default function Team() {
    return (
        <main>
            <PageHeader
                title="Our Team"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Pages", href: "#" },
                    { label: "Our Team", active: true },
                ]}
            />
            <section className="container py-5">
                <div className="text-center mx-auto" style={{ maxWidth: "760px" }}>
                    <h2 className="mb-3">Healthcare Technology Experts</h2>
                    <p className="text-muted mb-0">
                        Our team brings together healthcare workflow knowledge, medical
                        imaging experience, and software engineering expertise to support
                        hospitals and diagnostic centers.
                    </p>
                </div>
            </section>
        </main>
    );
}
