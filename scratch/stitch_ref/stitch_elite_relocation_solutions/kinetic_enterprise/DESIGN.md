---
name: Kinetic Enterprise
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#6e5e00'
  on-secondary: '#ffffff'
  secondary-container: '#f8df71'
  on-secondary-container: '#736200'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00174b'
  on-tertiary-container: '#497cff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#fbe273'
  secondary-fixed-dim: '#dec65a'
  on-secondary-fixed: '#211b00'
  on-secondary-fixed-variant: '#534600'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
---

## Brand & Style

The design system is rooted in the "Kinetic Enterprise" philosophy: an intersection of established authority and forward-moving momentum. The visual direction is **Premium Corporate**, leaning into **Minimalism** with an editorial flair. 

The aesthetic prioritizes high-fidelity precision, utilizing vast whitespace to signal luxury and focus. It avoids the "off-the-shelf" SaaS look by employing intentional asymmetry, sophisticated type pairing, and a restraint in decorative elements. The emotional response is one of absolute trust, bespoke service, and quiet confidence. Use "thin-air" layouts where content is allowed to breathe, ensuring that every element on screen feels curated rather than crowded.

## Colors

This design system utilizes a palette centered on depth and metallic refinement:

- **Primary (Midnight Navy):** A deep, ink-like navy used for primary text and high-contrast backgrounds. It serves as the foundation of authority.
- **Secondary (Muted Gold):** A refined, low-saturation gold used sparingly for sophisticated accents, premium indicators, and high-level calls to action.
- **Tertiary (Strategic Blue):** A vibrant but professional blue reserved for interactive elements like links and active states to ensure functional clarity.
- **Neutral (Slate Scale):** A sophisticated range of grays with a slight blue undertone to maintain coolness and cohesion.

Avoid heavy blocks of primary color; instead, use the primary navy for thin strokes, typography, and iconography. Backgrounds should remain predominantly white or ultra-light gray (#F8FAFC) to maintain a premium, airy feel.

## Typography

The typographic strategy pairs the literary elegance of **Playfair Display** with the systematic clarity of **Inter**. 

- **Headlines:** Use Playfair Display for all major headings. Ensure a tight letter-spacing on larger sizes to maintain a high-fashion, editorial feel. 
- **Body:** Use Inter for all functional text. The line-height is intentionally generous (1.5–1.6) to improve readability and contribute to the "airy" brand feel.
- **Labels:** Labels use Inter with increased letter-spacing and uppercase styling to provide a structural, "architectural" contrast to the organic serif headings.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to ensure content remains centered and prestigious, moving to a fluid model for smaller breakpoints.

- **Grid:** A 12-column grid with wide 32px gutters. This width creates a sense of luxury and prevents information density from feeling overwhelming.
- **Rhythm:** Spacing follows an 8px base unit. Section vertical spacing should be aggressive (typically 120px to 160px on desktop) to separate ideas and evoke an editorial magazine layout.
- **Responsive:** On mobile, margins reduce to 24px, and vertical spacing compresses, but the "whitespace-first" rule remains. Content should reflow into a single column with increased padding between cards and text blocks.

## Elevation & Depth

This design system avoids heavy shadows in favor of **Tonal Layers** and **Low-contrast Outlines**.

- **Surfaces:** Use subtle background shifts (e.g., White to #F8FAFC) to define areas. 
- **Outlines:** Use 1px strokes in a very light neutral (#E2E8F0) rather than shadows for most containers. This keeps the UI feeling "sharp" and technical.
- **Shadows:** When depth is required (e.g., dropdowns or modal overlays), use "Ambient Shadows"—extremely diffused, large-radius blurs (30-40px) with very low opacity (3-5%) and a slight navy tint to the shadow color to maintain brand harmony.

## Shapes

The shape language is **Soft** but disciplined. 

- **Components:** Standard buttons and input fields use a 0.25rem (4px) radius. This provides a hint of modernity without losing the professional, "geometric" edge required for a corporate aesthetic.
- **Large Containers:** Cards and large sections may use up to 0.75rem (12px) to softly frame high-end editorial photography.
- **Media:** Photography should always have sharp corners or the minimum 4px radius to maintain a crisp, architectural look. Avoid circles except for avatars.

## Components

- **Buttons:** Primary buttons use the Midnight Navy background with White text. Secondary buttons use a 1px Midnight Navy stroke with no fill. For a "Premium" variant, use the Muted Gold as a text color or a very subtle underline decoration.
- **Input Fields:** Use a "minimalist" approach—only a bottom border (2px) that transforms on focus, or a very light 1px four-sided border. Backgrounds should be transparent or a faint gray.
- **Cards:** No heavy shadows. Use a 1px border (#E2E8F0) and generous internal padding (min 32px).
- **Chips/Badges:** Use Inter Bold, all-caps, 10px or 12px, with a light gray background and high letter-spacing.
- **Imagery:** Use only high-resolution, editorial-style photography. Apply a subtle desaturation or a very light navy color-wash to ensure text overlay readability and brand consistency.
- **Navigation:** The header should be tall and clean, using Inter for links with ample horizontal spacing. Use a thin 1px separator only when scrolling.