export type FilterOption<Key extends string> = {
  key: Key;
  label: string;
  count: number;
};

/**
 * Metin agirlikli filtre seridi. Aktif durum pirinc alt cizgi ile verilir;
 * dolgu kutusu kullanilmaz. Dokunma alani en az 44px.
 */
export function FilterTabs<Key extends string>({
  options,
  value,
  onChange,
  groupLabel,
}: {
  options: FilterOption<Key>[];
  value: Key;
  onChange: (key: Key) => void;
  groupLabel: string;
}) {
  return (
    <div
      role="group"
      aria-label={groupLabel}
      className="flex flex-wrap items-center gap-x-1"
    >
      {options.map((option) => {
        const active = option.key === value;

        return (
          <button
            key={option.key}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.key)}
            className={`inline-flex min-h-11 items-center gap-2 border-b-2 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
              active
                ? "border-brass text-ink"
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {option.label}
            <span
              className={`text-[10px] tabular-nums ${
                active ? "text-brass-deep" : "text-muted/70"
              }`}
            >
              {option.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
