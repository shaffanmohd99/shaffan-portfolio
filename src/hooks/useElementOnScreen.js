
import { useEffect, useRef, useState } from "react";

const useElementOnScreen = (options) => {
  const sectionsRef = useRef([]);
  const prevIdRef = useRef(null);

  const [isVisible, setIsVisible] = useState("");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isIdChange = entry.target.id !== prevIdRef.current;
        if (entry.isIntersecting && isIdChange) {
          setIsVisible(entry.target.id);
          prevIdRef.current = entry.target.id;
        }
      });
    }, options);
    // const targetSections = document.querySelectorAll("section");
    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  const refCallback = (element) => {
    if (element) {
      sectionsRef.current.push(element);
    }
  };
  return [refCallback, isVisible];
};
export default useElementOnScreen;
