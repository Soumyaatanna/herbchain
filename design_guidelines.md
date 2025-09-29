# Supply Chain Timeline Application Design Guidelines

## Design Approach: Material Design System
**Justification**: This utility-focused application prioritizes data clarity, traceability, and user trust over visual appeal. Material Design provides excellent timeline components, status indicators, and information hierarchy patterns ideal for supply chain tracking.

## Core Design Elements

### Color Palette
**Light Mode:**
- Primary: 76 39% 55% (Agricultural green)
- Secondary: 220 13% 91% (Light gray for containers)
- Success: 120 61% 50% (Verification indicators)
- Warning: 45 100% 60% (Pending status)
- Error: 0 65% 51% (Failed verification)
- Background: 0 0% 98%
- Surface: 0 0% 100%

**Dark Mode:**
- Primary: 76 39% 65%
- Secondary: 220 13% 18%
- Success: 120 61% 60%
- Warning: 45 100% 65%
- Error: 0 65% 61%
- Background: 220 13% 6%
- Surface: 220 13% 9%

### Typography
- **Primary Font**: Roboto (via Google Fonts CDN)
- **Headers**: Roboto Medium, sizes 24px, 20px, 18px
- **Body Text**: Roboto Regular, 14px and 16px
- **Labels/Metadata**: Roboto Regular, 12px
- **Monospace**: Roboto Mono (for blockchain hashes, batch codes)

### Layout System
**Spacing Units**: Use Tailwind units of 2, 4, 6, 8, and 12
- Container padding: p-6
- Card spacing: gap-4, p-4
- Timeline step spacing: mb-8
- Icon margins: mr-2, ml-4

### Component Library

#### Core Timeline Components
- **Timeline Container**: Vertical connector with green line (2px width)
- **Timeline Steps**: Numbered circles (40px) with completion states
- **Step Cards**: White background with subtle shadow, rounded corners
- **Status Badges**: Small pills indicating "Verified", "Pending", "Failed"

#### Data Display Elements
- **Information Cards**: Clean white containers with divider lines
- **Certificate Links**: Clickable elements with document icon
- **QR Code Display**: Centered with blockchain hash below
- **Location Tags**: Small gray badges with map pin icons

#### Interactive Elements
- **Blockchain Explorer Links**: Blue underlined text, opens in new tab
- **PDF Certificate Links**: Document icon with filename
- **Expandable Sections**: Chevron indicators for additional details

### Information Hierarchy
1. **Step Numbers**: Large, prominent circles on timeline
2. **Step Titles**: Bold headers (Farmer, Cooperative, Lab, etc.)
3. **Key Metadata**: Date, location, batch codes in prominent positions
4. **Supporting Details**: Secondary information in smaller text
5. **Verification Status**: Color-coded badges for immediate recognition

### Visual Treatment
- **Cards**: Subtle shadows (shadow-sm) with clean borders
- **Icons**: Use Material Icons via CDN, 20px standard size
- **Dividers**: Light gray lines (1px) between information sections
- **Hover States**: Subtle elevation on interactive elements
- **Focus States**: Blue outline following Material Design accessibility

### Responsive Behavior
- **Mobile**: Single column layout, full-width cards
- **Desktop**: Maintain timeline structure, wider cards with better spacing
- **Timeline Connector**: Consistent vertical line across all breakpoints

### Data Presentation Strategy
- **Chronological Order**: Top-to-bottom timeline flow
- **Clear Labeling**: Each data point with descriptive labels
- **External Links**: Visual indication for documents and blockchain explorer
- **Status Communication**: Immediate visual feedback on verification states
- **Progressive Disclosure**: Core info visible, details expandable if needed

This design prioritizes information clarity, user trust, and efficient data scanning while maintaining a professional, agricultural-appropriate aesthetic.