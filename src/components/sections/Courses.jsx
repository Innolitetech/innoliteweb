
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader.jsx';
import Icon from '../ui/Icon.jsx';
import CourseCard from '../ui/CourseCard.jsx';
import { courses } from '../../data/site.js';

// Stacked card layout — used on the homepage
function StackCard({ i, total, course, progress, reduce }) {
  const targetScale = 1 - (total - i) * 0.04;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);

  return (
    <div
      id={course.id}
      className="sticky top-0 flex h-[62vh] min-h-[460px] items-center justify-center px-4 sm:px-6 scroll-mt-24"
    >
      <motion.article
        style={{ scale: reduce ? 1 : scale, top: `calc(-8vh + ${i * 22}px)` }}
        className="relative w-full max-w-3xl origin-top"
      >
        <div className="flex h-auto min-h-[360px] flex-col justify-between gap-5 rounded-[28px] border border-orange/10 bg-gradient-to-br from-white to-[#fff6ef] p-6 shadow-[0_18px_50px_rgba(26,43,74,0.16)] sm:h-[300px] sm:min-h-0 sm:gap-0 sm:rounded-[36px] sm:p-9">
          <div className="flex items-start justify-between">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/10">
              <Icon
                name={course.icon}
                className="h-7 w-7 text-orange"
                strokeWidth={2}
              />
            </span>

            <span className="font-display text-5xl font-extrabold leading-none text-navy/[0.06] sm:text-6xl">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-xl font-bold text-navy sm:text-3xl">
                {course.title}
              </h3>

              {course.tag && (
                <span className="rounded-pill bg-orange px-3 py-0.5 font-accent text-[11px] uppercase tracking-wide text-white">
                  {course.tag}
                </span>
              )}
            </div>

            <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-gray-600 sm:text-base">
              {course.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-pill bg-navy/10 px-4 py-1.5 font-accent text-xs uppercase tracking-wide text-navy whitespace-nowrap">
              {course.duration}
            </span>

            <Link
              to={`/contact?course=${encodeURIComponent(course.title)}`}
              className="font-body text-sm font-semibold text-orange transition-colors hover:text-orange-dark hover:underline whitespace-nowrap"
            >
              Enroll Now →
            </Link>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

// Original stacked layout — homepage
function CourseStack() {
  const container = useRef(null);
  const location = useLocation();
  const reduce = useReducedMotion();
  const [activeCourseId, setActiveCourseId] = useState(courses[0].id);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scrollToCourse = (id) => {
    setActiveCourseId(id);

    const element = document.getElementById(id);

    if (element) {
      const navbarHeight = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace('#', ''));
      const matched = courses.find((c) => c.id === id);

      if (matched) {
        setActiveCourseId(matched.id);
      }
    }
  }, [location.hash]);

  return (
    <section id="courses" className="bg-offwhite py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What You'll Learn"
          title={`${courses.length} Cutting-Edge Courses`}
          subtitle="From software to hardware — learn what the industry actually uses. Click any track below or scroll to stack through them."
          className="mx-auto"
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {courses.map((course) => (
            <button
              key={course.id}
              type="button"
              onClick={() => scrollToCourse(course.id)}
              className={`rounded-pill px-3.5 py-1.5 font-accent text-xs font-semibold tracking-wide transition-all ${
                activeCourseId === course.id
                  ? 'bg-orange text-white shadow-md shadow-orange/30 scale-105'
                  : 'bg-white text-navy border border-gray-200 hover:border-orange/60 hover:text-orange'
              }`}
            >
              {course.shortName || course.title}
            </button>
          ))}
        </div>
      </div>

      <div ref={container} className="relative mt-8">
        {courses.map((course, i) => (
          <StackCard
            key={course.id}
            i={i}
            total={courses.length}
            course={course}
            progress={scrollYProgress}
            reduce={reduce}
          />
        ))}
      </div>
    </section>
  );
}

// Grid layout — dedicated Courses page
function CourseGrid() {
  return (
    <section id="courses" className="bg-offwhite py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="What You'll Learn"
          title={`${courses.length} Cutting-Edge Courses`}
          subtitle="Explore our technology courses and find the right track to build your skills."
          className="mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 auto-rows-fr items-stretch gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {courses.map((course, index) => (
            <div
              key={course.id}
              id={course.id}
              className="h-full min-w-0 scroll-mt-28"
            >
              <CourseCard course={course} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Default layout remains stack
export default function Courses({ layout = 'stack' }) {
  return layout === 'grid' ? <CourseGrid /> : <CourseStack />;
}
