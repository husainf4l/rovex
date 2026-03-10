'use client';

import {
  Stories,
  StoriesContent,
  Story,
  StoryOverlay,
  StoryImage,
} from '@/components/ui/stories-carousel';

type Service = {
  title: string;
  description: string;
  accent: string;
  bg: string;
  image: string;
};

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Full-stack web apps — from fast marketing sites to complex SaaS platforms.',
    accent: '#0071e3',
    bg: 'from-[#0071e3]/80 via-[#0055b3]/60 to-[#001f4d]/90',
    image: '/images /card1.webp',
  },
  {
    title: 'Mobile Development',
    description: 'Polished iOS & Android apps that scale with your business.',
    accent: '#5856d6',
    bg: 'from-[#5856d6]/80 via-[#3634a3]/60 to-[#1a1848]/90',
    image: '/images /card2.webp',
  },
  {
    title: 'Custom Software',
    description: 'Purpose-built ERP, CRM, and internal tools for your exact workflows.',
    accent: '#34aadc',
    bg: 'from-[#34aadc]/80 via-[#1a7fa8]/60 to-[#0a2f3d]/90',
    image: '/images /card3.webp',
  },
  {
    title: 'Cloud & DevOps',
    description: 'AWS, Azure & GCP infrastructure, CI/CD, containers, and monitoring.',
    accent: '#34c759',
    bg: 'from-[#34c759]/80 via-[#1a8c38]/60 to-[#082e14]/90',
    image: '/images /card4.webp',
  },
  {
    title: 'IT Consulting',
    description: 'Tech strategy, architecture reviews, and digital transformation roadmaps.',
    accent: '#ff9500',
    bg: 'from-[#ff9500]/80 via-[#cc7700]/60 to-[#3d2300]/90',
    image: '/images /card5.webp',
  },
  {
    title: 'UI/UX Design',
    description: 'Research, wireframes, prototypes, and design systems — built to convert.',
    accent: '#ff2d55',
    bg: 'from-[#ff2d55]/80 via-[#cc1133]/60 to-[#3d000f]/90',
    image: '/images /card6.webp',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-28 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-[980px] px-5">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0071e3]">
            Services
          </p>
          <h2 className="text-[48px] font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-[56px]">
            Everything you need
            <br />
            to build great software.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.6] text-muted-foreground">
            From first sketch to production deployment — we cover the full
            spectrum of software development so you can focus on growing your
            business.
          </p>
        </div>
      </div>

      {/* Stories-style horizontal carousel */}
      <div className="px-5 md:px-10 lg:px-20">
        <Stories>
          <StoriesContent className="-ml-0 gap-3">
            {services.map((service) => {
              return (
                <Story key={service.title} className="aspect-[3/4] !w-[200px] sm:!w-[230px]">
                  <StoryImage
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${service.bg} opacity-60`}
                  />

                  {/* Top fade */}
                  <StoryOverlay side="top" className="h-24 from-black/30" />

                  {/* Bottom gradient + text */}
                  <StoryOverlay side="bottom" className="h-48" />
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                    <p className="text-[15px] font-bold text-white leading-snug">
                      {service.title}
                    </p>
                    <p className="mt-1.5 text-[12px] text-white/70 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </Story>
              );
            })}
          </StoriesContent>
        </Stories>
      </div>
    </section>
  );
}
