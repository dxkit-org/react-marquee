import { HTMLAttributes, ReactNode } from "react";
import "./global.css";
import { cn } from "./lib/utils";

export type MarqueeProps = {
    children: ReactNode;
    direction?: "left" | "up";
    pauseOnHover?: boolean;
    reverse?: boolean;
    fade?: boolean;
    numberOfCopies?: number;
    containerProps?: HTMLAttributes<HTMLDivElement>;
    childrenWrapperProps?: HTMLAttributes<HTMLDivElement>;
};

export function Marquee({
    children,
    direction = "left",
    pauseOnHover = false,
    reverse = false,
    fade = false,

    numberOfCopies = 2,
    containerProps,
    childrenWrapperProps
}: MarqueeProps) {
    const { className, ...rest } = containerProps || {};
    const { className: innerClassName, ...childrenWrapperRest } = childrenWrapperProps || {};
    return (
        <div
            className={cn(
                "group dxkit-marquee-flex dxkit-marquee-gap-[1rem] dxkit-marquee-overflow-hidden",
                direction === "left" ? "dxkit-marquee-flex-row" : "dxkit-marquee-flex-col",
                className
            )}
            style={{
                maskImage: fade
                    ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"
                    }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
                    : undefined,
                WebkitMaskImage: fade
                    ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"
                    }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
                    : undefined,
            }}
            {...rest}
        >
            {Array(numberOfCopies)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "dxkit-marquee-flex dxkit-marquee-justify-around dxkit-marquee-gap-[1rem] [--gap:1rem] dxkit-marquee-shrink-0",
                            direction === "left"
                                ? "dxkit-marquee-animate-marquee-left dxkit-marquee-flex-row"
                                : "dxkit-marquee-animate-marquee-up dxkit-marquee-flex-col",
                            pauseOnHover && "dxkit-marquee-group-hover:dxkit-marquee-animation-paused",
                            reverse && "dxkit-marquee-direction-reverse",
                            innerClassName
                        )}
                        {...childrenWrapperRest}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
}