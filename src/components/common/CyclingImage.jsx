import { useState, useEffect, useRef } from "react";

function CyclingImage({ src, alt, className = "" }) {
  const images = Array.isArray(src) ? src : [src];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFading(false);
      }, 300);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  if (!images.length || !images[0]) return null;

  return (
    <div className={`cycling-image ${className}`}>
      <img
        src={images[currentIndex]}
        alt={alt}
        className={fading ? "cycling-image--fade-out" : "cycling-image--fade-in"}
      />
      {images.length > 1 && (
        <div className="cycling-image__dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`cycling-image__dot${i === currentIndex ? " cycling-image__dot--active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CyclingImage;
