import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Skills from "./components/skill";
import Projects from "./components/projects";
import { ApiIcon } from "./img/apiIcon"
import { BackendIcon } from "./img/backendIcon"
import { BlockchainIcon } from "./img/blockchainIcon"
import { HtmlIcon } from "./img/htmlIcon"
import Categories from "./components/categories";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      
      <Categories categories={[
        {
          name: "API",
          description: "I design and implement secure and efficient APIs that facilitate seamless communication between different components of your application",
          icon: <ApiIcon />
        },
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
          description: "I create responsive and accessible websites using HTML, CSS, and JavaScript. I ensure that your website is user-friendly and visually appealing.",
          icon: <HtmlIcon />
        }
      ]} />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
