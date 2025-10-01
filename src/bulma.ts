export type Color =
  | "link"
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | null;

export const Color = {
  attribute: (color: Color) => {
    if (color) {
      return `is-${color}`
    } else {
      return ""
    }
  },
} as const;
