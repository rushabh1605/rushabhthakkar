import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  article,
  cardio,
  denoise
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Artifical Intelligence",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Administrator",
    company_name: "Stevens Institute of Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Utilized tools like 2FA-Okta and IDM to provide IT support for 5000+ Students, Faculty, and Staff members",
      "Managed an average of 20 IT-related tasks per week, including computer domain integration, hardware setup, and general support for Information Technology, ensuring a professional user experience",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Hindustan IT Services",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      "Implemented an AI-based Customer Relationship Management dashboard using React.js, contributing to a 20% increase in project tracking efficiency",
      " Developed the user interface using Material-UI, resulting in a 30% improvement in user satisfaction",
      "Modelled an AI-based system for evaluating employee effectiveness, leading to a 25% increase in securing contracts",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company_name: "HOPS Healthcare",
    icon: shopify,
    iconBg: "#383E56",
    date: "Apr 2021 - Aug 2021",
    points: [
      "Executed an innovative deep learning algorithm achieving an 82% accuracy rate in diagnosing skin diseases",
      "Streamlined image processing workflows, resulting in 25% reduction in manual efforts and more efficient handling of large-scale datasets",
      "Collaborated with the frontend team, increasing end-user satisfaction by 25% through seamless integration of the new system with existing software",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "The Sparks Foundation",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Apr 2021",
    points: [
      "Spearheaded 5 data science projects with data visualization, analysis, and machine learning models, including multi-class object detection algorithms using Python and libraries such as NumPy, Pandas, and Scikit-learn",
      "Analyzed complex structured and unstructured datasets using data cleaning, wrangling, and pre-processing techniques to optimize machine learning algorithms, achieving a 12% learning accuracy improvement",
      "Developed a prediction model using Google Colab for pre-processing data and building machine learning models to identify areas for increasing profits for store owners by 15%",
    ],
  },
];

const education = [
  {
    title: "Master's in Computer Science",
    company_name: "Stevens Institute of Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Utilized tools like 2FA-Okta and IDM to provide IT support for 5000+ Students, Faculty, and Staff members",
      "Managed an average of 20 IT-related tasks per week, including computer domain integration, hardware setup, and general support for Information Technology, ensuring a professional user experience",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Hindustan IT Services",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      "Implemented an AI-based Customer Relationship Management dashboard using React.js, contributing to a 20% increase in project tracking efficiency",
      " Developed the user interface using Material-UI, resulting in a 30% improvement in user satisfaction",
      "Modelled an AI-based system for evaluating employee effectiveness, leading to a 25% increase in securing contracts",
    ],
  },
  {
    title: "AI and Health Informatics Intern",
    company_name: "HOPS Healthcare",
    icon: shopify,
    iconBg: "#383E56",
    date: "Apr 2021 - Aug 2021",
    points: [
      "Collaborated with a team of five to build an AI-based back-end for a healthcare project, resulting in a 15% increase in accuracy in detecting skin diseases in remote regions",
      "Computed pipeline process for MRI and CT-scan detecting diseases, processing an average of 50 DICOM daily",
      "Prepared 10 weekly reports and executed bi-weekly front-end and back-end validations",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "The Sparks Foundation",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Apr 2021",
    points: [
      "Spearheaded 5 data science projects with data visualization, analysis, and machine learning models, including multi-class object detection algorithms using Python and libraries such as NumPy, Pandas, and Scikit-learn",
      "Analyzed complex structured and unstructured datasets using data cleaning, wrangling, and pre-processing techniques to optimize machine learning algorithms, achieving a 12% learning accuracy improvement",
      "Developed a prediction model using Google Colab for pre-processing data and building machine learning models to identify areas for increasing profits for store owners by 15%",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Supa Strikas: All Football",
    description:
      "Supa Strikas: All Football is your go-to European football hub, offering real-time updates, comprehensive statistics, and an engaging betting game, all in one convenient platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "microsoft azure",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "http://github.com/rushabh1605/devloopers",
  },
  {
    name: "Stevens: Lost and Found",
    description:
      "Created Stevens Lost and Found, a web application using Node.js, Express.js, MongoDB, Handlebars, and Bootstrap CSS. Facilitated the reporting and retrieval of lost items on campus, enhancing efficiency and reducing unrecovered property instances. Designed a user-friendly interface to streamline engagement and facilitate weekly item recoveries, enhancing the overall campus experience.",
    tags: [
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rushabh1605/stevens-lost-found",
  },
  {
    name: "CPU Scheduling Algorithm",
    description:
      "This project implements eight CPU scheduling algorithms with dynamic process characteristics, offering visualization tools and performance comparison metrics to analyze their efficiency using HTML, CSS, Vanilla JS, and Google Charts",
    tags: [
      {
        name: "vanilla js",
        color: "cream-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "google charts",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Information Retrieval from News Articles Using Generative Models",
    description:
      "Developed a state-of-the-art natural language processing project using transformer architectures such as BERT and GPT for information retrieval and summarization of news articles, addressing challenges in data preprocessing, model optimization, and dataset enrichment, resulting in promising advancements and contributions to the field.",
    tags: [
      {
        name: "natural language processing",
        color: "blue-text-gradient",
      },
      {
        name: "generative modeling",
        color: "pink-text-gradient",
      },
      {
        name: "deep learning",
        color: "green-text-gradient",
      },
      {
        name: "model architecture design",
        color: "white-text-gradient",
      },
    ],
    image: article,
    source_code_link: "https://github.com/rushabh1605/Information-Retrieval-from-News-Articles",
  },
  {
    name: "Cardiovascular Disease Recommendation for Health Practitioner",
    description:
      "Created Stevens Lost and Found, a web application using Node.js, Express.js, MongoDB, Handlebars, and Bootstrap CSS. Facilitated the reporting and retrieval of lost items on campus, enhancing efficiency and reducing unrecovered property instances. Designed a user-friendly interface to streamline engagement and facilitate weekly item recoveries, enhancing the overall campus experience.",
    tags: [
      {
        name: "data mining",
        color: "green-text-gradient",
      },
      {
        name: "machine learning models",
        color: "pink-text-gradient",
      },
      {
        name: "tkinter GUI",
        color: "green-text-gradient",
      },
    ],
    image: cardio,
    source_code_link: "https://github.com/rushabh1605/Cardiovascular-Disease-Classification",
  },
  {
    name: "Advanced Data Reconstruction and Denoising",
    description:
      "Implemented Low Light Enhancement with MIRNet to achieve 95% darkness and 50% noise reduction, enhancing image quality for medical imaging, LiDAR, and image processing applications",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "data visualization",
        color: "pink-text-gradient",
      },
      {
        name: "deep learning",
        color: "green-text-gradient",
      },
      {
        name: "image processing",
        color: "white-text-gradient",
      },
    ],
    image: denoise,
    source_code_link: "https://github.com/rushabh1605",
  },
];

export { services, technologies, experiences, education, testimonials, projects };
