import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  lead: string;
  children: ReactNode;
};

export function PageShell({ title, lead, children }: PageShellProps) {
  return (
    <main className="page-shell">
      <section className="page-card page-card--intro">
        <p className="eyebrow">Information</p>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </section>
      <section className="page-card content-area">{children}</section>
    </main>
  );
}
