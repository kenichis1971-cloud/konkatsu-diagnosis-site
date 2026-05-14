import type { ReactNode } from "react";
import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function Hero({ eyebrow, title, description, ctaHref, ctaLabel }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__overlay" />
      <div className="hero__content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 id="hero-title">{title}</h1>
        <p>{description}</p>
        {ctaHref && ctaLabel ? (
          <Link className="button" href={ctaHref}>
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
