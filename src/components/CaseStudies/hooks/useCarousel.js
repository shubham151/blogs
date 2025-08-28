import { useState, useCallback } from "react";

export const useCarousel = (totalItems, config = {}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { cardWidth = 320, gap = 20 } = config;

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(totalItems - 1, prev + 1));
  }, [totalItems]);

  const goToSlide = useCallback(
    (index) => {
      setCurrentSlide(Math.max(0, Math.min(totalItems - 1, index)));
    },
    [totalItems]
  );

  const getTranslateX = () => {
    return currentSlide * (cardWidth + gap);
  };

  const canGoPrevious = currentSlide > 0;
  const canGoNext = currentSlide < totalItems - 1;

  return {
    currentSlide,
    goToPrevious,
    goToNext,
    goToSlide,
    getTranslateX,
    canGoPrevious,
    canGoNext,
  };
};
