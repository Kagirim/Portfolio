import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Skills from "./components/skill";
import Projects from "./components/projects";
import { ApiIcon } from "./img/apiIcon"
import { BackendIcon } from "./img/backendIcon"
import { BlockchainIcon } from "./img/blockchainIcon"
import { HtmlIcon } from "./img/htmlIcon"
import Categories from "./components/categories";
import { ForkIcon } from "./img/forkIcon";
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
          description: "From database design to API development, I ensure seamless functionality and high performance.",
          icon: <BackendIcon />
        },
        {
          name: "Blockchain",
          description: "I develop decentralized applications (dApps) and smart contracts on the Ethereum blockchain using Solidity.",
          icon: <BlockchainIcon />
        },
        {
          name: "HTML",
          description: "I create responsive and accessible websites with React, JavaScript, Tailwindcss, and Bootstrap.",
          icon: <HtmlIcon />
        }
      ]} />
      
      <Projects projects={[
        {
          title: "WhatsApp Weave",
          description: "WhatsAppWeave is a powerful Node.js application designed to automate the management of WhatsApp through retrieval and saving data.",
          tags: ["Typescript", "NodeJs", "WhatsApp API"],
          link: "https://github.com/Kagirim/WhatsAppWeave/stargazers",
          starIcon: <StarIcon />,
          gitIcon: <ForkIcon />
        },
        {
          title: "Thaka Secrets",
          description: "A web based cosmetics eCommerce site",
          tags: ["Django", "JavaScript", "HTML"],
          link: "https://github.com/Kagirim/thaka-secrets",
          starIcon: <StarIcon />,
          gitIcon: <ForkIcon />
        },
        {
          title: "Over Network Dapp",
          description: "A move module for a decentralized social media platform. The platform allows users to create and manage accounts, follow other accounts, and post, comment, and like content. Account ownership is handled through NFTs.",
          tags: ["Move", "Sui", "Blockchain"],
          link: "https://github.com/Kagirim/over-network-nft/stargazers",
          starIcon: <StarIcon />,
          gitIcon: <ForkIcon />
        }
      ]} />
      <Skills />
    </>
  );
}

export default App;
