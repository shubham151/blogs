import logo from "../../assets/LOGO.svg";

export const SECTION_HEADER = {
  title: "Horem ipsum dolor sit amet,",
  highlight: "consectetur adipiscing elit.",
};

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    company: "Porem ipsum",
    logo: logo,
    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    testimonial:
      "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    hasCase: false,
    caseStudySlug: null,
  },
  {
    id: 2,
    company: "Korem ipsum",
    logo: logo,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.",
    hasCase: true,
    caseStudySlug: "korem-ipsum-transformation",
  },
  {
    id: 3,
    company: "Worem ipsum",
    logo: logo,
    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    testimonial:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
    hasCase: false,
    caseStudySlug: null,
  },
];

export const CAROUSEL_CONFIG = {
  cardWidth: 350,
  gap: 20,
  initialSlide: 0,
};
