# Kooti Credit Scoring Visualization Redesign Plan

## 1. Moving Framework Steps to Horizontal Navigation

### Current Implementation

*   Framework steps are displayed as a vertical list in the left sidebar
*   Each step has an icon, title, and shows a checkmark when completed
*   Clicking a step changes the `activeStep` state

### Proposed Changes

1.  **Create a Horizontal Navigation Bar**
    *   Move the framework steps to a horizontal navigation bar below the header
    *   Use a tab-style interface for the steps
    *   Maintain the icons and visual indicators for active/completed steps
    *   Enhance the styling to make it more prominent and intuitive
2.  **UI Layout Restructuring**
    *   Remove the left sidebar entirely
    *   Expand the main content area to full width
    *   Adjust the responsive design to accommodate the new horizontal layout
3.  **Visual Enhancements**
    *   Add progress indicators between steps
    *   Implement smooth transitions between steps
    *   Maintain the colorful design with shadcn/ui styling principles

## 2. Making Thick-File/Thin-File Selection Component-Specific

### Current Implementation

*   `borrowerType` is a global state variable affecting multiple components
*   The selection UI is in the left sidebar
*   Multiple components conditionally render based on this global state

### Proposed Changes

1.  **Identify Components Affected by Borrower Type**
    *   Based on code analysis, these components include:
        *   Credit Data Inputs (Step 2)
        *   Feature Selection Process (Step 2)
        *   Model Development & Validation (Step 3)
        *   Score Calculation (Step 3)
        *   Feature Weight Distribution (Step 3)
2.  **Component-Specific Implementation**
    *   Move the borrower type selection to appear only on relevant pages/components
    *   For each affected component, add a local borrower type selector
    *   Initialize local borrower type state based on the most relevant default for that component
    *   Style the selector to be contextually appropriate for each component
3.  **State Management Refactoring**
    *   Remove the global `borrowerType` state
    *   Add component-specific state for borrower type where needed
    *   Ensure data calculations remain accurate with the new state structure

## Implementation Plan

### Phase 1: Horizontal Navigation Implementation

1.  Create a new `FrameworkStepsNavigation` component for the horizontal navigation
2.  Style it using shadcn/ui principles while maintaining the colorful design
3.  Remove the left sidebar and adjust the main layout
4.  Test navigation functionality and responsive behavior

### Phase 2: Borrower Type Selection Refactoring

1.  Identify all components that use the `borrowerType` state
2.  Create component-specific borrower type selectors
3.  Refactor the state management to use local state instead of global state
4.  Test each component to ensure it functions correctly with its local borrower type selection

### Phase 3: UI Refinement and Testing

1.  Enhance the styling of the horizontal navigation
2.  Ensure smooth transitions between steps
3.  Test the application on different screen sizes
4.  Verify that all functionality works as expected

## Detailed Component Changes