import { technologies } from '../../data/site.js';

const deviconUrl = (slug) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;

function TickerItem({ tech }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5 px-6">
      <img
        src={tech.logo || deviconUrl(tech.slug)}
        alt={tech.name}
        width={28}
        height={28}
        loading="lazy"
        className="h-7 w-7 object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="font-accent text-xs font-semibold uppercase tracking-wide text-navy">
        {tech.name}
      </span>
      <span className="text-orange" aria-hidden="true">
        ·
      </span>
    </li>
  );
}

export default function LogoTicker() {
  // Duplicate the list so the -50% translate loop is seamless
  const doubled = [...technologies, ...technologies];

  return (
    <section className="border-y border-gray-100 bg-offwhite py-8">
      <p className="mb-6 text-center font-accent text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
        Technologies We Work With
      </p>

      <div className="marquee-wrap relative overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-offwhite to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-offwhite to-transparent" />

        <ul className="marquee-track flex w-max items-center">
          {doubled.map((tech, i) => (
            <TickerItem key={`${tech.slug}-${i}`} tech={tech} />
          ))}
        </ul>
      </div>
    </section>
  );
}
