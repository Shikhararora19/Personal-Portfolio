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
    latex,
    poeltl,
    news
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
        iconUrl: poeltl,
        theme: 'btn-back-black',
        name: 'Poeltl Solver',
        description: ['Poeltl-Solver is a command-line application that helps you solve the popular NBA guessing game "Poeltl."',
            "This project uses C++ with REST API integration for fetching real-time NBA player data and provides filtered guesses based on user feedback on each attempt.",
            "Achieved success 90% of the time"
        ],
        link: 'https://github.com/Shikhararora19/Poeltl-Solver',
    },
    {
        iconUrl: inventory,
        theme: 'btn-back-yellow',
        name: 'Pocket Inventory',
        date: "September 2023 - December 2023",
        description: [' Full-Stack Development: Contributed in the full-stack development of the ”Pocket Inventory” app, utilizing Java and Android Studio for the frontend and Firebase for backend data management, ensuring seamless synchronization of inventory data across devices.',
            'User Experience Optimization: Implemented a dynamic user interface with real-time inventory updates, reducing user input time by 25% and improving overall app usability, leading to positive feedback from users.',
            "Collaborative Project Management: Coordinated with a team of 5 developers using Agile methodologies, resulting in the successful delivery of all project milestones on time."
],
        link: 'https://github.com/CMPUT301F23T07/pocket-inventory',
    },
    {
        iconUrl: news,
        theme: 'btn-back-cyan',
        name: 'News Aggregator',
        date: 'August 2024',
        description: ['Designed and Implemented Backend API: Developed a RESTful API using Python and Flask, enabling efficient data retrieval and processing from over 50 news sources, resulting in a seamless aggregation of real-time news.',
            'Optimized for Performance: Achieved a 30% reduction in load times by optimizing the application’s data fetching algorithms and implementing asynchronous processing, enhancing the overall user experience.',
            'Utilized react and CSS for the frontend development'
        ],
        link: 'https://github.com/Shikhararora19/news-aggregator'
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
        iconUrl: portfolio,
        theme: 'btn-back-red',
        name: 'Personal Portfolio',
        description: ['This portfolio is built using three.js, tailwind css and react',
            'It provides a brief introduction about me and showcases my skills and projects.',
            'The app allows users to navigate through the different sections of the portfolio using the navigation bar.',
        ],
        link: 'https://github.com/Shikhararora19/Personal-Portfolio',
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
    
    
  
    
];

