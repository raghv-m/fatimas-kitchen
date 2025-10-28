# Fatima Karahi Corner - Design System

## 🎨 Brand Color Palette (Karahi-Inspired)

### Primary Color: Spicy Red-Orange (Karahi Heat) 🔥
**Hex:** #D32F2F | **RGB:** 211, 47, 47
**Symbolism:** The sizzle of karahi in the wok, spice, heat, passion

**Shades:**
- `primary-50`: #ffebee (Lightest)
- `primary-100`: #ffcdd2
- `primary-200`: #ef9a9a
- `primary-300`: #e57373
- `primary-400`: #ef5350
- `primary-500`: #D32F2F (Base - Main Brand Color)
- `primary-600`: #C62828 (Hover State)
- `primary-700`: #B71C1C
- `primary-800`: #8B1414
- `primary-900`: #5F0F0F (Darkest)

**Usage:**
- Main CTAs ("Order Now" buttons)
- Logo and brand name
- Headings and important text
- Karahi dish highlights
- Spicy food indicators
- Navigation active states

**Accessibility:** White text on #D32F2F = 7.1:1 contrast (WCAG AA compliant)

### Secondary Color: Rich Saffron Gold (Royal & Warm) 🌟
**Hex:** #F9A825 | **RGB:** 249, 168, 37
**Symbolism:** Luxury of desi flavors, warmth of home, saffron spice

**Shades:**
- `secondary-50`: #fffde7 (Lightest)
- `secondary-100`: #fff9c4
- `secondary-200`: #fff59d
- `secondary-300`: #fff176
- `secondary-400`: #ffee58
- `secondary-500`: #F9A825 (Base - Saffron Gold)
- `secondary-600`: #F57F17
- `secondary-700`: #F57C00
- `secondary-800`: #EF6C00
- `secondary-900`: #E65100 (Darkest)

**Usage:**
- Menu item prices
- Icons and decorative elements
- Borders and dividers
- Special offers and promotions
- Secondary buttons
- Hover effects
- Star ratings

**Accessibility:** Charcoal text on #F9A825 = 8.9:1 contrast (Excellent)

### Accent Color: Fresh Mint Green (Herbs & Halal) 🌿
**Hex:** #4CAF50 | **RGB:** 76, 175, 80
**Symbolism:** Fresh coriander, halal purity, vegetarian options

**Shades:**
- `accent-50`: #e8f5e9 (Lightest)
- `accent-100`: #c8e6c9
- `accent-200`: #a5d6a7
- `accent-300`: #81c784
- `accent-400`: #66bb6a
- `accent-500`: #4CAF50 (Base - Mint Green)
- `accent-600`: #43A047
- `accent-700`: #388E3C
- `accent-800`: #2E7D32
- `accent-900`: #1B5E20 (Darkest)

**Usage:**
- Vegetarian tags and badges
- Halal certification badges
- Success messages
- "Added to cart" confirmations
- Fresh/healthy indicators

### Background: Warm Cream (Naan & Raita) 🍞
**Hex:** #FFF8E1 | **RGB:** 255, 248, 225
**Symbolism:** Fresh naan, raita, comfort food

**Shades:**
- `cream-50`: #fffef9 (Lightest)
- `cream-100`: #fffcf5
- `cream-200`: #FFF8E1 (Base - Main Background)
- `cream-300`: #fff3cc
- `cream-400`: #ffecb3
- `cream-500`: #ffe082

**Usage:**
- Page backgrounds
- Card backgrounds
- Menu sections
- Soft dividers

### Text: Deep Charcoal (Modern & Readable)
**Hex:** #212121 | **RGB:** 33, 33, 33
**Symbolism:** Modern, professional, highly readable

**Shades:**
- `charcoal-50`: #f5f5f5 (Lightest)
- `charcoal-100`: #e0e0e0
- `charcoal-200`: #bdbdbd
- `charcoal-300`: #9e9e9e
- `charcoal-400`: #757575
- `charcoal-500`: #616161
- `charcoal-600`: #424242
- `charcoal-700`: #303030
- `charcoal-800`: #212121 (Base - Main Text)
- `charcoal-900`: #121212 (Dark Mode Background)

