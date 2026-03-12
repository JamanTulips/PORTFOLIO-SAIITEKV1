import PageHeader from "@/components/PageHeader";
import ProjectsSection from "@/components/ProjectsSection";

export default function Projects() {
    return (
        <main>
            <PageHeader title="Projects" breadcrumb={[{ label: "Home", href: "/" }, { label: "Pages", href: "#" }, { label: "Projects", active: true }]} />
            <ProjectsSection />
        </main>
    );
}
