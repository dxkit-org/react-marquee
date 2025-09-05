import { HTMLAttributes, ReactNode } from "react";
import "./global.css";
import { cn } from "./lib/utils";

/**
 * Props for the Marquee component
 * 
 * @public
 */
export type MarqueeProps = {
    /** Content to display in the marquee animation */
    children: ReactNode;
    /** Direction of the marquee animation - horizontal left or vertical up */
    direction?: "left" | "up";
    /** Whether to pause the animation when user hovers over the component */
    pauseOnHover?: boolean;
    /** Whether to reverse the animation direction */
    reverse?: boolean;
    /** Whether to apply a fade effect at the edges of the marquee */
    fade?: boolean;
    /** Number of copies of the content to create for seamless looping */
    numberOfCopies?: number;
    /** Additional props to pass to the outer container div */
    containerProps?: HTMLAttributes<HTMLDivElement>;
    /** Additional props to pass to the content wrapper div */
    childrenWrapperProps?: HTMLAttributes<HTMLDivElement>;
};

/**
 * A modern, lightweight React marquee component with full TypeScript support.
 * 
 * Perfect for creating smooth scrolling animations, news tickers, logo carousels,
 * and any other horizontal or vertical scrolling content in your React applications.
 * 
 * Features:
 * - Bi-directional scrolling (horizontal and vertical)
 * - Fade effects with gradient masks
 * - Pause on hover functionality
 * - Reverse animation direction
 * - Configurable content repetition
 * - Full accessibility support
 * - Zero external dependencies
 * - TypeScript first with complete type definitions
 * 
 * @example
 * ```tsx
 * // Basic horizontal marquee
 * <Marquee>
 *   <span>Welcome to our amazing React Marquee component!</span>
 * </Marquee>
 * 
 * // Vertical marquee with fade effect and pause on hover
 * <Marquee direction="up" fade pauseOnHover>
 *   <div>Latest news item 1</div>
 *   <div>Latest news item 2</div>
 *   <div>Latest news item 3</div>
 * </Marquee>
 * 
 * // Logo carousel with custom styling
 * <Marquee 
 *   pauseOnHover 
 *   numberOfCopies={3}
 *   containerProps={{ className: "bg-gray-100 p-4" }}
 * >
 *   <div className="flex items-center gap-8">
 *     <img src="/logo1.png" alt="Company 1" />
 *     <img src="/logo2.png" alt="Company 2" />
 *   </div>
 * </Marquee>
 * ```
 * 
 * @param props - Configuration options for the marquee component
 * @returns A React functional component that renders an animated marquee
 * 
 * @public
 */

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