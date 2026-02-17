import { useState } from "react";
import { FilterProvider } from "./context/FilterContext";
import { FilterBar } from "./components/common";
import ProjectModal from "./components/common/ProjectModal";
import {
  PersonalInfo,
  Quote,
  Techs,
  Projects,
  Experience,
  Hobbies,
  Passion,
  Links,
  Socials,
} from "./components/sections";

const TABS = [
  { id: "profile", label: "Profile" },
  { id: "about", label: "About Me" },
  { id: "connect", label: "Socials & Links" },
];

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <FilterProvider>
      <div className="portfolio">
        <header className="portfolio__header">
          <div className="portfolio__header-content">
            <h1 className="portfolio__logo">Portfolio</h1>
            <nav className="tabs">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`tabs__tab ${activeTab === tab.id ? "tabs__tab--active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </header>
        
        <FilterBar />
        
        <main className="portfolio__main">
          {activeTab === "profile" && (
            <>
              <PersonalInfo />
              <Quote />
              <Techs />
              <Projects />
              <Experience />
            </>
          )}
          
          {activeTab === "about" && (
            <>
              <Hobbies />
              <Passion />
            </>
          )}
          
          {activeTab === "connect" && (
            <>
              <Socials />
              <Links />
            </>
          )}
        </main>
      </div>
      <ProjectModal />
    </FilterProvider>
  );
}

export default App;