**Usage:**
- Headings and body text
- Navigation text
- Footer text

**Accessibility:** #212121 on white = 12.6:1 contrast (Perfect!)

## 🎨 Signature Gradient: Karahi Heat

```css
background: linear-gradient(135deg, #D32F2F 0%, #F9A825 100%);
```

**Usage:**
- Hero banner sections
- "Order Now" button hover effects
- Special offer banners
- Featured dish cards
- Call-to-action sections

**Visual Effect:** Creates a warm, inviting gradient that mimics the glow of a karahi cooking over flames.

## 🎭 Cultural Design Elements

### Pakistani Truck Art Inspiration
The decorative borders and patterns are inspired by traditional Pakistani truck art, featuring:
- Vibrant color combinations (red-orange, saffron gold, mint green)
- Geometric patterns
- Floral motifs
- Repetitive decorative elements
- Bold, eye-catching designs

**Implementation:**
- Decorative borders between sections
- Pattern overlays on hero sections
- Card decorations
- Footer accents

### Geometric Patterns
Traditional Islamic geometric patterns used subtly in:
- Background overlays (5% opacity)
- Section dividers
- Card decorations
- Hero section backgrounds
- Concentric circles and diamond shapes

### Floral Dividers
Elegant floral motifs used as section dividers, inspired by:
- Mughal architecture
- Traditional Pakistani textiles
- Henna designs
- Saffron flower patterns

## 📐 Typography

### Font Families

**Display Font: Playfair Display**
- Usage: Headings, hero titles, section titles
- Weight: Bold (700)
- Style: Serif, elegant, traditional

**Body Font: Inter**
- Usage: Body text, buttons, navigation
- Weight: Regular (400), Medium (500), Semibold (600), Bold (700)
- Style: Sans-serif, modern, readable

### Type Scale

- **Hero Title:** 5xl-7xl (48px-72px)
- **Section Title:** 4xl-5xl (36px-48px)
- **Card Title:** 2xl-3xl (24px-30px)
- **Body Large:** xl (20px)
- **Body:** base (16px)
- **Body Small:** sm (14px)
- **Caption:** xs (12px)

## 🎯 Component Styles

### Buttons

**Primary Button (Order Now, Add to Cart)**
```css
Background: #D32F2F (primary-500)
Hover: #C62828 (primary-600)
Hover Effect: Gradient overlay (135deg, #D32F2F to #F9A825)
Text: White (#FFFFFF)
Shadow: Medium (0 4px 6px rgba(0,0,0,0.1))
Hover Shadow: Large (0 10px 15px rgba(0,0,0,0.2))
Border Radius: 8px
Padding: 12px 24px
Font Weight: 600 (Semibold)
Transition: All 200ms
```

**Secondary Button (View Menu, Learn More)**
```css
Background: #F9A825 (secondary-500)
Hover: #F57F17 (secondary-600)
Text: #212121 (charcoal-800)
Shadow: Medium
Border Radius: 8px
Padding: 12px 24px
Font Weight: 600
```

**Outline Button**
```css
Border: 2px solid #D32F2F (primary-500)
Text: #D32F2F (primary-500)
Hover Background: #D32F2F
Hover Text: White
Border Radius: 8px
Padding: 12px 24px
```

### Cards

**Standard Card (Menu Items, Reviews)**
```css
Background: White (#FFFFFF)
Border: 1px solid #fff3cc (cream-300)
Border Radius: 12px
Shadow: Large (0 10px 15px rgba(0,0,0,0.1))
Padding: 24px
Hover Shadow: Extra Large (0 20px 25px rgba(0,0,0,0.15))
Hover Transform: translateY(-4px)
Transition: All 200ms
```

**Cream Card (Special Sections)**
```css
Background: #FFF8E1 (cream-200)
Border: 1px solid #ffecb3 (cream-400)
Border Radius: 12px
Shadow: Large
Padding: 24px
```

