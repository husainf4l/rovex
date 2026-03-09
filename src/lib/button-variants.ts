import { cva } from "class-variance-authority";

/**
 * Apple-style button variants — server-safe, usable in both server and client components.
 */
export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap transition-all select-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] active:bg-[#006edb]",
        outline:
          "border border-white/15 bg-transparent text-white rounded-full hover:bg-white/[0.06]",
        secondary:
          "bg-white/[0.08] text-white rounded-full hover:bg-white/[0.12]",
        ghost:
          "text-white/60 rounded-full hover:bg-white/[0.06] hover:text-white",
        destructive:
          "bg-red-500/10 text-red-400 rounded-full hover:bg-red-500/20",
        link:
          "text-[#3b9eff] underline-offset-4 hover:underline p-0",
      },
      size: {
        default: "h-9 px-5 text-sm gap-1.5",
        xs: "h-6 px-3 text-xs gap-1",
        sm: "h-8 px-4 text-sm gap-1",
        lg: "h-11 px-6 text-base gap-2",
        xl: "h-13 px-8 text-base gap-2",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
