import { useFilter } from "../../context/FilterContext";

function FilterBar() {
  const { selectedTechs, allTechs, clearFilters, hasActiveFilters } =
    useFilter();

  if (!hasActiveFilters) return null;

  const selectedTechNames = allTechs
    .filter((t) => selectedTechs.includes(t.id))
    .map((t) => t.name);

  return (
    <div className="filter-bar">
      <div className="filter-bar__content">
        <span className="filter-bar__label">Active Filters:</span>
        <div className="filter-bar__tags">
          {selectedTechNames.map((name) => (
            <span key={name} className="filter-bar__tag filter-bar__tag--tech">
              {name}
            </span>
          ))}
        </div>
        <button className="filter-bar__clear" onClick={clearFilters}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