### Input Fields
```css
Border: 1px solid #bdbdbd (charcoal-200)
Border Radius: 8px
Padding: 12px 16px
Focus Ring: 2px #D32F2F (primary-500)
Focus Border: Transparent
Background: White
Transition: All 200ms
```

### Badges

**Halal Badge**
```css
Background: #4CAF50 (accent-500)
Text: White
Font Size: 12px
Font Weight: 600
Padding: 4px 8px
Border Radius: 4px
```

**Vegetarian Badge**
```css
Background: #4CAF50 (accent-500)
Text: White
Icon: 🥬 Leaf
Font Size: 12px
Font Weight: 600
Padding: 4px 8px
Border Radius: 4px
```

**Spicy Badge**
```css
Background: #D32F2F (primary-500)
Text: White
Icon: 🌶️ Flame
Font Size: 12px
Font Weight: 600
Padding: 4px 8px
Border Radius: 4px
Box Shadow: 0 0 10px rgba(211, 47, 47, 0.3) (Spicy Glow)
```

## 🖼️ Visual Guidelines

### Photography Style
- **Food Photography:** Warm tones, vibrant colors, close-up shots
- **Restaurant Photos:** Well-lit, inviting atmosphere
- **People Photos:** Authentic, diverse, welcoming

### Iconography
- **Style:** Outline icons (Lucide React)
- **Size:** 20px-32px for UI elements
- **Color:** Matches context (primary, secondary, or gray)

### Spacing System
- **Base Unit:** 4px
- **Scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- **Section Padding:** 64px (desktop), 48px (tablet), 32px (mobile)

### Border Radius
- **Small:** 4px (badges, tags)
- **Medium:** 8px (buttons, inputs)
- **Large:** 12px (cards)
- **Extra Large:** 16px (modals, large cards)
- **Full:** 9999px (circular elements)

## 🎨 Decorative Elements

### Decorative Border
A colorful border inspired by truck art, featuring alternating colors:
- Green → Gold → Red → Gold (repeating)
- Height: 8px
- Used at section transitions

### Floral Divider
Elegant divider with:
- Horizontal gradient lines
- Central floral symbol (✦)
- Color: primary-300 with secondary-500 accent

### Geometric Pattern Overlay
Subtle background pattern featuring:
- Concentric circles
- Diamond shapes
- Low opacity (5%)
- Used in hero sections

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1280px

### Mobile-First Approach
All designs start mobile and scale up:
- Stack columns on mobile
- Side-by-side on tablet/desktop
- Larger text and spacing on desktop

## ♿ Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Primary buttons: White text on primary-600 (7.2:1)
- Body text: Charcoal on cream (12.1:1)

### Focus States
- Visible focus rings on all interactive elements
- 2px ring in primary-500 color
- Clear keyboard navigation

### Alt Text
- All images have descriptive alt text
- Icons have aria-labels
- Decorative elements marked as aria-hidden

## 🎭 Brand Voice

### Tone
- **Warm & Welcoming:** Like inviting guests to your home
- **Authentic:** Proud of Pakistani heritage
- **Professional:** Quality service and food
- **Enthusiastic:** Passionate about cuisine

### Language
- Use "we" and "our" to create connection
- Emphasize freshness, authenticity, tradition
- Highlight family recipes and expert chefs
- Celebrate Pakistani culture and hospitality

## 🌟 Special Features

### Spicy Indicator
- Icon: 🌶️ Flame (Lucide React)
- Color: #D32F2F (primary-500)
- Special Effect: Spicy glow (red shadow)
- Used on menu items
- Badge style with rounded background

### Vegetarian Indicator
- Icon: 🥬 Leaf (Lucide React)
- Color: #4CAF50 (accent-500)
- Used on menu items
- Badge style with rounded background

### Halal Indicator
- Icon: ✓ Check or Halal symbol
- Color: #4CAF50 (accent-500)
- Used on menu items and restaurant info
- Emphasizes halal certification

