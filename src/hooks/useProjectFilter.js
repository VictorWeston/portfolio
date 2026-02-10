import { useFilter } from "../context/FilterContext";

/**
 * Custom hook to get filtering utilities
 * Can be extended with additional filtering logic
 */
export function useProjectFilter() {
  const filterContext = useFilter();

  const isSkillSelected = (skillId) => {
    return filterContext.selectedSkills.includes(skillId);
  };

  const isTechSelected = (techId) => {
    return filterContext.selectedTechs.includes(techId);
  };

  const getProjectsBySkill = (skillId) => {
    return filterContext.filteredProjects.filter((project) =>
      project.skills.includes(skillId)
    );
  };

  const getProjectsByTech = (techId) => {
    return filterContext.filteredProjects.filter((project) =>
      project.techs.includes(techId)
    );
  };

  return {
    ...filterContext,
    isSkillSelected,
    isTechSelected,
    getProjectsBySkill,
    getProjectsByTech,
  };
}
