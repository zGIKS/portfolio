interface MonthLabelsProps {
  monthLabels: string[];
}

export function MonthLabels({ monthLabels }: MonthLabelsProps) {
  return (
    <div
      className="grid gap-[2px] text-[10px] font-medium leading-none text-primary-foreground/60"
      style={{
        gridTemplateColumns: `repeat(${monthLabels.length}, 8px)`,
      }}
    >
      {monthLabels.map((label, index) => (
        <div key={`${label}-${index}`} className="relative h-3">
          {label ? (
            <span className="absolute left-0 top-0 whitespace-nowrap">
              {label}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
