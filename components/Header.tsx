"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navActions, primaryNav } from "@/lib/site";
import { Mark } from "@/components/Mark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Which submenu is open (by parent href), if any.
  const [group, setGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const close = () => {
    setOpen(false);
    setGroup(null);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      setGroup(null);
    };
    // A click anywhere outside an open submenu closes it.
    const closeOnOutside = (event: PointerEvent) => {
      if (!(event.target instanceof Element) || !event.target.closest(".nav-group")) setGroup(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOnOutside);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOnOutside);
    };
  }, []);

  // While the mobile menu is open, the page behind it does not scroll.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("menu-open", open);
    return () => root.classList.remove("menu-open");
  }, [open]);

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
        <Link className="brand-lockup" href="/" aria-label="Ngagdra Dorji Choegar home" onClick={close}>
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
            if (!item.children) {
              return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={close}>{item.label}</Link>;
            }
            const expanded = group === item.href;
            const within = active || item.children.some((child) => pathname === child.href);
            const id = `nav-group-${item.href.slice(1)}`;
            return (
              <div key={item.href} className={`nav-group${expanded ? " nav-group--open" : ""}`}>
                <button type="button" className="nav-group__toggle" aria-expanded={expanded} aria-controls={id} data-current={within ? "true" : undefined} onClick={() => setGroup(expanded ? null : item.href)}>
                  {item.label}
                  <span className="nav-group__caret" aria-hidden="true" />
                </button>
                <ul id={id} className="nav-group__menu">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} aria-current={pathname === child.href ? "page" : undefined} onClick={close}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <span className="nav-actions">
            {navActions.map((item, index) => (
              <Link key={item.href} className={index === navActions.length - 1 ? "nav-support nav-support--primary" : "nav-support"} href={item.href} aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined} onClick={close}>{item.label}</Link>
            ))}
          </span>
        </nav>
      </div>
    </header>
  );
}
