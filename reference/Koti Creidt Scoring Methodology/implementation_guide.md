# Implementation Guide for Kooti Credit Scoring Visualization Redesign

This guide provides instructions for implementing the redesigned Kooti Credit Scoring Visualization with horizontal navigation and component-specific borrower type selectors.

## 1. Components Created

We've created the following components to implement the redesign:

1. **FrameworkStepsNavigation.tsx** - Horizontal navigation component for the framework steps
2. **BorrowerTypeSelector.tsx** - Reusable component for borrower type selection
3. **FeatureHierarchy.tsx** - Component for the Feature Hierarchy section with borrower type selector
4. **ModelDevelopment.tsx** - Component for the Model Development & Validation section with borrower type selector
5. **ScoreCalculation.tsx** - Component for the Score Calculation section with borrower type selector
6. **FeatureWeightDistribution.tsx** - Component for the Feature Weight Distribution section with borrower type selector

## 2. Integration Steps

### Step 1: Import the Components

In the `kooti-credit-scoring-visualization.tsx` file, import all the components:

```jsx
import FrameworkStepsNavigation from "./components/FrameworkStepsNavigation";
import BorrowerTypeSelector from "./components/BorrowerTypeSelector";
import FeatureHierarchy from "./components/FeatureHierarchy";
import ModelDevelopment from "./components/ModelDevelopment";
import ScoreCalculation from "./components/ScoreCalculation";
import FeatureWeightDistribution from "./components/FeatureWeightDistribution";
```

### Step 2: Replace the Left Sidebar with Horizontal Navigation

Remove the left sidebar code and use the `FrameworkStepsNavigation` component in the header:

```jsx
<div className="bg-gradient-to-r from-primary via-secondary to-primary/90 text-primary-foreground p-4 relative overflow-hidden">
  {/* Decorative accent elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-xl"></div>
  <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/5 rounded-full -mb-16 blur-lg"></div>
  <h1 className="text-2xl font-bold">Kooti Credit Scoring Methodology</h1>
  <p className="text-primary-foreground/90">Interactive visualization of the 5-step credit scoring framework</p>
  <FrameworkStepsNavigation activeStep={activeStep} setActiveStep={setActiveStep} />
  {renderProgressBar()}
</div>
```

### Step 3: Replace the Feature Hierarchy Component in Step 2

In the Step 2 section, replace the existing Feature Hierarchy component with the new component:

```jsx
{activeStep === 2 && (
  <div className="bg-brand-bg-card p-4 rounded-lg shadow-md border border-brand-border text-brand-text-primary">
    <h3 className="font-semibold text-xl text-brand-text-primary mb-4 text-center">Data Collection & Feature Engineering</h3>
    
    {/* Data Collection Ecosystem - Better contained layout */}
    {/* ... existing content ... */}
    
    {/* Enhanced Feature Hierarchy with component-specific borrower type selector */}
    <FeatureHierarchy
      borrowerType={borrowerType}
      setBorrowerType={setBorrowerType}
    />
    
    {/* ... rest of the content ... */}
  </div>
)}
```

### Step 4: Replace the Model Development & Validation Section in Step 3

In the Step 3 section, replace the existing Model Development component with the new component:

```jsx
{activeStep === 3 && (
  <div>
    <ModelDevelopment
      borrowerType={borrowerType}
      setBorrowerType={setBorrowerType}
      isCalibrating={isCalibrating}
      setIsCalibrating={setIsCalibrating}
      calibrationCycle={calibrationCycle}
      modelLastUpdated={modelLastUpdated}
    />
    
    <ScoreCalculation
      borrowerType={borrowerType}
      setBorrowerType={setBorrowerType}
      creditScore={creditScore}
      calibratedScore={calibratedScore}
      isCalibrating={isCalibrating}
      scoreExplanation={scoreExplanation}
      getDynamicWeights={getDynamicWeights}
      featureWeights={featureWeights}
    />
    
    <FeatureWeightDistribution
      borrowerType={borrowerType}
      setBorrowerType={setBorrowerType}
      getDynamicWeights={getDynamicWeights}
    />
  </div>
)}
```

### Step 5: Remove the Global Borrower Type Selector

Remove the global borrower type selector from the left sidebar since we've added component-specific selectors.

## 3. Testing the Implementation

After implementing these changes, test the application to ensure:

1. The horizontal navigation works correctly
2. The borrower type selectors in each component update the state correctly
3. The UI is responsive and looks good on different screen sizes
4. All functionality works as expected

## 4. Troubleshooting

If you encounter any issues:

1. Check the console for errors
2. Verify that all components are imported correctly
3. Ensure that the props are passed correctly to each component
4. Check that the state is being updated correctly when the borrower type is changed