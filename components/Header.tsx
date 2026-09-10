"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/lib/site";
import { Mark } from "@/components/Mark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled((current) => {
        const next = window.scrollY > 12;
        return current === next ? current : next;
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="brand-lockup" href="/" aria-label="Ngagdra Dorji Choegar home" onClick={() => setOpen(false)}>
          <Mark compact />
          <span className="brand-name-long">NGAGDRA DORJI CHOEGAR</span>
          <span className="brand-name-short">NGAGDRA</span>
        </Link>
        <button type="button" className="menu-button" aria-expanded={open} aria-controls="primary-navigation" aria-label={`${open ? "Close" : "Open"} primary navigation`} onClick={() => setOpen((v) => !v)}>
          <span>{open ? "Close" : "Menu"}</span>
          <span className="menu-lines" aria-hidden="true" />
        </button>
        <nav id="primary-navigation" className={open ? "nav nav--open" : "nav"} aria-label="Primary navigation">
          {primaryNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>;
          })}
          <Link className="nav-support" href="/support" aria-current={pathname === "/support" ? "page" : undefined} onClick={() => setOpen(false)}>Support</Link>
        </nav>
      </div>
    </header>
  );
}
