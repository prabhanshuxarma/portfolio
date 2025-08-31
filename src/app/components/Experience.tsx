'use client';

import React from 'react';

const experienceData = [
  {
    title: 'Sr. UI Designer and Developer',
    company: 'Appinop Technologies Pvt. Ltd.',
    duration: 'May 2025 – Present',
    points: [
      'Design and arrange interface components, preparing assets for production.',
      'Collaborate with technical teams to balance design and technical requirements.',
    ],
  },
  {
    title: 'Sr. UI Developer',
    company: 'Ubuy Technologies Pvt. Ltd.',
    duration: 'June 2021 – September 2024',
    points: [
      'Design and arrange interface components, preparing assets for production.',
      'Develop designs for varying browser and device demands.',
      'Collaborate with technical teams to balance design and technical requirements.',
      'Plan and conduct user research to support UX design projects.',
      'Improve user experience through A/B testing and UX testing.',
      'Manage online content with SEO best practices to enhance search rankings.',
      'Ensure timely project completion through effective planning and deadline management.',
    ],
  },
  {
    title: 'Freelancer UI Developer',
    company: 'Self-employed',
    duration: 'Dec 2019 – June 2021',
    points: [
      'Developed highly effective, responsive web pages for mobile, tablet, and desktop.',
      'Managed web project planning and strategic direction for clients.',
      'Delivered clean, efficient code while adhering to project scopes and performance requirements.',
      'Planned websites and applications to optimize multimedia showcases.',
      'Improved UX through continuous testing and iteration.',
    ],
  },
  {
    title: 'UI Developer',
    company: 'Dazzler Software Pvt. Ltd.',
    duration: 'Sept 2018 – Oct 2019',
    points: [
      'Designed mobile, tablet, and desktop web pages with strong performance.',
      'Built reusable code to enhance efficiency and reduce costs.',
      'Managed project planning for web design and development teams.',
      'Collaborated with designers to implement innovative website concepts.',
      'Delivered consistent, high-quality branding and design.',
    ],
  },
  {
    title: 'UI/UX Designer',
    company: 'Ownrox Technologies Pvt. Ltd.',
    duration: 'Jun 2017 – Aug 2018',
    points: [
      'Developed and redesigned screen layouts to enhance user efficiency.',
      'Designed brochures, banners, and signs in alignment with brand values.',
      'Worked with clients to define design and marketing visions for graphic design projects.',
      'Delivered high-quality branded content within established brand guidelines.',
    ],
  },
  {
    title: 'Web Designer',
    company: 'Exception Web',
    duration: 'March 2014 – July 2015',
    points: [
      'Created web designs based on client requirements with pixel precision.',
      'Worked on cross-browser compatibility, layout enhancements, and performance optimization.',
      'Delivered design assets including banners, UI elements, and icons.',
    ],
  },
  {
    title: 'Web Designer',
    company: 'BLive Web Solutions Pvt. Ltd.',
    duration: 'March 2012 – June 2013',
    points: [
      'Designed websites from scratch and converted them into fully functional front-end layouts.',
      'Maintained client websites and implemented design updates regularly.',
    ],
  },
  {
    title: 'Fresher Web Designer',
    company: 'Accure Infotech',
    duration: 'September 2011 – February 2012',
    points: [
      'Created website designs and handled front-end development tasks.',
      'Worked on design layouts, font selection, and web optimization.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto  p-7 lg:p-14">
      <h2 className="text-lg font-semibold mb-8">Professional Experience</h2>
      <div className="space-y-10">
        {experienceData.map((exp, index) => (
          <div key={index} className="border-l-2 border-primary pl-6 relative hover:bg-gray-50 p-4 hover:cursor-pointer">
            <div className="absolute left-1 top-2 w-4 h-4 bg-primary rounded-full"></div>
                 <h3 className="text-md font-semibold text-dark">{exp.title}</h3>
                    <p className="text-sm mt-2 text-muted">
                        {exp.company} | {exp.duration}
                    </p>
                    <ul className="list-disc mt-3 pl-5 font-light leading-7 text-sm text-zinc-600">
                        {exp.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
