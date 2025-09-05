# React Marquee Component 🎠

[![npm version](https://badge.fury.io/js/@dxkit-org%2Freact-marquee.svg)](https://badge.fury.io/js/@dxkit-org%2Freact-marquee)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-green.svg)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, lightweight **React marquee component** with full **TypeScript support**. Create smooth scrolling text animations, tickers, and carousels with ease. Perfect for displaying announcements, news feeds, stock tickers, or any scrolling content in your React applications.

## ✨ Features

- 🚀 **Modern & Lightweight** - Built with performance in mind
- 📱 **Responsive Design** - Works seamlessly across all devices
- 🎨 **Customizable Animations** - Control speed, direction, and behavior
- 🔄 **Bi-directional Scrolling** - Support for horizontal and vertical marquees
- 🎭 **Fade Effects** - Beautiful gradient fade-in/fade-out effects
- ⏸️ **Pause on Hover** - Interactive user experience
- 🔁 **Reverse Animation** - Flexible animation direction control
- ♿ **Accessibility Friendly** - Respects user motion preferences
- 📦 **Zero Dependencies** - Only peer dependencies on React
- 🎯 **TypeScript First** - Complete type safety and IntelliSense support
- 🎨 **Tailwind CSS Ready** - Seamlessly integrates with Tailwind CSS

## 🚀 Quick Start

### Installation

Install the package using your favorite package manager:

```bash
# npm
npm install @dxkit-org/react-marquee

# yarn
yarn add @dxkit-org/react-marquee

# pnpm
pnpm add @dxkit-org/react-marquee

# bun
bun add @dxkit-org/react-marquee
```

### Basic Usage

```tsx
import { Marquee } from "@dxkit-org/react-marquee"

function App() {
  return (
    <Marquee>
      <span>🎉 Welcome to our amazing React Marquee component!</span>
      <span>🚀 Built with TypeScript and modern React patterns</span>
      <span>⭐ Don't forget to star us on GitHub!</span>
    </Marquee>
  )
}
```

## 📚 API Reference

### Props

| Prop                   | Type                             | Default      | Description                                  |
| ---------------------- | -------------------------------- | ------------ | -------------------------------------------- |
| `children`             | `ReactNode`                      | **Required** | Content to display in the marquee            |
| `direction`            | `"left" \| "up"`                 | `"left"`     | Animation direction (horizontal or vertical) |
| `pauseOnHover`         | `boolean`                        | `false`      | Pause animation when user hovers             |
| `reverse`              | `boolean`                        | `false`      | Reverse the animation direction              |
| `fade`                 | `boolean`                        | `false`      | Apply fade effect at edges                   |
| `numberOfCopies`       | `number`                         | `2`          | Number of content copies for seamless loop   |
| `containerProps`       | `HTMLAttributes<HTMLDivElement>` | `undefined`  | Props for the outer container                |
| `childrenWrapperProps` | `HTMLAttributes<HTMLDivElement>` | `undefined`  | Props for the content wrapper                |

### TypeScript Interface

```typescript
export type MarqueeProps = {
  children: ReactNode
  direction?: "left" | "up"
  pauseOnHover?: boolean
  reverse?: boolean
  fade?: boolean
  numberOfCopies?: number
  containerProps?: HTMLAttributes<HTMLDivElement>
  childrenWrapperProps?: HTMLAttributes<HTMLDivElement>
}
```

## 🎨 Examples

### Horizontal Scrolling News Ticker

```tsx
<Marquee pauseOnHover fade>
  <div className="flex items-center gap-8">
    <span>📈 Stock Market Update: NASDAQ +2.5%</span>
    <span>🌍 Breaking News: React 19 Released!</span>
    <span>⚡ Performance Update: 50% faster rendering</span>
  </div>
</Marquee>
```

### Vertical Scrolling Feed

```tsx
<Marquee direction="up" pauseOnHover className="h-64">
  <div className="py-4">Latest Tweet #1</div>
  <div className="py-4">Latest Tweet #2</div>
  <div className="py-4">Latest Tweet #3</div>
</Marquee>
```

### Reverse Animation with Custom Styling

```tsx
<Marquee
  reverse
  fade
  containerProps={{
    className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4",
  }}
>
  <span>🎨 Beautiful gradient background with reverse animation</span>
</Marquee>
```

### Logo Carousel

```tsx
<Marquee pauseOnHover numberOfCopies={3}>
  <div className="flex items-center gap-12">
    <img src="/logo1.png" alt="Company 1" className="h-12" />
    <img src="/logo2.png" alt="Company 2" className="h-12" />
    <img src="/logo3.png" alt="Company 3" className="h-12" />
    <img src="/logo4.png" alt="Company 4" className="h-12" />
  </div>
</Marquee>
```

## 🎯 Use Cases

This React marquee component is perfect for:

- **News Tickers** - Display breaking news or updates
- **Stock Market Feeds** - Show real-time financial data
- **Announcement Banners** - Highlight important information
- **Logo Carousels** - Showcase partner companies or sponsors
- **Social Media Feeds** - Display latest tweets or posts
- **Product Showcases** - Highlight featured products
- **Event Announcements** - Promote upcoming events
- **Testimonials** - Rotate customer reviews
- **Awards & Certifications** - Display achievements
- **Technology Stack** - Show tech logos and tools

## 🔧 Advanced Configuration

### Custom Animation Speed

Control animation speed using CSS custom properties:

```css
.custom-marquee {
  --marquee-duration: 20s; /* Slower animation */
}

.fast-marquee {
  --marquee-duration: 5s; /* Faster animation */
}
```

### Responsive Behavior

```tsx
<Marquee
  containerProps={{
    className: "text-sm md:text-base lg:text-lg",
  }}
  pauseOnHover
>
  <span>Responsive text that scales with screen size</span>
</Marquee>
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Bundle Size

| Format | Size (gzipped) |
| ------ | -------------- |
| ESM    | ~2.1KB         |
| CJS    | ~2.3KB         |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/dxkit-org/react-marquee.git

# Install dependencies
npm install

# Start development
npm run dev

# Build the project
npm run build
```

## 📄 License

MIT © [DXKit Organization](https://github.com/dxkit-org)

## 🔗 Links

- [GitHub Repository](https://github.com/dxkit-org/react-marquee)
- [NPM Package](https://www.npmjs.com/package/@dxkit-org/react-marquee)
- [Issues & Bug Reports](https://github.com/dxkit-org/react-marquee/issues)
- [DXKit Organization](https://github.com/dxkit-org)

## ⭐ Support

If you found this library helpful, please consider:

- ⭐ **Starring** the repository on GitHub
- 🐛 **Reporting issues** to help us improve
- 💡 **Suggesting features** for future releases
- 📢 **Sharing** with the React community

---

**Keywords**: React marquee, scrolling text, ticker component, React animation, TypeScript marquee, horizontal scroll, vertical scroll, news ticker, logo carousel, React UI components, modern web animations, accessibility-friendly marquee
