import React from 'react';
import { Marquee } from './src/index';

/**
 * Example usage of the React Marquee component
 * This file demonstrates various use cases and configurations
 */

// Basic horizontal marquee example
export const BasicExample = () => (
    <div className="w-full bg-gray-50 p-4">
        <h2 className="text-lg font-semibold mb-4">Basic Horizontal Marquee</h2>
        <Marquee>
            <span className="text-blue-600 font-medium">
                🎉 Welcome to our amazing React Marquee component!
            </span>
            <span className="text-green-600 font-medium">
                🚀 Built with TypeScript and modern React patterns
            </span>
            <span className="text-purple-600 font-medium">
                ⭐ Don't forget to star us on GitHub!
            </span>
        </Marquee>
    </div>
);

// News ticker with pause on hover
export const NewsTicker = () => (
    <div className="w-full bg-blue-900 text-white p-3">
        <h2 className="text-lg font-semibold mb-4">News Ticker with Pause on Hover</h2>
        <Marquee pauseOnHover fade>
            <div className="flex items-center gap-8">
                <span>📈 Stock Market Update: NASDAQ +2.5%</span>
                <span>🌍 Breaking News: React 19 Released!</span>
                <span>⚡ Performance Update: 50% faster rendering</span>
                <span>🎯 New features: Better TypeScript support</span>
            </div>
        </Marquee>
    </div>
);

// Vertical scrolling feed
export const VerticalFeed = () => (
    <div className="w-64 h-48 bg-gray-100 border rounded-lg p-4">
        <h3 className="text-md font-semibold mb-2">Vertical Social Feed</h3>
        <Marquee
            direction="up"
            pauseOnHover
            containerProps={{ className: "h-32" }}
        >
            <div className="py-2 border-b border-gray-200">
                <div className="text-sm font-medium">@user1</div>
                <div className="text-xs text-gray-600">Just launched my new app! 🚀</div>
            </div>
            <div className="py-2 border-b border-gray-200">
                <div className="text-sm font-medium">@developer</div>
                <div className="text-xs text-gray-600">Loving this new marquee component!</div>
            </div>
            <div className="py-2 border-b border-gray-200">
                <div className="text-sm font-medium">@designer</div>
                <div className="text-xs text-gray-600">Perfect for my landing page ✨</div>
            </div>
        </Marquee>
    </div>
);

// Logo carousel
export const LogoCarousel = () => (
    <div className="w-full bg-white border-y border-gray-200 py-8">
        <h2 className="text-lg font-semibold mb-6 text-center">Our Partners</h2>
        <Marquee pauseOnHover numberOfCopies={3}>
            <div className="flex items-center gap-16">
                <div className="flex items-center justify-center w-24 h-12 bg-gray-100 rounded text-sm font-medium">
                    Company A
                </div>
                <div className="flex items-center justify-center w-24 h-12 bg-gray-100 rounded text-sm font-medium">
                    Company B
                </div>
                <div className="flex items-center justify-center w-24 h-12 bg-gray-100 rounded text-sm font-medium">
                    Company C
                </div>
                <div className="flex items-center justify-center w-24 h-12 bg-gray-100 rounded text-sm font-medium">
                    Company D
                </div>
            </div>
        </Marquee>
    </div>
);

// Reverse animation with custom styling
export const ReverseExample = () => (
    <div className="w-full">
        <h2 className="text-lg font-semibold mb-4">Reverse Animation with Gradient</h2>
        <Marquee
            reverse
            fade
            containerProps={{
                className: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-6 rounded-lg shadow-lg"
            }}
        >
            <div className="flex items-center gap-8">
                <span className="text-lg font-medium">🎨 Beautiful gradient background</span>
                <span className="text-lg font-medium">🔄 Smooth reverse animation</span>
                <span className="text-lg font-medium">✨ Fade effects included</span>
            </div>
        </Marquee>
    </div>
);

// Complete demo page
export const MarqueeDemo = () => (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                React Marquee Component Demo
            </h1>
            <p className="text-lg text-gray-600">
                Showcase of different marquee configurations and use cases
            </p>
        </div>

        <BasicExample />
        <NewsTicker />

        <div className="flex gap-8">
            <VerticalFeed />
            <div className="flex-1">
                <LogoCarousel />
            </div>
        </div>

        <ReverseExample />

        <div className="text-center text-sm text-gray-500 mt-12">
            <p>
                Built with ❤️ using React, TypeScript, and Tailwind CSS
            </p>
        </div>
    </div>
);

export default MarqueeDemo;
