import { FiMenu } from "react-icons/fi";
import { FaBrain } from "react-icons/fa6";
import { SiJirasoftware } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaInnosoft } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
export const doData = [
    {
        id: 1,
        title: 'Business Strategy',
        description: 'Leveraging Technology to Reshape Business Models & Unlock New Revenue Streams',
        icon: FiMenu
    },
    {
        id: 2,
        title: "Problem Solving",
        description: "Analyzing complex challenges, identifying root causes, and implementing innovative solutions",
        icon: FaBrain
    }
    ,
    {
        id: 3,
        title: "App Development",
        description: "Designing and building high-performance, user-friendly applications with scalable architecture.",
        icon: SiJirasoftware
    },
    {
        id: 4,
        title: "Web Development",
        description: "Designing and building high-performance, user-friendly website with scalable architecture.",
        icon: CgWebsite
    },
    {
        id: 5,
        title: "SEO",
        description: "Optimizing websites to improve search engine rankings, drive organic traffic.",
        icon: FaInnosoft
    },
    {
        id: 6,
        title: "Machine Learning",
        description: "Building and deploying models to enable data-driven predictions and automation.",
        icon: BsRobot
    }
]

// Social Icons Array with Defined Type
export const socialIcons = [
    { id: 1, icon: FiFacebook },
    { id: 2, icon: FiInstagram },
    { id: 3, icon: FiLinkedin }
];
