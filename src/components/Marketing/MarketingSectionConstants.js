import chartImage from "../../assets/Product-1.png";
import chartImage2 from "../../assets/Product-2.png";
import chartImage3 from "../../assets/Product-3.png";

export const SECTION_HEADER = {
  subtitle: "Explore Our Product Suite",
  title: "Jorem ipsum dolor sit",
  highlight: "amet consectetur",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export const TAB_CONTENT = [
  {
    id: "lorem",
    label: "Lorem ipsum",
    image: chartImage,
    imageAlt: "Lorem Analytics Dashboard",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    bulletPoints: [
      "Advanced analytics and reporting capabilities",
      "Real-time data synchronization across platforms",
      "Customizable dashboards with drag-and-drop interface",
    ],
    actions: {
      primary: {
        text: "Book A Discovery Call",
        to: "/book-discovery-call",
      },
      secondary: {
        text: "View Case Study",
        to: "/case-study-lorem",
      },
    },
  },
  {
    id: "corem",
    label: "Corem ipsum dolor",
    image: chartImage2,
    imageAlt: "Corem Management System",
    title: "Corem ipsum management platform",
    description:
      "Advanced management tools designed to streamline your workflow and boost productivity. Our comprehensive platform offers intuitive controls and powerful automation features.",
    bulletPoints: [
      "Automated workflow management and task assignment",
      "Team collaboration tools with real-time updates",
      "Advanced reporting with customizable metrics",
    ],
    actions: {
      primary: {
        text: "Start Free Trial",
        to: "/free-trial",
      },
      secondary: {
        text: "See Demo",
        to: "/demo-corem",
      },
    },
  },
  {
    id: "forem",
    label: "Forem ipsum",
    image: chartImage3,
    imageAlt: "Forem Integration Hub",
    title: "Forem integration solutions",
    description:
      "Seamlessly connect all your business tools and data sources. Our integration platform eliminates data silos and creates a unified business intelligence ecosystem.",
    bulletPoints: [
      "Connect 500+ popular business applications",
      "No-code integration setup with visual workflow builder",
      "Enterprise-grade security and compliance standards",
    ],
    actions: {
      primary: {
        text: "Explore Integrations",
        to: "/integrations",
      },
      secondary: {
        text: "API Documentation",
        to: "/api-docs",
      },
    },
  },
];
