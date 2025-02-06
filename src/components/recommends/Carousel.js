import React, { useState, useRef, useEffect } from 'react';
import styles from './Carousel.module.css';

const InfiniteCarousel = ({ images = [] }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  // Handle mouse events for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Clone images for infinite scroll effect
  const clonedImages = [...images, ...images, ...images, ...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth;
      const scrollLeft = container.scrollLeft;
      const clientWidth = container.clientWidth;
      
      // When reaching near the end, jump back to the middle set of images
      if (scrollLeft + clientWidth > scrollWidth - clientWidth) {
        container.scrollLeft = scrollWidth / 2;
      }
      // When reaching near the start, jump to the middle set of images
      if (scrollLeft < clientWidth) {
        container.scrollLeft = scrollWidth / 2;
      }
    };

    container.addEventListener('scroll', handleScroll);
    
    // Initial scroll position to middle set of images
    container.scrollLeft = container.scrollWidth / 2;

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div
        ref={containerRef}
        className={styles.carousel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
          {clonedImages.map((image, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className={styles.image}
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;