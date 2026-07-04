export default function SectionHeading({ table, title }: { table: string; title: string }) {
  return (
    <div className="mb-9">
      <div className="bp-eyebrow mb-2.5">table: {table}</div>
      <h2 className="font-display font-semibold text-[clamp(28px,4vw,38px)]">{title}</h2>
    </div>
  );
}
