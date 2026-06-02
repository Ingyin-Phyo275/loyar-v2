"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  [key: string]: any;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    if (active) {
      window.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [active]);

  return (
    <>
      {/* Modal Portal - renders at document root */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />
          )}
        </AnimatePresence>,
        document.body
      )}

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                ref={cardRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-zinc-50 shadow-2xl dark:bg-zinc-950",
                  classNameExpanded,
                )}
                {...props}
              >
                {/* Image */}
                <div className="relative w-full bg-zinc-100 dark:bg-zinc-900">
                  <img
                    src={src}
                    alt={title}
                    className="w-full object-contain object-center max-h-96"
                  />
                </div>

                {/* Close button */}
                <button
                  aria-label="Close card"
                  onClick={() => setActive(false)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-700 transition-colors duration-300 hover:bg-white dark:bg-zinc-900/90 dark:text-white dark:hover:bg-zinc-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-black dark:text-white">
                      {title}
                    </h3>
                  </div>

                  {/* Children content */}
                  <div className="flex flex-col gap-4 text-base text-zinc-600 dark:text-zinc-300">
                    {children}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Card trigger */}
      <div
        onClick={() => setActive(true)}
        className={cn(
          "group cursor-pointer overflow-hidden rounded-2xl border border-gray-200/70 bg-zinc-50 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 dark:border-zinc-900 dark:bg-zinc-950",
          className,
        )}
      >
        <div className="flex flex-col gap-4 p-3">
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={src}
              alt={title}
              className="h-56 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 line-clamp-2">
              {description.length > 60
                ? description.slice(0, 60) + "..."
                : description}
            </p>
            <h3 className="font-semibold text-black dark:text-white line-clamp-2">
              {title}
            </h3>
            <button
              aria-label="Open card"
              className="text-sm inline-flex items-center font-medium text-primary transition-colors duration-300 hover:text-primary/80"
            >
              Read More →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
