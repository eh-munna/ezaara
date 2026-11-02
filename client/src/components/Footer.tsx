import {
  ArrowUpRight,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router';

type FooterLink = { to: string; label: string };

const helpLinks: FooterLink[] = [
  { to: '/shipping-returns', label: 'Shipping & returns' },
  { to: '/faq', label: 'FAQ' },
  { to: '/size-guide', label: 'Size guide' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks: FooterLink[] = [
  { to: '/privacy', label: 'Privacy policy' },
  { to: '/imprint', label: 'Imprint (Impressum)' },
  { to: '/terms', label: 'Terms (AGB)' },
];

const socialLinks = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Facebook' },
  { href: '#', label: 'Pinterest' },
  { href: '#', label: 'TikTok' },
];

const paymentMethods = ['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Klarna'];

const linkClass = 'text-sm text-neutral-600 hover:text-black hover:underline';

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="text-lg font-bold tracking-tight">
              ezaara
            </Link>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden />
                <span>
                  Musterstraße 12
                  <br />
                  10115 Berlin, Germany
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" aria-hidden />
                <a href="mailto:hello@ezaara.com" className="hover:underline">
                  hello@ezaara.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" aria-hidden />
                <a href="tel:+4930123456" className="hover:underline">
                  +49 30 123 456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Truck size={16} className="shrink-0" aria-hidden />
                <span>Free shipping over €75</span>
              </li>
            </ul>
          </div>

          <LinkColumn title="Help" links={helpLinks} />
          <LinkColumn title="Legal" links={legalLinks} />

          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Follow us
            </h2>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`${linkClass} inline-flex items-center gap-1`}
                  >
                    {social.label}
                    <ArrowUpRight size={14} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Ezaara. All rights reserved.
          </p>
          <ul
            className="flex flex-wrap items-center gap-2"
            aria-label="Accepted payment methods"
          >
            <li className="text-neutral-500">
              <CreditCard size={18} aria-hidden />
            </li>
            {paymentMethods.map((method) => (
              <li
                key={method}
                className="rounded border border-neutral-300 px-2 py-1 text-xs font-medium text-neutral-700"
              >
                {method}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
