"use client";

type AdSenseUnitProps = {
  id: "adsense-below-result" | "adsense-sidebar" | "adsense-above-footer";
  className?: string;
};

export default function AdSenseUnit({ id, className = "" }: AdSenseUnitProps) {
  return (
    <div
      id={id}
      className={`rounded-lg border border-dashed border-teal-200 bg-teal-50/40 p-4 text-sm text-teal-800 ${className}`}
    >
      {/* TODO: replace with AdSense script tag */}
      <p className="font-medium">Ad Placeholder</p>
      <p>{id}</p>
    </div>
  );
}
