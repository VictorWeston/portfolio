function Icon({ src, alt = "", className = "" }) {
  if (!src) return null;
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`icon ${className}`}
      loading="lazy"
    />
  );
}

export default Icon;
