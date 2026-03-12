import React from 'react';
import Link from 'next/link';

interface PageHeaderProps {
    title: string;
    breadcrumb: { label: string; href?: string; active?: boolean }[];
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
    return (
        <div className="container-fluid page-header py-5">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4 animated slideInDown">{title}</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center mb-0">
                        {breadcrumb.map((item, index) => (
                            <li key={index} className={`breadcrumb-item ${item.active ? 'active' : ''}`} aria-current={item.active ? 'page' : undefined}>
                                {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default PageHeader;
