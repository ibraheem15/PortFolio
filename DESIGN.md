---
name: Ibraheem Rehman Qazi Portfolio
description: A restrained engineering portfolio centered on client delivery and production AI systems.
colors:
  paper: "#f7f7f3"
  ink: "#20231f"
  muted: "#666b63"
  line: "#d9dbd3"
  signal: "#b64831"
  signal-dark: "#87341f"
  night: "#252924"
typography:
  display:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "clamp(46px, 6.35vw, 78px)"
    fontWeight: 570
    lineHeight: 0.99
    letterSpacing: "-0.075em"
  headline:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "clamp(30px, 4vw, 43px)"
    fontWeight: 550
    lineHeight: 1.12
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "normal"
  label:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "10px"
    fontWeight: 550
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  square: "0px"
spacing:
  tight: "8px"
  section: "24px"
  generous: "64px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.square}"
    padding: "0 17px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.signal-dark}"
    textColor: "#ffffff"
    rounded: "{rounded.square}"
    padding: "0 17px"
    height: "46px"
---

# Design System: Ibraheem Rehman Qazi Portfolio

## Overview

**Creative North Star: “The Field Engineer’s Notebook”**

This portfolio treats the work as the proof. Its visual language is calm, direct, and operational: strong editorial type, compact metadata, precise dividers, and a single signal color. It should feel credible to engineering leaders and client teams evaluating someone who can move between discovery, architecture, and deployment.

Use open space to clarify hierarchy, then let real project details carry the page. The first view leads with the role; selected work and experience provide supporting evidence further down the page. Avoid generic tech decoration and claims that are not present in the CV or project record.

**Key Characteristics:**
- Warm paper and charcoal surfaces
- Restrained burnt-orange signal color
- Role-first, editorial composition
- Flat, square-edged interface elements

## Colors

The palette pairs a soft neutral page with near-black text; burnt orange marks action and selected emphasis.

### Primary
- **Field Signal** (`{colors.signal}`): Links, key emphasis, small status marks, and evidence markers.
- **Deep Signal** (`{colors.signal-dark}`): Hover state for the primary action.

### Neutral
- **Paper** (`{colors.paper}`): Main page background.
- **Ink** (`{colors.ink}`): Main text and primary action surface.
- **Muted Ink** (`{colors.muted}`): Supporting text on paper.
- **Divider** (`{colors.line}`): Fine rules between content groups.
- **Night** (`{colors.night}`): Dark narrative and contact bands.

**The Evidence Color Rule.** Use the signal color sparingly for navigation through the content, never as a decorative wash.

## Typography

**Display Font:** Inter Variable (with Inter, sans-serif fallback)  
**Body Font:** Inter Variable (with Inter, sans-serif fallback)

**Character:** A contemporary, neutral sans voice keeps the portfolio legible and technically grounded. Large headings use tight tracking; small labels stay quiet and functional.

### Hierarchy
- **Display** (weight 570, responsive 46–78px, 0.99 line height): Hero statement.
- **Headline** (weight 550, responsive 30–43px): Section and contact headings.
- **Title** (weight 570–590, 21px): Project and organization names.
- **Body** (weight 400, 12–16px, 1.75–1.9 line height): Explanations, role details, and experience.
- **Label** (weight 550–650, 9–12px): Dates, metadata, project categories, and controls.

## Layout

Content sits in a centered container capped at 1120px, with 32px desktop gutters and 20px mobile gutters. The hero balances the main statement on the left with a simple typographic role block on the right; on narrow screens the role block stacks beneath it. Featured projects use a three-column, square-edged grid, reducing to two columns at tablet widths; smaller supporting projects follow in the same responsive grid. Experience entries use thin horizontal rules. At widths below 760px, grids stack and navigation compresses into a second header row.

## Elevation & Depth

The system is flat. Layer changes come from the paper and charcoal bands; dividers establish grouping. There are no shadows, gradients, or blur effects.

## Shapes

The form language is square and precise. The primary action uses zero-radius corners. Dividers are one pixel. The small circular availability mark is a functional state indicator, not general decoration.

## Components

### Buttons
- **Shape:** Square corners (0px).
- **Primary:** Ink surface with white label and icon, compact 46px height.
- **Hover / Focus:** Hover shifts to deep signal; keyboard focus uses a visible 2px signal outline with offset.
- **Secondary:** Text links use ink and a small directional icon; hover shifts to deep signal.

### Cards / Containers
- **Featured projects:** Pale neutral surfaces with fine borders and direct repository links; no shadows or decorative imagery.
- **Supporting projects:** Compact open rows separated by a top rule, with direct repository links.

### Navigation
- **Style:** Compact text links centered in the desktop header; aligned across a second row on mobile.
- **Behavior:** Understated by default, signal-colored on hover, with visible keyboard focus.

## Do's and Don'ts

### Do:
- **Do** lead with client delivery and production evidence.
- **Do** preserve readable contrast for all supporting copy.
- **Do** use rules, spacing, and type size to organize content.
- **Do** retain responsive stacking and reduced-motion support.

### Don't:
- **Don't** add unsupported client, performance, or availability claims.
- **Don't** turn skills into arbitrary proficiency scores.
- **Don't** add generic gradients, glows, decorative grids, or rounded-card grids.
- **Don't** use the signal color as a large background field.
