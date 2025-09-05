import { HTMLAttributes, ReactNode } from "react";
import "./global.css";
import { cn } from "./lib/utils";


export type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    direction?: "left" | "up";
    pauseOnHover?: boolean;
    reverse?: boolean;
    fade?: boolean;
    innerClassName?: string;
    numberOfCopies?: number;
};

export function Marquee({
    children,
    direction = "left",
    pauseOnHover = false,
    reverse = false,
    fade = false,
    className,
    innerClassName,
    numberOfCopies = 2,
    ...rest
}: MarqueeProps) {
    return (
        <div
            className={cn(
                "dxkit-marquee-group dxkit-marquee-flex dxkit-marquee-gap-[1rem] dxkit-marquee-overflow-hidden",
                direction === "left" ? "flex-row" : "flex-col",
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
                            "flex justify-around gap-[1rem] [--gap:1rem] shrink-0",
                            direction === "left"
                                ? "dxkit-marquee-animate-marquee-left flex-row"
                                : "dxkit-marquee-animate-marquee-up flex-col",
                            pauseOnHover && "dxkit-marquee-group-hover:[animation-play-state:paused]",
                            reverse && "dxkit-marquee-direction-reverse",
                            innerClassName
                        )}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
}