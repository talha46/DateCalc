import AdSenseUnit from "@/components/AdSenseUnit";

type CalculatorLayoutProps = {
  children: React.ReactNode;
};

export default function CalculatorLayout({ children }: CalculatorLayoutProps) {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-[1fr_280px]">
      <div>{children}</div>
      <aside className="hidden lg:block">
        <AdSenseUnit id="adsense-sidebar" />
      </aside>
    </div>
  );
}
