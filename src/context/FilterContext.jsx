import { createContext, useContext, useState, useMemo } from "react";
import { projects, techs, techTypes } from "../data";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(null);

  const openProject = (projectId) => setActiveProjectId(projectId);
  const closeProject = () => setActiveProjectId(null);

  const toggleTech = (techId) => {
    setSelectedTechs((prev) =>
      prev.includes(techId)
        ? prev.filter((id) => id !== techId)
        : [...prev, techId]
    );
  };

  const clearFilters = () => {
    setSelectedTechs([]);
  };

  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0) {
      return projects;
    }

    return projects.filter((project) => {
      return selectedTechs.some((techId) => project.techs.includes(techId));
    });
  }, [selectedTechs]);

  const hasActiveFilters = selectedTechs.length > 0;

  // Group techs by type
  const techsByType = useMemo(() => {
    const grouped = {};
    Object.keys(techTypes).forEach((type) => {
      grouped[type] = techs.filter((tech) => tech.type === type);
    });
    return grouped;
  }, []);

  const value = {
    selectedTechs,
    toggleTech,
    clearFilters,
    filteredProjects,
    hasActiveFilters,
    allTechs: techs,
    techsByType,
    techTypes,
    activeProjectId,
    openProject,
    closeProject,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
