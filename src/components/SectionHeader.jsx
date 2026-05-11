export default function SectionHeader({ index, label }) {
  return (
    <span className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase">
      [ {index} / {label} ]
    </span>
  );
}