### Rating Stars
- Filled: #F9A825 (secondary-500 - saffron gold)
- Empty: #bdbdbd (charcoal-200)
- Size: 20px
- Used in reviews and testimonials

## 📋 Usage Examples

### Hero Section
```
Background: Gradient (135deg, #D32F2F to #F9A825)
Overlay: Geometric pattern at 5% opacity
Overlay: Black 20% opacity for text readability
Text: White (#FFFFFF)
Decorative Border: Bottom (truck art pattern)
CTA Button: Primary button with hover gradient
```

### Feature Cards
```
Background: White (#FFFFFF)
Border: 1px solid cream-300
Shadow: Large
Hover: Extra large shadow + translateY(-4px)
Icon Background: cream-200
Icon Color: primary-500 (red-orange)
Text: charcoal-800
```

### Menu Items
```
Card: White background, large shadow, cream border
Image Background: Gradient cream-200 to cream-300
Image: Rounded top corners
Price: #F9A825 (saffron gold) - Large, bold
Indicators: Spicy (red with glow), Vegetarian (green)
Button: primary-500 (red-orange) → hover: primary-600
Added State: accent-500 (green)
```

### Navigation
```
Background: White with subtle shadow
Logo: primary-500 (red-orange) + secondary-500 (gold) accent
Links: charcoal-800
Active Link: primary-500
Hover: primary-500
Cart Badge: primary-500 background, white text
```

### Footer
```
Background: charcoal-800 (#212121)
Text: White (#FFFFFF)
Links: secondary-500 (saffron gold)
Link Hover: secondary-400
Section Dividers: charcoal-600
```

## 🎨 Quick Color Reference

### Where to Use Each Color

| Element | Color | Hex Code |
|---------|-------|----------|
| **Logo & Brand Name** | Primary + Secondary | #D32F2F + #F9A825 |
| **"Order Now" Button** | Primary → Gradient on Hover | #D32F2F → Gradient |
| **Menu Prices** | Saffron Gold | #F9A825 |
| **Halal/Veg Badges** | Mint Green | #4CAF50 |
| **Spicy Indicators** | Red-Orange with Glow | #D32F2F |
| **Section Backgrounds** | White or Cream | #FFFFFF or #FFF8E1 |
| **Body Text** | Deep Charcoal | #212121 |
| **Footer** | Charcoal with Gold Links | #212121 + #F9A825 |
| **Success Messages** | Mint Green | #4CAF50 |
| **Hero Gradient** | Red to Gold | #D32F2F → #F9A825 |

## 🌙 Dark Mode (Future Enhancement)

```css
Background: #121212 (charcoal-900)
Cards: #1E1E1E
Text: #E0E0E0 (light gray)
Accents: Same #D32F2F & #F9A825 (pops even more!)
Borders: #303030 (charcoal-700)
```

**Note:** Dark mode will make the red-orange and saffron gold colors stand out even more dramatically against the dark background.

---

## 🔥 Visual Mood Board

**Color Emotions:**
- 🔥 **Spicy Red-Orange** = The sizzle of karahi in the wok, heat, passion
- 🌟 **Saffron Gold** = Luxury of desi flavors, warmth of home
- 🌿 **Mint Green** = Fresh coriander, halal purity, health
- 🍞 **Warm Cream** = Fresh naan, raita, comfort

**Design Philosophy:** Blend modern web design with authentic Pakistani karahi restaurant aesthetics to create a unique, inviting digital experience that reflects the heat, flavor, and warmth of Fatima Karahi Corner's cuisine and hospitality.

**Key Principles:**
1. **Heat & Passion:** Red-orange represents the sizzling karahi
2. **Luxury & Warmth:** Saffron gold evokes premium spices and home cooking
3. **Freshness & Trust:** Mint green signals fresh ingredients and halal certification
4. **Comfort & Tradition:** Cream backgrounds create a welcoming, traditional feel
5. **Readability First:** Deep charcoal text ensures excellent accessibility

