import { useState, useCallback } from "react";

export const useFAQ = (faqData) => {
  const [openItems, setOpenItems] = useState(() => {
    const initialSet = new Set();
    faqData.forEach((item) => {
      if (item.isOpenByDefault) {
        initialSet.add(item.id);
      }
    });
    return initialSet;
  });

  const toggleItem = useCallback((itemId) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  const isItemOpen = useCallback(
    (itemId) => openItems.has(itemId),
    [openItems]
  );

  const openAll = useCallback(() => {
    setOpenItems(new Set(faqData.map((item) => item.id)));
  }, [faqData]);

  const closeAll = useCallback(() => {
    setOpenItems(new Set());
  }, []);

  const openItemsCount = openItems.size;
  const totalItemsCount = faqData.length;

  return {
    toggleItem,
    isItemOpen,
    openAll,
    closeAll,
    openItemsCount,
    totalItemsCount,
  };
};
