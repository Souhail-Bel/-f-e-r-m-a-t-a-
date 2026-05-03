import { useState, useCallback } from "react";

export const useShuffledList = (initialData) => {
  const shuffle = (array) => {
    const arr = [...array];
    // Fisher–Yates algorithm
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const [shuffled, setShuffled] = useState(() => shuffle(initialData));
  const [index, setIndex] = useState(0);

  const getNext = useCallback(() => {
    if (index >= shuffled.length - 1) {
      const freshShuffle = shuffle(initialData);
      setShuffled(freshShuffle);
      setIndex(0);
      return freshShuffle[0];
    }
    const nextIndex = index + 1;
    setIndex(nextIndex);
    return shuffled[nextIndex];
  }, [index, shuffled, initialData]);

  return { current: shuffled[index], getNext };
};
