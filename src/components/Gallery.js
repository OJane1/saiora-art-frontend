import { useState, useEffect } from "react";
import "./Gallery.css";
import galleryItems from "./galleryImages";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [touchStartX, setTouchStartX] = useState(null);

  const selected = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex === null) return;
    const newIndex = selectedIndex > 0 ? selectedIndex - 1 : galleryItems.length - 1;
    setLoading(true);
    setSelectedIndex(newIndex);
  };
  
  const showNext = () => {
    if (selectedIndex === null) return;
    const newIndex = selectedIndex < galleryItems.length - 1 ? selectedIndex + 1 : 0;
    setLoading(true);
    setSelectedIndex(newIndex);
  };
  
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  const handleTouchStart = (e) => setTouchStartX(e.changedTouches[0].screenX);

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (diff > 50) showPrev();
    else if (diff < -50) showNext();
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => {
                setSelectedIndex(index);
                setLoading(true);
        }}
          >
            {item.type === "video" ? (
              <video controls muted>
                {item.sources.map((src, i) => (
                  <source key={i} src={src} />
                ))}
              </video>
            ) : (
              <img src={item.src} alt={item.alt} />
            )}
          </div>
        ))}
      </div>

      {selected && (
        <div className="lightbox" 
        onClick={closeLightbox}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <button className="lightbox-nav left" onClick={showPrev}>
              ‹
            </button>
            <button className="lightbox-nav right" onClick={showNext}>
              ›
            </button>

            {loading && <div className="lightbox-spinner" />}


            {selected.type === "video" ? (
  <video
    key={selectedIndex}  // <-- force remount on index change
    controls
    autoPlay
    onLoadedData={() => setLoading(false)}
    className={loading ? "media blur" : "media"}
  >
    {selected.sources.map((src, i) => (
      <source key={i} src={src} />
    ))}
  </video>
) : (
  <img
    key={selectedIndex}  // <-- force remount on index change
    src={selected.src}
    alt={selected.alt}
    onLoad={() => setLoading(false)}
    className={loading ? "media blur" : "media"}
  />
)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
