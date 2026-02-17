import { useFilter } from "../../context/FilterContext";

const CROSS_REF_REGEX = /@\[([^\]]+)\]\(([^)]+)\)/g;

function CrossRefText({ text, className, as: Tag = "p" }) {
  const { openProject } = useFilter();

  if (!text || !text.includes("@[")) {
    return <Tag className={className}>{text}</Tag>;
  }

  const parts = [];
  let lastIndex = 0;
  let match;

  const regex = new RegExp(CROSS_REF_REGEX.source, "g");
  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const [, displayText, projectId] = match;
    parts.push(
      <span
        key={match.index}
        className="cross-ref"
        onClick={(e) => {
          e.stopPropagation();
          openProject(projectId);
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation();
            openProject(projectId);
          }
        }}
        title={`View project: ${displayText}`}
      >
        {displayText}
      </span>
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <Tag className={className}>{parts}</Tag>;
}

export default CrossRefText;
