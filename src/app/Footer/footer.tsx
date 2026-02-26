import Link from "next/link";
import styles from "../produit/[barcode]/page.module.css";

const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "Mentions légales" },
  // { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className='footer-nav'>
        {footerLinks.map((link) => (
          <h4 key={link.href} className={styles.title}>
            <Link
              href={link.href}
              className={styles.retour}
              aria-label={link.label}
            >
              {link.label}
            </Link>
          </h4>
        ))}
      </nav>

      {/* Réseaux sociaux */}
      <div className='footer-socials'>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
          Twitter
        </a>
        <a
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Facebook
        </a>
      </div>

      {/* Copyright dynamique */}
      <p className='footer-year'>
        &copy; {new Date().getFullYear()} Qué&apos;Za&apos;Quo?. Tous droits
        réservés.
      </p>
    </footer>
  );
}

export default Footer;
