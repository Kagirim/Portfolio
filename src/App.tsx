import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Skills from "./components/skill";
import Projects from "./components/projects";
import { ApiIcon } from "./img/apiIcon"
import { BackendIcon } from "./img/backendIcon"
import { BlockchainIcon } from "./img/blockchainIcon"
import { HtmlIcon } from "./img/htmlIcon"
import Categories from "./components/categories";
import { GitIcon } from "./img/gitIcon";
import { StarIcon } from "./img/starIcon";
import { LinkIcon } from "./img/linkIcon";



function App() {
  return (
    <>
      <NavBar />
      <Hero />
      
      <Categories categories={[
        {
          name: "Backend",
          description: "I craft robust Python, Golang, and Django backend solutions tailored to your needs. From database design to API development, I ensure seamless functionality and high performance.",
          icon: <BackendIcon />
        },
        {
          name: "Blockchain",
          description: "I develop decentralized applications (dApps) and smart contracts on the Ethereum blockchain using Solidity. I also provide consultation on blockchain technology and its applications.",
          icon: <BlockchainIcon />
        },
        {
          name: "HTML",
          description: "I create responsive and accessible websites with React, JavaScript, Tailwindcss, and Bootstrap. I ensure that your website is user-friendly and visually appealing.",
          icon: <HtmlIcon />
        }
      ]} />
      
      <Projects projects={[
        {
          title: "Project 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
          tags: ["Python", "Django", "API"],
          link: "https://github.com",
          linkIcon: <LinkIcon />,
          starIcon: <StarIcon />,
          gitIcon: <GitIcon />
        },
        {
          title: "Project 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
          tags: ["React", "JavaScript", "HTML"],
          link: "https://github.com",
          linkIcon: <LinkIcon />,
          starIcon: <StarIcon />,
          gitIcon: <GitIcon />
        },
        {
          title: "Project 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
          tags: ["Solidity", "Ethereum", "Blockchain"],
          link: "https://github.com",
          linkIcon: <LinkIcon />,
          starIcon: <StarIcon />,
          gitIcon: <GitIcon />
        }
      ]} />
      <Skills />
    </>
  );
}

export default App;
