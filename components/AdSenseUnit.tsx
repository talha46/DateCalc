"use client";

import { useEffect, useRef, useState } from "react";

type AdSenseUnitProps = {
  id: "adsense-below-result" | "adsense-sidebar" | "adsense-above-footer";
  className?: string;
};

export default function AdSenseUnit({ id, className = "" }: AdSenseUnitProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const heightClassById: Record<AdSenseUnitProps["id"], string> = {
    "adsense-above-footer": "min-h-[90px]",
    "adsense-below-result": "min-h-[90px]",
    "adsense-sidebar": "min-h-[250px]",
  };

  return (
    <div
      ref={ref}
      id={id}
      className={`w-full ${heightClassById[id]} rounded-lg border border-dashed border-teal-200 bg-teal-50/40 p-4 text-sm text-teal-800 ${className}`}
    >
      {isVisible ? (
        <>
          {/* TODO: replace with AdSense script tag */}
          <p className="font-medium">Ad Placeholder</p>
          <p>{id}</p>
        </>
      ) : (
        <p className="text-teal-700/70">Loading ad slot...</p>
      )}
    </div>
  );
}
