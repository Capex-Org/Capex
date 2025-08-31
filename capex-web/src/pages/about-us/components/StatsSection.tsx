import ContentSlider from "@/components/common/ContentSlider";

export default function StatsSection() {
  const stats = [
    <div className="flex items-center gap-4 text-left">
      <p
        className="font-['Playfair_Display'] font-normal text-[65px] leading-[78px] tracking-[-0.025em] text-neutral-900"
        style={{ fontVariantNumeric: "lining-nums proportional-nums" }}
      >
        100%
      </p>
      <p className="font-['Proxima_Nova'] font-normal text-[16px] leading-[22px] tracking-[0.05em] uppercase text-neutral-700">
        Satisfaction Clients
      </p>
    </div>,

    <div className="flex items-center gap-4 text-left">
      <p
        className="font-['Playfair_Display'] font-normal text-[65px] leading-[78px] tracking-[-0.025em] text-neutral-900"
        style={{ fontVariantNumeric: "lining-nums proportional-nums" }}
      >
        124
      </p>
      <p className="font-['Proxima_Nova'] font-normal text-[16px] leading-[22px] tracking-[0.05em] uppercase text-neutral-700">
        Employees Worldwide
      </p>
    </div>,

    <div className="flex items-center gap-4 text-left">
      <p
        className="font-['Playfair_Display'] font-normal text-[65px] leading-[78px] tracking-[-0.025em] text-neutral-900"
        style={{ fontVariantNumeric: "lining-nums proportional-nums" }}
      >
        349
      </p>
      <p className="font-['Proxima_Nova'] font-normal text-[16px] leading-[22px] tracking-[0.05em] uppercase text-neutral-700">
        Projects Completed
      </p>
    </div>,
  ];

  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-[1559px] mx-auto flex justify-center">
        <ContentSlider items={stats} delay={3000} />
      </div>
    </section>
  );
}
