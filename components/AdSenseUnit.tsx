"use client";

import { useEffect, useRef, useState } from "react";

type AdSenseUnitProps = {
  id: "adsense-below-result" | "adsense-sidebar" | "adsense-above-footer";
  className?: string;
};

export default function AdSenseUnit({ id, className = "" }: AdSenseUnitProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [showInnerLabel, setShowInnerLabel] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowInnerLabel(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const heightClassById: Record<AdSenseUnitProps["id"], string> = {
    "adsense-above-footer": "h-[90px]",
    "adsense-below-result": "h-[90px]",
    "adsense-sidebar": "h-[250px]",
  };

  return (
    <div
      ref={ref}
      id={id}
      className={`w-full overflow-hidden ${heightClassById[id]} rounded-lg border border-dashed border-teal-200 bg-teal-50/40 p-4 text-sm text-teal-800 ${className}`}
    >
      {/* TODO: replace with AdSense script tag */}
      <p className={`font-medium transition-opacity ${showInnerLabel ? "opacity-100" : "opacity-0"}`}>Ad Placeholder</p>
      <p className={`transition-opacity ${showInnerLabel ? "opacity-100" : "opacity-0"}`}>{id}</p>
    </div>
  );
}
