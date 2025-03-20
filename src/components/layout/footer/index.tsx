import { COMPANY_NAME } from '@/app/constants';
import Link from 'next/link';
import styles from './footer.module.scss'; // Import SCSS module

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <h2 className={styles.footerHeading}>{COMPANY_NAME}</h2>
            <p>Empowering businesses with cutting-edge solutions.</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <h2 className={styles.footerHeading}>Quick Links</h2>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-4">
            <h2 className={styles.footerHeading}>Follow Us</h2>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="https://facebook.com/yourpage" target="_blank">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/yourpage" target="_blank">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/yourpage" target="_blank">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className={styles.footerDivider}></div>

      <div className="text-center container">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
}
