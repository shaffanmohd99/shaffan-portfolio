"use client";
import { createContext, useState } from "react";

export const NavigationContext = createContext();

export default function Context({ children }) {
  const [position, setposition] = useState("about");
  return (
    <NavigationContext.Provider value={{ position, setposition }}>
      {children}
    </NavigationContext.Provider>
  );
}
