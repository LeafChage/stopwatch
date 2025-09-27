export const Timestamp = {
  fmt: (rawMs: number): string => {
    const m = Math.floor(rawMs / (1000 * 60));
    const s = Math.floor(rawMs / 1000) - (m * 60);
    const ms = rawMs % 1000;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(ms).padStart(2, '0').slice(0, 2)}`;
  }
} as const;
