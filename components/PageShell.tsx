import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  lead: string;
  children: ReactNode;
  introVisual?: ReactNode;
};

export function PageShell({ title, lead, children, introVisual }: PageShellProps) {
  return (
    <main className="page-shell">
      <section
        className={`page-card page-card--intro${introVisual ? " page-card--intro-with-visual" : ""}`}
      >
        <div>
          <p className="eyebrow">Information</p>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
        </div>
        {introVisual}
      </section>
      <section className="page-card content-area">{children}</section>
    </main>
  );
}
