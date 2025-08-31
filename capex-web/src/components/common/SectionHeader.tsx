import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true }}
      className={`mb-6 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className={`
            flex items-center gap-[17.31px]
            font-['Plus_Jakarta_Sans']   text-[26px] leading-[24px] tracking-[0.1em]
            uppercase text-primary-600 font-[700]
            ${align === "center" ? "justify-center" : ""}
          `}
        >
          <span className="inline-block w-[48px] border-t-[1.08px] border-[#996830] opacity-80"></span>
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        viewport={{ once: true }}
        className={`
          font-['Plus_Jakarta_Sans'] font-normal md:text-[58px] md:leading-[80px] text-[24px] leading-[40px] tracking-[0.01em] text-neutral-900
        `}
        style={{
          fontVariantNumeric: "lining-nums proportional-nums",
        }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
