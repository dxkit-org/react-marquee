// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function Marquee({
  children,
  direction = "left",
  pauseOnHover = false,
  reverse = false,
  fade = false,
  className,
  innerClassName,
  numberOfCopies = 2,
  ...rest
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "group flex gap-[1rem] overflow-hidden",
        direction === "left" ? "flex-row" : "flex-col",
        className
      ),
      style: {
        maskImage: fade ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)` : void 0,
        WebkitMaskImage: fade ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)` : void 0
      },
      ...rest,
      children: Array(numberOfCopies).fill(0).map((_, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex justify-around gap-[1rem] [--gap:1rem] shrink-0",
            direction === "left" ? "animate-marquee-left flex-row" : "animate-marquee-up flex-col",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "direction-reverse",
            innerClassName
          ),
          children
        },
        i
      ))
    }
  );
}
export {
  Marquee
};
//# sourceMappingURL=index.mjs.map