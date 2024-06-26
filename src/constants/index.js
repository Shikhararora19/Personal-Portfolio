import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    python,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    sql,
    inventory,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    ml,
    summiz,
    tailwindcss,
    threads,
    java,
    weather,
    portfolio,
    figma,
    latex
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "SQLite",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Frontend",
    },
    {
        imageUrl: latex,
        name: "Latex",
        type: "Backend",
    },

];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Shikhararora19',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shikhar-arora-',
    }
];

export const projects = [
    {
        iconUrl: inventory,
        theme: 'btn-back-yellow',
        name: 'Pocket Inventory',
        date: "September 2023 - December 2023",
        description: [' This Android app simplifies household inventory management for insurance purposes. Its user-friendly design prioritizes simplicity and flexibility for easy future development.',
            'The goal was to create an app for users to swiftly record, organize, and store item details, including categorization and image attachments.',
            "Used Java and object oriented programming to develop the app and firedatabse to authorize each use."
],
        link: 'https://github.com/CMPUT301F23T07/pocket-inventory',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-green',
        name: 'Weather App',
        date: "May 2024 - May 2024",
        description: ['The weather app is built using HTML, CSS, and JavaScript.',
            'It provides real-time weather information by fetching data from a weather API.',
            'The app allows users to search for weather information by city name and displays the current weather conditions, temperature, and humidity.',
        ],
        link: 'https://github.com/Shikhararora19/weather-app',
    },
    {
        iconUrl: ml,
        theme: 'btn-back-blue',
        name: 'Machine Learning Classification of MNIST Dataset',
        description: ['Tuned SVM models to classify MNIST datasets, achieving a classification accuracy of 95%, enhancing model understanding of margins and hyperplanes for robust feature recognition.',
            'Used Python libraries like NumPy, Matplotlib, and Scikit-learn to preprocess and classify data, and visualize model performance.',
            'Configured CNNs on the MNIST fashion and numeric datasets, achieving accuracy of 98.5%; implemented confidence interval computations that improved model reliability in performance evaluations by upto 20%.',
        ],
    },
    
    {
        iconUrl: portfolio,
        theme: 'btn-back-red',
        name: 'Personal Portfolio',
        description: ['This portfolio is built using three.js, tailwind css and react',
            'It provides a brief introduction about me and showcases my skills and projects.',
            'The app allows users to navigate through the different sections of the portfolio using the navigation bar.',
        ],
        link: 'https://github.com/Shikhararora19/Personal-Portfolio',
    }];
    /*
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
*/