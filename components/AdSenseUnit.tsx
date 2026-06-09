type AdSenseUnitProps = {
  id: "adsense-below-result" | "adsense-sidebar" | "adsense-above-footer";
  className?: string;
};

const heightClassById: Record<AdSenseUnitProps["id"], string> = {
  "adsense-above-footer": "h-[90px]",
  "adsense-below-result": "h-[90px]",
  "adsense-sidebar": "h-[250px]",
};

const slotLabelById: Record<AdSenseUnitProps["id"], string> = {
  "adsense-above-footer": "above-footer",
  "adsense-below-result": "below-result",
  "adsense-sidebar": "sidebar",
};

export default function AdSenseUnit({ id, className = "" }: AdSenseUnitProps) {
  const slotLabel = slotLabelById[id];

  return (
    <>
      <span
        aria-hidden
        className="hidden"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: `<!-- AdSense slot: ${slotLabel} -->` }}
      />
      <div
        id={id}
        data-ad-slot={slotLabel}
        aria-hidden
        className={`w-full shrink-0 overflow-hidden bg-transparent ${heightClassById[id]} ${className}`}
      />
    </>
  );
}
