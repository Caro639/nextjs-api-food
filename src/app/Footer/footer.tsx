import Link from "next/link";
import styles from "../produit/[barcode]/page.module.css";

const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "Mentions légales" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        {footerLinks.map((link) => (
          <h4 key={link.href} className={styles.title}>
            <Link href={link.href} className={styles.retour} aria-label={link.label}>
              {link.label}
            </Link>
          </h4>
        ))}
      </nav>

      {/* Optional social media links */}
      <div className={styles.socials}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </div>

      {/* Dynamic copyright */}
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
