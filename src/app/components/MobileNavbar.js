"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Typography from "./Typography";
import { useRouter } from "next/navigation";
import Link from "next/link";
const navItems = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#project",
  },
];

export const MobileNavbar = ({ className }) => {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [isClick, setIsClick] = useState(false);

  const navigate = (link) => {
    router.push(link);
    setIsClick(true);
  };
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          if (isClick) {
            setVisible(false);
            // setIsClick(false);
          } else {
            setVisible(true);
          }
        } else {
          setVisible(false);
        }
      }
    }
  });

  //   reset isClick
  useEffect(() => {
    if (isClick) {
      const timeoutId = setTimeout(() => {
        setIsClick(false);
      }, 1000); // Delay for 1 second

      return () => clearTimeout(timeoutId); // Cleanup function to prevent memory leaks
    }
  }, [isClick]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-full fixed h-12 inset-x-0 mx-auto border border-transparent    bg-aquamarine-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  py-2  items-center justify-center space-x-10",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            // onClick={() => navigate(navItem.link)}
            href={navItem.link}
            onClick={() => setIsClick(true)}
            className={cn("relative  items-center flex space-x-1 ")}
          >
            <Typography variant="p" className="font-bold hover:scale-110">
              {navItem.name}
            </Typography>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
