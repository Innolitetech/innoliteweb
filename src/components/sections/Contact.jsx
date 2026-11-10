import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, Loader2, ExternalLink } from 'lucide-react';
import { contactInfo, courses } from '../../data/site.js';

// ─── Web3Forms Configuration ────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || 'a443894e-dadf-4ce2-aa5e-8c051371d150';
// ────────────────────────────────────────────────────────────────────────────────

const iconMap = { Phone, Mail, MapPin };

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-body text-sm text-gray-900 placeholder:text-gray-400 transition duration-150 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20';
const labelClass =
  'mb-1.5 block font-accent text-xs uppercase tracking-wider text-gray-500';

export default function Contact() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const courseParam = params.get('course');
    if (courseParam) {
      const matched = courses.find(
        (c) =>
          c.title.toLowerCase() === courseParam.toLowerCase() ||
          c.id === courseParam.toLowerCase() ||
          c.slug === courseParam.toLowerCase() ||
          (c.shortName && c.shortName.toLowerCase() === courseParam.toLowerCase())
      );
      if (matched) {
        setForm((prev) => ({ ...prev, course: matched.title }));
      } else {
        setForm((prev) => ({ ...prev, course: courseParam }));
      }
    }
  }, [location.search]);

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSendError('');
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    if (!form.course) next.course = 'Please select a course.';
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    setSending(true);
    setSendError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          phone: form.phone,
          course: form.course,
          message: form.message || 'No additional message.',
          subject: `New Enquiry from ${form.name} — ${form.course}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || 'Form submission failed.');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      setSendError(
        'Something went wrong while sending your message. Please try again or contact us directly.',
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left — info + map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-accent text-xs font-semibold uppercase tracking-[0.12em] text-orange">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Start Your Tech Journey Today
          </h2>
          <p className="mt-4 max-w-md font-body text-base leading-relaxed text-gray-600">
            Visit us in Madurai or drop us a message. We&apos;ll get back within 24 hours.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {contactInfo.map((item) => {
              const ItemIcon = iconMap[item.icon];
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange/10">
                    <ItemIcon className="h-5 w-5 text-orange" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-navy">
                      {item.label}
                    </p>
                    {item.values.map((value) => {
                      if (item.icon === 'Phone') {
                        return (
                          <a
                            key={value}
                            href={`tel:${value.replace(/\s+/g, '')}`}
                            className="block font-body text-sm text-gray-600 transition-colors hover:text-orange"
                          >
                            {value}
                          </a>
                        );
                      }
                      if (item.icon === 'Mail') {
                        return (
                          <a
                            key={value}
                            href={`mailto:${value}`}
                            className="block font-body text-sm text-gray-600 transition-colors hover:text-orange"
                          >
                            {value}
                          </a>
                        );
                      }
                      return (
                        <p key={value} className="font-body text-sm text-gray-600">
                          {value}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <iframe
              title="InnoLite Technologies — Anna Nagar, Madurai"
              src="https://maps.google.com/maps?q=9.923933,78.149350&z=17&output=embed"
              className="h-[200px] w-full rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="mt-2 text-right">
              <a
                href="https://www.google.com/maps/search/?api=1&query=9.923933%2C78.149350"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-body text-xs font-semibold text-orange hover:underline"
              >
                Open in Google Maps
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-gray-100 bg-offwhite p-6 shadow-sm sm:p-8"
        >
          {submitted ? (
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
              <h3 className="mt-4 font-display text-2xl font-bold text-navy">
                Thanks!
              </h3>
              <p className="mt-2 font-body text-gray-600">
                We&apos;ll reach you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  className={inputClass}
                  disabled={sending}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  className={inputClass}
                  disabled={sending}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="+91 ..."
                  className={inputClass}
                  disabled={sending}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="course" className={labelClass}>
                  Course Interest
                </label>
                <select
                  id="course"
                  value={form.course}
                  onChange={update('course')}
                  className={`${inputClass} ${form.course ? '' : 'text-gray-400'}`}
                  disabled={sending}
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.title} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <p className="mt-1 text-xs text-red-500">{errors.course}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us what you're looking for..."
                  className={`${inputClass} resize-none`}
                  disabled={sending}
                />
              </div>

              {sendError && (
                <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">
                  {sendError}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={sending ? undefined : { y: -2 }}
                whileTap={sending ? undefined : { scale: 0.98 }}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange py-3.5 font-display text-base font-semibold text-white shadow-sm transition-colors hover:bg-orange-dark hover:shadow-lg hover:shadow-orange/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

