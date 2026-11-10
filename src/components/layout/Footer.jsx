import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { navLinks, courses } from '../../data/site.js';

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nexus-innolite-b96372422' },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/innolite_technologies',
  },
];

const columnHeader =
  'font-accent text-xs font-semibold uppercase tracking-wide text-orange mb-4';
const linkClass =
  'font-body text-sm text-white/60 transition-all duration-150 hover:translate-x-1 hover:text-white inline-block';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — logo + about */}
          <div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block transition-opacity hover:opacity-90"
              aria-label="InnoLite Technologies Home"
            >
              <img src="/1.png" alt="InnoLite Technologies" className="h-10 w-auto rounded-lg bg-white/90 p-1" />
            </Link>
            <p className="mt-4 max-w-[220px] font-body text-sm text-white/50">
              Innovating Intelligence. Delivering Excellence.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: SocialIcon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange"
                >
                  <SocialIcon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className={columnHeader}>Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => {
                      if (link.href === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={linkClass}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Our Courses */}
          <div>
            <h4 className={columnHeader}>Our Courses</h4>
            <ul className="flex flex-col gap-2.5">
              {courses.map((course) => (
                <li key={course.title}>
                  <Link to={`/courses#${course.id}`} className={linkClass}>
                    {course.title.replace(/\s*\(.*\)/, '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className={columnHeader}>Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <a
                  href="tel:+919842181701"
                  className="font-body text-sm text-white/60 transition-colors hover:text-white"
                >
                  +91 98421 81701
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <a
                  href="mailto:innolitetechnology@gmail.com"
                  className="font-body text-sm text-white/60 transition-colors hover:text-white"
                >
                  innolitetechnology@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <a
                  href="https://maps.google.com/?q=Anna+Nagar,+Madurai,+Tamil+Nadu+625020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/60 transition-colors hover:text-white"
                >
                  No 19, New LIG Colony, Anna Nagar, Sathamangalam, Madurai – 625020, Tamil Nadu,
                  India
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center sm:flex-row sm:px-6 lg:px-8">
          <p className="font-body text-[13px] text-white/40">
            © 2026 Nexus Innolite Technologies Private Limited. All rights reserved.
          </p>
          <p className="font-body text-[13px] text-white/40">
            Made with <span className="text-orange">❤</span> in Madurai
          </p>
        </div>
      </div>
    </footer>
  );
}
