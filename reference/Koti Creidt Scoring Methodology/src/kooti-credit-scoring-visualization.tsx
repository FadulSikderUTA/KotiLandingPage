import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, ExternalLink, AlertCircle, Layers, Users, Database, Brain, LineChart, Eye } from 'lucide-react';
import { Button } from "./components/ui/button";
import FrameworkStepsNavigation from "./components/FrameworkStepsNavigation";
import BorrowerTypeSelector from "./components/BorrowerTypeSelector";
const KootiCSMVisualization = () => {
  // State for input data (simplified for demo)
  const [inputs, setInputs] = useState({
    loanHistory: 2,
    creditAge: 15,
    paymentHistory: 90,
    creditUtilization: 20,
    inquiries: 1,
    telecomPayments: 95,
    mobileFinancial: 85,
    utilityBills: 92
  });
  
  // State to track which borrower type is selected
  const [borrowerType, setBorrowerType] = useState<'thick-file' | 'thin-file'>('thick-file');
  
  // Active step in the visualization
  const [activeStep, setActiveStep] = useState(0);
  
  // Final credit score
  const [creditScore, setCreditScore] = useState(0);
  
  // Explanation for the current score
  const [scoreExplanation, setScoreExplanation] = useState<string[]>([]);
  
  // Add state for model recalibration simulation
  const [calibrationCycle, setCalibrationCycle] = useState(0);
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [modelLastUpdated, setModelLastUpdated] = useState('2 months ago');
  const [modelPerformanceTrend, setModelPerformanceTrend] = useState([65, 68, 72, 75, 78, 76, 77, 78]);
  
  // Add to the existing state variables
  const [calibratedScore, setCalibratedScore] = useState(0);
  
  // Calculate score based on inputs and borrower type
  useEffect(() => {
    let baseScore = 500;
    let explanations = [];
    
    if (borrowerType === 'thick-file') {
      // Number of loans
      if (inputs.loanHistory >= 3) {
        baseScore += 50;
        explanations.push("Multiple established credit lines (+50)");
      } else if (inputs.loanHistory > 0) {
        baseScore += 30;
        explanations.push("Limited credit lines (+30)");
      }
      
      // Credit age in months
      if (inputs.creditAge > 24) {
        baseScore += 70;
        explanations.push("Well-established credit history (+70)");
      } else if (inputs.creditAge > 12) {
        baseScore += 40;
        explanations.push("Moderate credit history (+40)");
      } else {
        baseScore += 10;
        explanations.push("Limited credit history (+10)");
      }
      
      // Payment history (percentage on-time)
      if (inputs.paymentHistory > 95) {
        baseScore += 100;
        explanations.push("Excellent payment history (+100)");
      } else if (inputs.paymentHistory > 85) {
        baseScore += 70;
        explanations.push("Good payment history (+70)");
      } else if (inputs.paymentHistory > 75) {
        baseScore += 30;
        explanations.push("Fair payment history (+30)");
      } else {
        baseScore -= 20;
        explanations.push("Poor payment history (-20)");
      }
      
      // Credit utilization
      if (inputs.creditUtilization < 10) {
        baseScore += 80;
        explanations.push("Very low credit utilization (+80)");
      } else if (inputs.creditUtilization < 30) {
        baseScore += 60;
        explanations.push("Low credit utilization (+60)");
      } else if (inputs.creditUtilization < 50) {
        baseScore += 30;
        explanations.push("Moderate credit utilization (+30)");
      } else if (inputs.creditUtilization < 70) {
        baseScore += 0;
        explanations.push("High credit utilization (+0)");
      } else {
        baseScore -= 30;
        explanations.push("Very high credit utilization (-30)");
      }
      
      // Recent inquiries
      if (inputs.inquiries === 0) {
        baseScore += 50;
        explanations.push("No recent credit inquiries (+50)");
      } else if (inputs.inquiries < 3) {
        baseScore += 20;
        explanations.push("Few recent credit inquiries (+20)");
      } else {
        baseScore -= 10;
        explanations.push("Many recent credit inquiries (-10)");
      }
    } else {
      // Thin-file borrower logic
      // Telecom payments (percentage on-time)
      if (inputs.telecomPayments > 95) {
        baseScore += 100;
        explanations.push("Excellent telecom payment history (+100)");
      } else if (inputs.telecomPayments > 85) {
        baseScore += 70;
        explanations.push("Good telecom payment history (+70)");
      } else if (inputs.telecomPayments > 75) {
        baseScore += 30;
        explanations.push("Fair telecom payment history (+30)");
      } else {
        baseScore -= 10;
        explanations.push("Poor telecom payment history (-10)");
      }
      
      // Mobile financial services usage
      if (inputs.mobileFinancial > 90) {
        baseScore += 100;
        explanations.push("Very active MFS user with good history (+100)");
      } else if (inputs.mobileFinancial > 80) {
        baseScore += 70;
        explanations.push("Active MFS user with good history (+70)");
      } else if (inputs.mobileFinancial > 70) {
        baseScore += 40;
        explanations.push("Moderate MFS usage (+40)");
      } else {
        baseScore += 10;
        explanations.push("Limited MFS usage (+10)");
      }
      
      // Utility bill payments
      if (inputs.utilityBills > 95) {
        baseScore += 100;
        explanations.push("Excellent utility payment history (+100)");
      } else if (inputs.utilityBills > 85) {
        baseScore += 70;
        explanations.push("Good utility payment history (+70)");
      } else if (inputs.utilityBills > 75) {
        baseScore += 30;
        explanations.push("Fair utility payment history (+30)");
      } else {
        baseScore -= 10;
        explanations.push("Poor utility payment history (-10)");
      }
      
      // Credit history
      if (inputs.loanHistory > 0) {
        baseScore += 50;
        explanations.push("Some established credit history (+50)");
      }
    }
    
    // Ensure score stays within 300-850 range
    let finalScore = Math.max(300, Math.min(850, baseScore));
    setCreditScore(finalScore);
    setScoreExplanation(explanations);
  }, [inputs, borrowerType]);
  
  // Modify the useEffect that handles calibration
  useEffect(() => {
    if (isCalibrating) {
      const timer = setTimeout(() => {
        // Simulate weights changing during calibration
        setCalibrationCycle(prev => (prev + 1) % 5);
        
        // Calculate a slightly different score based on calibration cycle
        // This will make the score change dynamically during recalibration
        if (calibrationCycle === 1) { // During the Model Training phase
          const weightAdjustment = calibrationCycle === 1 ? Math.floor(Math.random() * 20) - 10 : 0;
          setCalibratedScore(Math.max(300, Math.min(850, creditScore + weightAdjustment)));
        } else {
          setCalibratedScore(creditScore);
        }
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCalibratedScore(creditScore);
    }
  }, [isCalibrating, calibrationCycle, creditScore]);

  // Dynamic feature weights with slight variations for each calibration cycle
  const getDynamicWeights = () => {
    // Explicitly cast borrowerType to ensure TypeScript recognizes it as a valid key
    const baseWeights = featureWeights[borrowerType as keyof typeof featureWeights];
    // Apply small variations based on calibration cycle (±2%)
    return baseWeights.map(feature => ({
      ...feature,
      weight: Math.max(5, Math.min(50, feature.weight + ([-2, -1, 0, 1, 2][calibrationCycle % 5])))
    }));
  };
  
  // Helper function to get risk category
  const getRiskCategory = (score: number) => {
    if (score >= 750) return {category: "Excellent", color: "bg-emerald-500"};
    if (score >= 700) return {category: "Very Good", color: "bg-green-500"};
    if (score >= 650) return {category: "Good", color: "bg-teal-500"};
    if (score >= 600) return {category: "Fair", color: "bg-yellow-500"};
    return {category: "Poor", color: "bg-red-500"};
  };

  const riskInfo = getRiskCategory(creditScore);

  // Steps in the framework
  const steps = [
    {
      title: "Define Business Objectives",
      icon: <Users size={24} />,
      description: "Establish goals for credit scoring system aligned with Bangladesh Bank regulations",
      details: "Credit bureau aims to address financial inclusion and risk management by developing models that help lenders make fair credit decisions."
    },
    {
      title: "Specify Target & Outcome Definition",
      icon: <AlertCircle size={24} />,
      description: "Determine what \"default\" means and establish the performance windows",
      details: "Define default as 90+ days past due within a 12-month performance window. Separate approaches for thick-file vs. thin-file borrowers."
    },
    {
      title: "Data Collection & Feature Engineering",
      icon: <Database size={24} />,
      description: "Gather data from traditional and alternative sources, transform into predictive features",
      details: "Collect data from banks, microfinance institutions, telecoms, utilities and mobile financial services. Apply Weight of Evidence (WoE) transformations."
    },
    {
      title: "Model Development & Validation",
      icon: <Brain size={24} />,
      description: "Build, validate models and develop scorecards with transparent points allocation",
      details: "Logistic regression models are developed separately for Kooti Pro Score (thick-file) and Kooti New Score (thin-file) with comprehensive validation frameworks."
    },
    {
      title: "Implementation, Monitoring & Governance",
      icon: <LineChart size={24} />,
      description: "Deploy and monitor models with governance controls",
      details: "Real-time implementation with continuous performance tracking and regulatory compliance checks."
    }
  ];

  // Add type for feature weights
  type FeatureWeight = {
    name: string;
    weight: number;
    color: string;
  };

  // Define the feature weights with proper typing
  const featureWeights: Record<'thick-file' | 'thin-file', FeatureWeight[]> = {
    'thick-file': [
      { name: 'Payment History', weight: 35, color: 'bg-blue-500' },
      { name: 'Credit Utilization', weight: 30, color: 'bg-green-500' },
      { name: 'Credit History', weight: 15, color: 'bg-purple-500' },
      { name: 'Credit Mix', weight: 10, color: 'bg-yellow-500' },
      { name: 'New Credit', weight: 10, color: 'bg-red-500' }
    ],
    'thin-file': [
      { name: 'Telecom Payments', weight: 40, color: 'bg-blue-500' },
      { name: 'Utility Payments', weight: 30, color: 'bg-green-500' },
      { name: 'Mobile Financial', weight: 20, color: 'bg-purple-500' },
      { name: 'Psychometric', weight: 10, color: 'bg-yellow-500' }
    ]
  };

  // Input configuration for UI
  const thickFileInputs = [
    { label: "Number of Loan/Credit Accounts", min: 0, max: 10, step: 1, value: inputs.loanHistory, param: "loanHistory" },
    { label: "Credit History Age (months)", min: 0, max: 60, step: 1, value: inputs.creditAge, param: "creditAge" },
    { label: "Payment History (% on-time)", min: 0, max: 100, step: 1, value: inputs.paymentHistory, param: "paymentHistory" },
    { label: "Credit Utilization (%)", min: 0, max: 100, step: 1, value: inputs.creditUtilization, param: "creditUtilization" },
    { label: "Recent Credit Inquiries", min: 0, max: 10, step: 1, value: inputs.inquiries, param: "inquiries" }
  ];

  const thinFileInputs = [
    { label: "Telecom Payment History (% on-time)", min: 0, max: 100, step: 1, value: inputs.telecomPayments, param: "telecomPayments" },
    { label: "Mobile Financial Services Usage Score", min: 0, max: 100, step: 1, value: inputs.mobileFinancial, param: "mobileFinancial" },
    { label: "Utility Bill Payment History (% on-time)", min: 0, max: 100, step: 1, value: inputs.utilityBills, param: "utilityBills" },
    { label: "Number of Formal Loans (if any)", min: 0, max: 3, step: 1, value: inputs.loanHistory, param: "loanHistory" }
  ];

  // Handler for input changes
  const handleInputChange = (param: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [param]: value
    }));
  };

  // Logic to move through steps
  const handleNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  // Render progress indicator
  const renderProgressBar = () => {
    return (
      <div className="w-full bg-muted h-2 rounded-full mt-2 mb-6">
        <div
          className="bg-secondary h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${(activeStep + 1) * 20}%` }}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full bg-background text-foreground font-sans rounded-lg shadow-lg overflow-hidden"> {/* shadcn/ui background and text colors */}
      <div className="bg-gradient-to-r from-primary via-secondary to-primary/90 text-primary-foreground p-4 relative overflow-hidden"> {/* Enhanced header with variable color gradient */}
        {/* Decorative accent elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-xl"></div>
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/5 rounded-full -mb-16 blur-lg"></div>
        <h1 className="text-2xl font-bold">Kooti Credit Scoring Methodology</h1>
        <p className="text-primary-foreground/90">Interactive visualization of the 5-step credit scoring framework</p>
        <FrameworkStepsNavigation activeStep={activeStep} setActiveStep={setActiveStep} />
        {renderProgressBar()}
      </div>

      {/* Main content area */}
      <div className="p-6 flex flex-col">
        {/* Current step details */}
        <div className="bg-card p-5 rounded-lg mb-4 border shadow-md relative overflow-hidden"> {/* Enhanced card styling */}
          {/* Decorative accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/70"></div>
          
          <div className="pl-3"> {/* Add padding to account for the accent bar */}
            <div className="flex items-center mb-3">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                {steps[activeStep].icon}
              </div>
              <h2 className="text-xl font-bold text-card-foreground">{steps[activeStep].title}</h2>
            </div>
            
            <p className="text-lg text-card-foreground mb-3 pl-12">{steps[activeStep].description}</p>
            <p className="text-muted-foreground pl-12 border-l-2 border-muted py-2">{steps[activeStep].details}</p>
          </div>
        </div>

        {/* Interactive content based on step */}
        <div className="flex-grow">
            {activeStep === 0 && (
              <div className="bg-brand-bg-card p-4 rounded-lg shadow-md space-y-6 border border-brand-border"> {/* Main container for step 0 content */}
                <div>
                <h3 className="font-semibold text-brand-text-primary mb-2">Business Objectives</h3>
                <ul className="list-disc pl-5 space-y-2 text-brand-text-secondary"> {/* Text color for list items */}
                  <li>Improve lending decisions by quantifying risk</li>
                  <li>Streamline credit processes with automated scoring</li>
                  <li>Facilitate financial inclusion for underserved populations</li>
                  <li>Enhance market efficiency through reduced information asymmetry</li>
                  <li>Align with Bangladesh Bank's regulatory guidelines</li>
                </ul>
                </div>

                {/* Distinction between general-purpose and application-specific scoring */}
                <div className="mt-4">
                  <h3 className="font-semibold text-brand-text-primary mb-3">Scoring Model Approaches</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-brand-border p-4 rounded-md bg-brand-bg-light relative"> {/* Lighter background for card */}
                      <div className="absolute top-0 right-0 bg-brand-primary text-white text-xs px-2 py-1 rounded-bl-md">
                        Kooti Focus
                      </div>
                      <h4 className="font-medium text-brand-primary">General-Purpose Credit Scoring</h4> {/* Brand primary for heading */}
                      <p className="text-sm mt-2 text-brand-text-secondary">
                        Provides an overall risk assessment for any credit product, ensuring consistent underwriting across multiple lenders and reducing data asymmetry.
                      </p>
                    </div>
                    <div className="border border-brand-border p-4 rounded-md bg-brand-bg-light"> {/* Lighter background for card */}
                      <h4 className="font-medium text-brand-text-primary">Application-Specific Scoring</h4> {/* Primary text for heading */}
                      <p className="text-sm mt-2 text-brand-text-secondary">
                        Developed internally by banks/NBFIs for particular credit products. Kooti Score often serves as a baseline or input to such specialized models.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bangladesh market dynamics */}
                <div className="mt-4">
                  <h3 className="font-semibold text-brand-text-primary mb-3">Bangladesh Credit Market Dynamics</h3>
                  <div className="p-4 border border-brand-border rounded-md bg-yellow-50"> {/* Keeping yellow for emphasis, can be changed to a brand tint */}
                    <p className="text-sm text-yellow-800"> {/* Darker yellow text for readability */}
                      Most of Bangladesh's population lacks access to formal credit, resulting in limited or no credit history ("thin-file"). To address this challenge, Kooti employs a segmented approach that accommodates both established borrowers and those new to formal credit.
                    </p>
                    <div className="mt-3 flex items-center justify-center">
                      <div className="bg-red-100 rounded-md p-2 text-center w-32">
                        <p className="text-xs font-medium text-red-700">Challenge</p>
                        <p className="text-sm font-bold text-red-800 mt-1">Limited Credit Data</p>
                      </div>
                      <div className="mx-4 text-gray-400">→</div>
                      <div className="bg-green-100 rounded-md p-2 text-center w-32">
                        <p className="text-xs font-medium text-green-700">Solution</p>
                        <p className="text-sm font-bold text-green-800 mt-1">Segmented Approach</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kooti's segmented approach */}
                <div className="mt-4">
                  <h3 className="font-semibold text-brand-text-primary mb-3">Kooti Score Product Suite</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="border-2 border-brand-primary p-4 rounded-md relative bg-brand-bg-card"> {/* Brand primary border, card background */}
                      <div className="absolute -top-3 left-3 bg-brand-primary text-white text-sm px-3 py-1 rounded-md">
                        Thick-File Borrowers
                      </div>
                      <h4 className="font-bold text-brand-primary mt-3">Kooti Pro Score</h4>
                      <p className="text-sm mt-2 text-brand-text-secondary">
                        For borrowers with substantial credit history (2+ years, multiple accounts). Uses traditional credit data and metrics.
                      </p>
                      <div className="mt-3 bg-blue-50 rounded p-2 text-xs text-brand-text-primary"> {/* Light blue bg, primary text */}
                        <span className="font-medium">Score Range:</span> 300-850
                      </div>
                    </div>
                    <div className="border-2 border-brand-secondary p-4 rounded-md relative bg-brand-bg-card"> {/* Brand secondary border, card background */}
                      <div className="absolute -top-3 left-3 bg-brand-secondary text-white text-sm px-3 py-1 rounded-md">
                        Thin-File Borrowers
                      </div>
                      <h4 className="font-bold text-brand-secondary mt-3">Kooti New Score</h4>
                      <p className="text-sm mt-2 text-brand-text-secondary">
                        For borrowers with limited or no formal credit history. Leverages alternative data sources and advanced analytics.
                      </p>
                      <div className="mt-3 bg-teal-50 rounded p-2 text-xs text-brand-text-primary"> {/* Light teal bg, primary text */}
                        <span className="font-medium">Score Range:</span> 300-850
                      </div>
                    </div>
                  </div>
                  
                  {/* Industry-specific variants */}
                  <div className="mt-2">
                    <h4 className="font-medium text-sm text-brand-text-primary mb-2">Industry-Specific Variants</h4>
                    <div className="flex flex-wrap gap-2">
                      {/* Example: Using brand colors for these tags, or creating specific tag colors */}
                      <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-md text-sm flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Kooti MFI Score
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Kooti Retail Score
                      </div>
                      <div className="bg-amber-100 text-amber-800 px-3 py-2 rounded-md text-sm flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                        Kooti SME Score
                      </div>
                    </div>
                    <p className="text-xs text-brand-text-secondary mt-2 italic"> {/* Secondary text for disclaimer */}
                      Disclaimer: Score ranges shown are illustrative and follow international standards. Actual implementation will be calibrated with Bangladesh market data.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="space-y-6 text-brand-text-primary"> {/* Base text color */}
                <h3 className="text-xl font-semibold text-center text-brand-text-primary">Specify Target & Outcome Definition</h3>
                
                {/* Primary Target Definition */}
                <div className="bg-brand-bg-card p-5 rounded-lg border border-brand-border shadow-sm">
                  <h4 className="font-medium mb-3 text-brand-primary">Primary Target Variable: Probability of Default (PD)</h4>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-brand-bg-light p-4 rounded-lg border border-brand-border">
                      <h5 className="font-medium text-brand-text-primary mb-2">Core Definition</h5>
                      <div className="mb-2 bg-blue-50 rounded-lg p-3 border border-blue-200"> {/* Keeping light blue for emphasis, can be brand tint */}
                        <p className="text-sm font-medium text-center text-brand-primary">PD = P(Borrower defaults within next 12 months)</p>
                        </div>
                      <p className="text-sm mb-2 text-brand-text-secondary">A borrower is considered in <strong>default</strong> if unable to meet debt obligations, typically marked by:</p>
                      <ul className="text-sm list-disc list-inside space-y-1 text-brand-text-secondary">
                        <li><strong>90+ days</strong> past due</li>
                        <li>Charge-off/Write-off</li>
                        <li>Bankruptcy or Insolvency</li>
                        <li>Settlements (partial repayment arrangements)</li>
                        </ul>
                      </div>
                      
                    <div className="flex-1 bg-brand-bg-light p-4 rounded-lg border border-brand-border">
                      <h5 className="font-medium text-brand-text-primary mb-2">Alternative Target Constructions</h5>
                      <ul className="text-sm space-y-3 text-brand-text-secondary">
                        <li className="bg-blue-50 p-2 rounded border border-blue-200">
                          <span className="font-medium text-brand-primary">Delinquency Thresholds:</span> 30+, 60+, 120+ days past due
                        </li>
                        <li className="bg-green-50 p-2 rounded border border-green-200">
                          <span className="font-medium text-status-excellent">Roll Rate Analysis:</span> Probability of moving between delinquency states (30→60→90)
                        </li>
                        <li className="bg-purple-50 p-2 rounded border border-purple-200">
                          <span className="font-medium text-purple-700">Vintage Analysis:</span> Performance of loan origination cohorts over time
                        </li>
                        </ul>
                      <p className="text-xs mt-2 text-brand-text-secondary italic">Note: While these variations inform model development, the standard Kooti Score uses 12-month PD with 90+ days past due.</p>
                      </div>
                        </div>
                      </div>
                      
                {/* Time Window Framework Visualization */}
                <div className="bg-brand-bg-card p-5 rounded-lg border border-brand-border shadow-sm">
                  <h4 className="font-medium mb-4 text-brand-primary">Observation and Performance Windows</h4>
                  
                  <div className="relative mb-8">
                    <div className="flex flex-col space-y-6">
                      {/* Thick-file timeline */}
                      <div className="flex flex-col">
                        <div className="text-sm font-medium mb-1 text-brand-primary">Thick-File (Kooti Pro Score)</div>
                        <div className="flex items-center">
                          <div className="w-[40%] h-10 bg-blue-100 rounded-l-lg flex items-center justify-center text-xs font-medium border border-blue-200 text-blue-800 relative">
                            Observation Window
                            <span className="text-[10px] text-blue-700 absolute -bottom-5 left-0">Up to 24 months</span>
                        </div>
                          <div className="w-[10%] h-10 bg-yellow-100 flex items-center justify-center text-xs font-medium border border-yellow-200 text-yellow-800 relative">
                            Buffer
                            <span className="text-[10px] text-yellow-700 absolute -bottom-5 left-0">3 months</span>
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                              <svg width="16" height="16" viewBox="0 0 24 24" className="text-status-fair" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                  </div>
                            </div>
                          <div className="w-[50%] h-10 bg-green-100 rounded-r-lg flex items-center justify-center text-xs font-medium border border-green-200 text-green-800 relative">
                            Performance Window
                            <span className="text-[10px] text-green-700 absolute -bottom-5 left-0">12 months</span>
                            </div>
                      </div>
                    </div>
                    
                      {/* Thin-file timeline */}
                      <div className="flex flex-col">
                        <div className="text-sm font-medium mb-1 text-brand-secondary">Thin-File (Kooti New Score)</div>
                        <div className="flex items-center">
                          <div className="w-[25%] h-10 bg-teal-100 rounded-l-lg flex items-center justify-center text-xs font-medium border border-teal-200 text-teal-800 relative">
                            Observation Window
                            <span className="text-[10px] text-teal-700 absolute -bottom-5 left-0">6-12 months</span>
                            </div>
                          <div className="w-[10%] h-10 bg-yellow-100 flex items-center justify-center text-xs font-medium border border-yellow-200 text-yellow-800 relative">
                            Buffer
                            <span className="text-[10px] text-yellow-700 absolute -bottom-5 left-0">0-3 months</span>
                            </div>
                          <div className="w-[50%] h-10 bg-green-100 rounded-r-lg flex items-center justify-center text-xs font-medium border border-green-200 text-green-800 relative">
                            Performance Window
                            <span className="text-[10px] text-green-700 absolute -bottom-5 left-0">12 months</span>
                            <div className="absolute top-full mt-1 left-0 right-0 flex justify-center">
                              <div className="bg-green-50 rounded-lg p-1 text-xs border border-green-200 text-green-700 inline-flex items-center mt-4">
                                <svg width="14" height="14" viewBox="0 0 24 24" className="text-status-excellent mr-1" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                                Default events tracked during this period
                  </div>
                    </div>
                        </div>
                          <div className="w-[15%] h-10 bg-blue-50 flex items-center justify-center text-xs font-medium border border-blue-200 text-blue-700 relative">
                            More frequent updates
                      </div>
                      </div>
                    </div>
                  </div>
                  
                    {/* Annotations */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs text-brand-text-secondary italic bg-brand-bg-light px-3 py-1 rounded-full border border-brand-border">
                      Exact window lengths calibrated with Bangladesh market data
                  </div>
                </div>
                
                  {/* Market Calibration Considerations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-sm">
                    <div className="bg-brand-bg-light p-3 rounded-lg border border-brand-border">
                      <h5 className="font-medium text-brand-text-primary mb-2">Bangladesh Market Calibration</h5>
                      <ul className="space-y-1 text-brand-text-secondary list-disc list-inside">
                        <li>Short-tenor loans (6-9 months for MFI/SME)</li>
                        <li>Agricultural seasonality impacts</li>
                        <li>Data gaps from smaller lenders</li>
                        <li>Minimum 3+ months of active records required</li>
                      </ul>
                    </div>
                    
                    <div className="bg-brand-bg-light p-3 rounded-lg border border-brand-border">
                      <h5 className="font-medium text-brand-text-primary mb-2">Economic Cycle Coverage</h5>
                      <ul className="space-y-1 text-brand-text-secondary list-disc list-inside">
                        <li>Out-of-time validation across years</li>
                        <li>Stress events (floods, pandemic) incorporated</li>
                        <li>Macro monitoring (inflation, currency changes)</li>
                        <li>Model recalibration triggered by economic shifts</li>
                    </ul>
                  </div>
                  </div>
                </div>
                
                {/* Segmented Target Strategy */}
                <div className="bg-brand-bg-card p-5 rounded-lg border border-brand-border shadow-sm">
                  <h4 className="font-medium mb-3 text-brand-primary">Segmented Target Strategy</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Thick-file approach */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200"> {/* Keeping light blue for TF emphasis */}
                      <div className="flex items-center mb-3">
                        <div className="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">TF</div>
                        <h5 className="font-medium text-brand-primary">Thick-File: Kooti Pro Score</h5>
                      </div>
                      
                <div className="space-y-3">
                        <div className="bg-brand-bg-card p-2.5 rounded border border-blue-100">
                          <h6 className="font-medium text-sm text-brand-primary mb-1">Default Definition</h6>
                          <ul className="text-xs space-y-1 text-brand-text-secondary list-disc list-inside">
                            <li>90+ day delinquency on any account</li>
                            <li>Charge-offs, write-downs</li>
                            <li>Adverse statuses within performance window</li>
                          </ul>
                  </div>
                  
                        <div className="bg-brand-bg-card p-2.5 rounded border border-blue-100">
                          <h6 className="font-medium text-sm text-brand-primary mb-1">Data Requirements</h6>
                          <ul className="text-xs space-y-1 text-brand-text-secondary list-disc list-inside">
                            <li>At least one active account {'>'}6 months old</li>
                            <li>Multiple credit lines when possible</li>
                            <li>Continuous bureau data to track changes</li>
                        </ul>
                      </div>
                      </div>
                    </div>
                    
                    {/* Thin-file approach */}
                    <div className="bg-teal-50 p-4 rounded-lg border border-teal-200"> {/* Keeping light teal for TN emphasis */}
                      <div className="flex items-center mb-3">
                        <div className="bg-brand-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2">TN</div>
                        <h5 className="font-medium text-brand-secondary">Thin-File: Kooti New Score</h5>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-brand-bg-card p-2.5 rounded border border-teal-100">
                          <h6 className="font-medium text-sm text-brand-secondary mb-1">Adapted Default Definition</h6>
                          <ul className="text-xs space-y-1 text-brand-text-secondary list-disc list-inside">
                            <li>90+ day delinquency (if any formal credit)</li>
                            <li>Utility bills unpaid for 2-3 consecutive cycles</li>
                            <li>Multiple missed telecom payments</li>
                            <li>Mobile money loan defaults</li>
                        </ul>
                      </div>
                        
                        <div className="bg-brand-bg-card p-2.5 rounded border border-teal-100">
                          <h6 className="font-medium text-sm text-brand-secondary mb-1">Alternative Data Sources</h6>
                          <ul className="text-xs space-y-1 text-brand-text-secondary list-disc list-inside">
                            <li>Telecom usage & payment patterns</li>
                            <li>Utility payment timelines</li>
                            <li>MFS transaction flows</li>
                            <li>Psychometric assessment scores</li>
                            <li>Small-scale microfinance activity</li>
                          </ul>
                    </div>
                  </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-100 p-3 mt-4 rounded-lg border border-yellow-300 text-sm text-yellow-800"> {/* Brand consistent yellow warning */}
                    <div className="flex items-start">
                      <svg width="20" height="20" viewBox="0 0 24 24" className="text-yellow-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <div>
                        <span className="font-medium">ML Enhancement for Thin-File:</span> More sophisticated detection of "early negative signals" is applied for thin-file borrowers. For example, sudden changes in telecom recharge patterns or MFS transaction frequency can serve as early warning indicators.
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrevStep}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-brand-text-primary rounded transition-colors duration-150 border border-brand-border"
                  >
                    Previous: Define Business Objectives
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="px-4 py-2 bg-brand-primary text-white rounded hover:opacity-90 transition-opacity duration-150"
                  >
                    Next: Data Collection & Feature Engineering
                  </button>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="bg-brand-bg-card p-4 rounded-lg shadow-md border border-brand-border text-brand-text-primary">
                <h3 className="font-semibold text-xl text-brand-text-primary mb-4 text-center">Data Collection & Feature Engineering</h3>
                
                {/* Data Collection Ecosystem - Better contained layout */}
                <div className="mb-6 border border-brand-border rounded-lg p-4 bg-brand-bg-light">
                  <h4 className="font-medium text-brand-text-primary mb-3 text-center">Kooti Data Collection Ecosystem</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Responsive grid */}
                    {/* Traditional Data Sources - Left column */}
                    <div className="flex flex-col space-y-3">
                      <div className="text-center mb-2">
                        <div className="bg-blue-100 text-brand-primary rounded-full px-3 py-1 text-sm font-medium inline-block border border-blue-200">
                          Traditional Data
                        </div>
                      </div>
                      
                      <div className="bg-brand-bg-card p-2 rounded-lg border border-brand-border text-sm">
                        <div className="font-medium text-brand-primary">Banks & FIs</div>
                        <div className="text-xs mt-1 text-brand-text-secondary">
                          Loan histories, repayment records
                        </div>
                      </div>
                      
                      <div className="bg-brand-bg-card p-2 rounded-lg border border-brand-border text-sm">
                        <div className="font-medium text-brand-primary">Bangladesh Bank CIB</div>
                        <div className="text-xs mt-1 text-brand-text-secondary">
                          Credit registry, defaults
                        </div>
                      </div>
                      
                      <div className="bg-brand-bg-card p-2 rounded-lg border border-brand-border text-sm">
                        <div className="font-medium text-brand-primary">MFIs</div>
                        <div className="text-xs mt-1 text-brand-text-secondary">
                          Small loans, group lending
                        </div>
                      </div>
                      
                      <div className="text-center mt-2 mb-2">
                        <div className="bg-teal-100 text-brand-secondary rounded-full px-3 py-1 text-sm font-medium inline-block border border-teal-200">
                          Alternative Data
                        </div>
                      </div>
                      
                      <div className="bg-brand-bg-card p-2 rounded-lg border border-brand-border text-sm">
                        <div className="font-medium text-brand-secondary">Utilities</div>
                        <div className="text-xs mt-1 text-brand-text-secondary">
                          Bill payment histories
                        </div>
                      </div>
                      
                      <div className="bg-brand-bg-card p-2 rounded-lg border border-brand-border text-sm">
                        <div className="font-medium text-brand-secondary">Telecom</div>
                        <div className="text-xs mt-1 text-brand-text-secondary">
                          Mobile payments, recharge patterns
                        </div>
                      </div>
                      
                      <div className="bg-brand-bg-card p-2 rounded-lg border border-brand-border text-sm">
                        <div className="font-medium text-brand-secondary">MFS Providers</div>
                        <div className="text-xs mt-1 text-brand-text-secondary">
                          Transaction patterns, wallet usage
                        </div>
                      </div>
                    </div>
                    
                    {/* Data Processing Pipeline - Middle column */}
                    <div className="md:col-span-1"> {/* Ensure it takes full width on medium screens if needed or adjust grid */}
                      <div className="bg-brand-bg-card p-3 rounded-lg border-2 border-indigo-300 shadow-md h-full">
                        <h5 className="text-center font-medium text-indigo-800 mb-3">Data Processing Pipeline</h5>
                        <div className="space-y-3">
                          <div className="bg-indigo-50 p-2 rounded flex items-center border border-indigo-200">
                            <div className="bg-indigo-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-indigo-800 font-medium">1</div>
                            <div className="text-xs">
                              <div className="font-medium text-indigo-800">Data Quality Management</div>
                              <div className="text-indigo-700">Missing data, outlier detection</div>
                            </div>
                          </div>
                          
                          <div className="bg-indigo-50 p-2 rounded flex items-center border border-indigo-200">
                            <div className="bg-indigo-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-indigo-800 font-medium">2</div>
                            <div className="text-xs">
                              <div className="font-medium text-indigo-800">Feature Engineering</div>
                              <div className="text-indigo-700">Binning, WoE transformation</div>
                            </div>
                          </div>
                          
                          <div className="bg-indigo-50 p-2 rounded flex items-center border border-indigo-200">
                            <div className="bg-indigo-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-indigo-800 font-medium">3</div>
                            <div className="text-xs">
                              <div className="font-medium text-indigo-800">Feature Selection</div>
                              <div className="text-indigo-700">IV analysis, multicollinearity check</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3 text-xs text-center text-brand-text-secondary border-t border-brand-border pt-2">
                          <div>Statistical methods:</div>
                          <div className="font-mono bg-gray-100 p-1 rounded mt-1 text-[10px] text-gray-700">
                            WoE = ln(% good / % bad)<br />
                            IV = Σ((% good - % bad) × WoE)
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Kooti Scoring Models - Right column */}
                    <div className="md:col-span-1"> {/* Ensure it takes full width on medium screens if needed or adjust grid */}
                      <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-3 rounded-lg border-2 border-brand-primary shadow-md h-full">
                        <h5 className="text-center font-medium text-brand-primary mb-3">Kooti Scoring Models</h5>
                        
                        <div className="space-y-3">
                          <div className="bg-brand-primary p-2 rounded-lg text-white shadow-sm">
                            <div className="font-bold text-center text-sm">Kooti Pro Score</div>
                            <div className="text-xs mt-1 opacity-90">
                              For thick-file borrowers with traditional credit data
                            </div>
                          </div>
                          
                          <div className="bg-brand-secondary p-2 rounded-lg text-white shadow-sm">
                            <div className="font-bold text-center text-sm">Kooti New Score</div>
                            <div className="text-xs mt-1 opacity-90">
                              For thin-file borrowers with alternative data
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-xs text-center text-brand-text-secondary mt-3 pt-2 border-t border-brand-border">
                          Model-ready data is segmented based on borrower file thickness, with different feature sets for each model type
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-brand-text-secondary italic mt-4 text-center">
                    Note: Actual data source integration will vary based on provider readiness and regulatory approval.
                  </div>
                </div>

                {/* Enhanced Feature Hierarchy - Added more detailed metrics for alternative data */}
                <div className="mb-6 border border-brand-border rounded-lg p-4 bg-brand-bg-light text-brand-text-primary">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-brand-text-primary">Credit-Relevant Feature Hierarchy</h4>
                    
                    {/* Component-specific borrower type selector */}
                    <BorrowerTypeSelector borrowerType={borrowerType} setBorrowerType={setBorrowerType} />
                  </div>
                  
                  {borrowerType === 'thick-file' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Payment History Features */}
                      <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
                        <div className="flex items-center mb-2">
                          <div className="bg-brand-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">1</div>
                          <h5 className="font-medium text-brand-primary">Payment History</h5>
                        </div>
                        <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
                          <li>• Days past due (30/60/90+ days)</li>
                          <li>• Number of delinquencies</li>
                          <li>• Recency of last late payment</li>
                          <li>• Bankruptcy records</li>
                          <li>• On-time payment percentage</li>
                          <li>• Default history</li>
                          <li>• Settlement events</li>
                          <li>• Months since last delinquency</li>
                        </ul>
                      </div>
                      
                      {/* Credit Utilization Features */}
                      <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
                        <div className="flex items-center mb-2">
                          <div className="bg-status-excellent text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">2</div>
                          <h5 className="font-medium text-status-excellent">Credit Utilization</h5>
                        </div>
                        <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
                          <li>• Overall utilization ratio</li>
                          <li>• Revolving account balance</li>
                          <li>• Highest utilization on single account</li>
                          <li>• Balance-to-limit ratio</li>
                          <li>• Utilization trend (increasing/decreasing)</li>
                          <li>• Over-limit instances</li>
                          <li>• Maxed-out accounts</li>
                          <li>• Recent balance changes</li>
                        </ul>
                      </div>
                      
                      {/* Credit History Length */}
                      <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
                        <div className="flex items-center mb-2">
                          <div className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">3</div>
                          <h5 className="font-medium text-purple-700">Credit History Length</h5>
                        </div>
                        <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
                          <li>• Age of oldest account (months)</li>
                          <li>• Average age of all accounts</li>
                          <li>• Recently opened account ages</li>
                          <li>• Time since most recent account</li>
                          <li>• Account closure patterns</li>
                          <li>• Duration of banking relationships</li>
                        </ul>
                      </div>
                      
                      {/* Credit Mix */}
                      <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
                        <div className="flex items-center mb-2">
                          <div className="bg-status-fair text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">4</div>
                          <h5 className="font-medium text-yellow-700">Credit Mix</h5>
                        </div>
                        <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
                          <li>• Number of different account types</li>
                          <li>• Secured vs. unsecured loan ratio</li>
                          <li>• Installment vs. revolving credits</li>
                          <li>• Retail vs. bank financing</li>
                          <li>• MFI vs. traditional bank accounts</li>
                          <li>• Credit card vs. personal loan mix</li>
                        </ul>
                      </div>
                      
                      {/* New Credit */}
                      <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
                        <div className="flex items-center mb-2">
                          <div className="bg-status-poor text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">5</div>
                          <h5 className="font-medium text-red-700">New Credit</h5>
                        </div>
                        <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
                          <li>• Recent inquiries (last 6 months)</li>
                          <li>• Number of newly opened accounts</li>
                          <li>• Time since most recent inquiry</li>
                          <li>• Inquiry intensity (many in short time)</li>
                          <li>• New account types</li>
                          <li>• Credit shopping patterns</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Telecom Payments - Enhanced with more specific metrics */}
                      <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
                        <div className="flex items-center mb-2">
                          <div className="bg-brand-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">1</div>
                          <h5 className="font-medium text-brand-primary">Telecom Payments</h5>
                        </div>
                        <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
                          <li>• Bill payment consistency (% on-time)</li>
                          <li>• Average days late on bill payments</li>
                          <li>• Payment method consistency</li>
                          <li>• Recharge frequency (prepaid)</li>
                          <li>• Average recharge amount</li>
                          <li>• Recharge pattern volatility</li>
                          <li>• Service suspension events</li>
                          <li>• Days between recharges consistency</li>
                          <li>• Duration of telecom relationship</li>
                          <li>• Upgrade/downgrade behavior</li>
                          <li>• Usage-to-payment ratio</li>
                          <li>• Auto-pay enrollment status</li>
                        </ul>
                      </div>
                      
                      {/* Utility Payments - Enhanced with more specific metrics */}
                      <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
                        <div className="flex items-center mb-2">
                          <div className="bg-status-excellent text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">2</div>
                          <h5 className="font-medium text-status-excellent">Utility Payments</h5>
                        </div>
                        <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
                          <li>• Electricity bill payment consistency</li>
                          <li>• Water bill payment consistency</li>
                          <li>• Gas bill payment consistency</li>
                          <li>• Average days past due for utilities</li>
                          <li>• Partial payment frequency</li>
                          <li>• Payment method consistency</li>
                          <li>• Service disconnection events</li>
                          <li>• Reconnection fees incurred</li>
                          <li>• Bill-to-income ratio stability</li>
                          <li>• Seasonal payment variability</li>
                          <li>• Payment timing pattern</li>
                          <li>• Late payment fee history</li>
                          <li>• Duration of utility relationships</li>
                        </ul>
                      </div>
                      
                      {/* Mobile Financial Services - Enhanced with more specific metrics */}
                      <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
                        <div className="flex items-center mb-2">
                          <div className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">3</div>
                          <h5 className="font-medium text-purple-700">MFS Usage</h5>
                        </div>
                        <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
                          <li>• Transaction frequency (daily/weekly)</li>
                          <li>• Average transaction amount</li>
                          <li>• Transaction pattern regularity</li>
                          <li>• Cash-in/cash-out ratio</li>
                          <li>• Withdrawal timing patterns</li>
                          <li>• Average balance maintained</li>
                          <li>• Balance volatility</li>
                          <li>• Bill payment via mobile wallet</li>
                          <li>• Merchant payment frequency</li>
                          <li>• P2P transfer behavior</li>
                          <li>• Income deposit pattern consistency</li>
                          <li>• Account dormancy periods</li>
                          <li>• Failed transaction frequency</li>
                          <li>• Transaction type diversity</li>
                        </ul>
                      </div>
                      
                      {/* Psychometric - Enhanced with more specific metrics */}
                      <div className="bg-brand-bg-card rounded-lg border border-brand-border p-3">
                        <div className="flex items-center mb-2">
                          <div className="bg-status-fair text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">4</div>
                          <h5 className="font-medium text-yellow-700">Psychometric</h5>
                        </div>
                        <ul className="text-xs space-y-1 text-brand-text-secondary pl-2">
                          <li>• Conscientiousness score (1-100)</li>
                          <li>• Risk tolerance assessment (1-100)</li>
                          <li>• Financial planning orientation</li>
                          <li>• Delayed gratification metrics</li>
                          <li>• Financial stress management</li>
                          <li>• Financial decision-making style</li>
                          <li>• Financial self-efficacy score</li>
                          <li>• Financial literacy assessment</li>
                          <li>• Problem-solving approach</li>
                          <li>• Consistency in responses</li>
                          <li>• Social responsibility indicators</li>
                          <li>• Situational judgment test scores</li>
                          <li>• Emotional stability metrics</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Feature Selection Process - Now responds to borrower type selection */}
                <div className="mb-6 border border-brand-border rounded-lg p-4 bg-brand-bg-light text-brand-text-primary"> {/* Outer container styles */}
                  <h4 className="font-medium text-brand-text-primary mb-3 text-center">Feature Selection Process</h4> {/* Title style */}
                  
                  {/* Top row - First three steps */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    {/* Step 1: Raw Data */}
                    <div className="bg-brand-bg-card p-3 rounded-lg border border-brand-border"> {/* Step 1 container */}
                      <div className="text-center font-medium text-brand-text-primary mb-2">Raw Data Variables</div>
                      <div className="space-y-1 text-brand-text-secondary">
                        {borrowerType === 'thick-file' ? (
                          <>
                        <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">loan_amount</div>
                        <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">days_past_due</div>
                        <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">credit_limit</div>
                        <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">outstanding_balance</div>
                            <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">account_open_date</div>
                            <div className="text-center text-xs text-brand-text-secondary mt-1">+ many more credit fields</div>
                          </>
                        ) : (
                          <>
                            <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">telecom_bill_amount</div>
                            <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">recharge_dates</div>
                            <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">utility_payment_dates</div>
                            <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">mfs_transaction_amounts</div>
                            <div className="bg-gray-50 p-1.5 rounded border border-gray-200 text-xs">psych_test_responses</div>
                            <div className="text-center text-xs text-brand-text-secondary mt-1">+ many more alternative data fields</div>
                          </>
                    )}
                  </div>
                </div>
                    
                    {/* Step 2: Feature Transformation */}
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200"> {/* Keeping blue tint for process step */}
                      <div className="text-center font-medium text-blue-800 mb-2">Feature Transformation</div>
                      <div className="space-y-1">
                        {borrowerType === 'thick-file' ? (
                          <>
                            <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                              <div>days_past_due_bins</div>
                              <div className="text-[10px] text-blue-700">Binned: 0, 1-30, 31-60, 61+</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                              <div>utilization_ratio</div>
                              <div className="text-[10px] text-blue-700">outstanding_balance/credit_limit</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                              <div>account_age_months</div>
                              <div className="text-[10px] text-blue-700">Derived from open_date</div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                              <div>telecom_payment_consistency</div>
                              <div className="text-[10px] text-blue-700">% of on-time payments</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                              <div>utility_payment_delay</div>
                              <div className="text-[10px] text-blue-700">Avg days late per bill</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-blue-100 text-xs text-blue-900">
                              <div>mfs_transaction_regularity</div>
                              <div className="text-[10px] text-blue-700">Variance in transaction timing</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Step 3: WoE & IV Analysis */}
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-200"> {/* Keeping purple tint for process step */}
                      <div className="text-center font-medium text-purple-800 mb-2">WoE & IV Analysis</div>
                      <div className="space-y-1">
                        {borrowerType === 'thick-file' ? (
                          <>
                            <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                              <div>days_past_due_bins</div>
                              <div className="text-[10px] text-purple-700">IV: 0.82 (Strong)</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                              <div>utilization_ratio</div>
                              <div className="text-[10px] text-purple-700">IV: 0.57 (Medium)</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                              <div>account_age_months</div>
                              <div className="text-[10px] text-purple-700">IV: 0.35 (Medium)</div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                              <div>telecom_payment_consistency</div>
                              <div className="text-[10px] text-purple-700">IV: 0.63 (Strong)</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                              <div>utility_payment_delay</div>
                              <div className="text-[10px] text-purple-700">IV: 0.48 (Medium)</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-purple-100 text-xs text-purple-900">
                              <div>mfs_transaction_regularity</div>
                              <div className="text-[10px] text-purple-700">IV: 0.41 (Medium)</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow down */}
                  <div className="flex justify-center my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </div>
                  
                  {/* Bottom row - Last two steps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Step 4: Statistical Checks */}
                    <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                      <div className="text-center font-medium text-red-800 mb-2">Statistical Checks</div>
                      <div className="space-y-1">
                        {borrowerType === 'thick-file' ? (
                          <>
                            <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                              <div>Correlation Analysis</div>
                              <div className="text-[10px] text-red-700">High corr: utilization_ratio & balance_to_income</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                              <div>VIF Check</div>
                              <div className="text-[10px] text-red-700">VIF &lt; 10 requirement</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                              <div>Stepwise Selection</div>
                              <div className="text-[10px] text-red-700">p-value &lt; 0.05 for inclusion</div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                              <div>Correlation Analysis</div>
                              <div className="text-[10px] text-red-700">High corr: utility_delay & disconnection_events</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                              <div>Stability Analysis</div>
                              <div className="text-[10px] text-red-700">PSI &lt; 0.25 for stability</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-red-100 text-xs text-red-900">
                              <div>Signal Analysis</div>
                              <div className="text-[10px] text-red-700">Minimum support of 10% required</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Step 5: Final Feature Set */}
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <div className="text-center font-medium text-green-800 mb-2">Final Feature Set</div>
                      <div className="space-y-1">
                        {borrowerType === 'thick-file' ? (
                          <>
                            <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                              <div className="font-medium text-green-700">Payment History</div>
                              <div className="text-[10px]">• days_past_due_bins, delinquency_count, etc.</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                              <div className="font-medium text-green-700">Credit Utilization</div>
                              <div className="text-[10px]">• utilization_ratio, balance_trend, etc.</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                              <div className="font-medium text-green-700">Credit History Length</div>
                              <div className="text-[10px]">• account_age_months, oldest_account_age, etc.</div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                              <div className="font-medium text-green-700">Telecom Payments</div>
                              <div className="text-[10px]">• payment_consistency, recharge_pattern, etc.</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                              <div className="font-medium text-green-700">Utility Payments</div>
                              <div className="text-[10px]">• payment_delay, disconnection_count, etc.</div>
                            </div>
                            <div className="bg-white p-1.5 rounded border border-green-100 text-xs text-green-900">
                              <div className="font-medium text-green-700">MFS Usage</div>
                              <div className="text-[10px]">• transaction_regularity, balance_stability, etc.</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 italic text-center mt-3">
                    {borrowerType === 'thick-file' 
                      ? "Note: Traditional credit features undergo rigorous statistical validation before inclusion in the final model."
                      : "Note: Alternative data features are carefully selected to maximize predictive power for thin-file borrowers."}
                  </div>
                </div>

                {/* Example Feature Transformation Table */}
                <div className="mb-6 border rounded-lg p-4 bg-gray-50">
                  <h4 className="font-medium mb-3 text-center">Key Feature Transformation Example</h4>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 border">Raw Data Input</th>
                          <th className="p-2 border">Feature Binning</th>
                          <th className="p-2 border">WoE Value</th>
                          <th className="p-2 border">Information Value (IV)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border">
                            <div className="font-medium">Payment History</div>
                            <div className="text-gray-500">Days past due</div>
                          </td>
                          <td className="p-2 border">
                            <div>0 days: <span className="text-emerald-600">Excellent</span></div>
                            <div>1-30 days: <span className="text-yellow-600">Fair</span></div>
                            <div>31+ days: <span className="text-red-600">Poor</span></div>
                          </td>
                          <td className="p-2 border">
                            <div>0 days: +1.2</div>
                            <div>1-30 days: -0.3</div>
                            <div>31+ days: -2.1</div>
                          </td>
                          <td className="p-2 border text-center">
                            <div className="font-medium">0.82</div>
                            <div className="bg-green-100 text-green-800 rounded px-1 text-center">Strong Predictor</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 border">
                            <div className="font-medium">Credit Utilization</div>
                            <div className="text-gray-500">Balance / Limit</div>
                          </td>
                          <td className="p-2 border">
                            <div>0-30%: <span className="text-emerald-600">Low</span></div>
                            <div>31-70%: <span className="text-yellow-600">Medium</span></div>
                            <div>71%+: <span className="text-red-600">High</span></div>
                          </td>
                          <td className="p-2 border">
                            <div>0-30%: +0.8</div>
                            <div>31-70%: -0.1</div>
                            <div>71%+: -1.4</div>
                          </td>
                          <td className="p-2 border text-center">
                            <div className="font-medium">0.57</div>
                            <div className="bg-green-100 text-green-800 rounded px-1 text-center">Medium Predictor</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-2 italic text-center">
                    Note: Binning thresholds and WoE/IV values will be calibrated with actual Bangladesh market data.
                  </div>
                </div>
                
                {/* Credit Data Inputs (existing) */}
                <div>
                <h4 className="font-medium mb-2">Your Credit Data Inputs:</h4>
                
                <div className="mb-4">
                  {borrowerType === 'thick-file' ? (
                    <div className="space-y-3">
                      {thickFileInputs.map((input, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium">{input.label}</label>
                            <span className="text-sm font-medium">{input.value}</span>
                          </div>
                            <div className="relative">
                          <input
                            type="range"
                            min={input.min}
                            max={input.max}
                            step={input.step}
                            value={input.value}
                            onChange={(e) => handleInputChange(input.param, Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer z-10 relative opacity-70"
                              />
                              {/* Bands for the input range */}
                              <div className="absolute top-0 w-full h-2 flex rounded-lg overflow-hidden">
                                <div className="bg-red-400 h-full" style={{width: '20%'}}></div>
                                <div className="bg-yellow-400 h-full" style={{width: '20%'}}></div>
                                <div className="bg-teal-400 h-full" style={{width: '20%'}}></div>
                                <div className="bg-green-400 h-full" style={{width: '20%'}}></div>
                                <div className="bg-emerald-400 h-full" style={{width: '20%'}}></div>
                              </div>
                            </div>
                            {/* Band category indicator */}
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>Poor</span>
                              <span>Fair</span>
                              <span>Good</span>
                              <span>V.Good</span>
                              <span>Excellent</span>
                            </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {thinFileInputs.map((input, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium">{input.label}</label>
                            <span className="text-sm font-medium">{input.value}</span>
                          </div>
                            <div className="relative">
                          <input
                            type="range"
                            min={input.min}
                            max={input.max}
                            step={input.step}
                            value={input.value}
                            onChange={(e) => handleInputChange(input.param, Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer z-10 relative opacity-70"
                              />
                              {/* Bands for the input range */}
                              <div className="absolute top-0 w-full h-2 flex rounded-lg overflow-hidden">
                                <div className="bg-red-400 h-full" style={{width: '20%'}}></div>
                                <div className="bg-yellow-400 h-full" style={{width: '20%'}}></div>
                                <div className="bg-teal-400 h-full" style={{width: '20%'}}></div>
                                <div className="bg-green-400 h-full" style={{width: '20%'}}></div>
                                <div className="bg-emerald-400 h-full" style={{width: '20%'}}></div>
                              </div>
                            </div>
                            {/* Band category indicator */}
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>Poor</span>
                              <span>Fair</span>
                              <span>Good</span>
                              <span>V.Good</span>
                              <span>Excellent</span>
                            </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-3">Model Development & Validation</h3>
                
                {/* Model recalibration controls with added details */}
                <div className="flex justify-between items-center mb-4 bg-blue-50 p-3 rounded-md">
                  <div>
                    <h4 className="font-medium">Model Status</h4>
                    <p className="text-sm text-gray-600">Last updated: {modelLastUpdated}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      <span className="font-medium">Model type:</span> Logistic Regression
                      <span className="ml-3 font-medium">Target:</span> Probability of Default (PD)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      className={`px-3 py-1 rounded text-sm ${isCalibrating ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`}
                      onClick={() => setIsCalibrating(!isCalibrating)}
                    >
                      {isCalibrating ? 'Stop Recalibration' : 'Simulate Recalibration'}
                    </button>
                    {isCalibrating && (
                      <div className="text-xs bg-yellow-100 px-2 py-1 rounded">
                        Recalibrating... Cycle {calibrationCycle + 1}/5
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Recalibration process visualization */}
                <div className="mb-6 bg-white border rounded-md p-4">
                  <h4 className="font-medium mb-3">Continuous Model Recalibration Process</h4>
                  
                  {/* Center-focused process layout */}
                  <div className="relative mb-4 overflow-x-auto">
                    <div className="grid grid-cols-3 gap-4 mb-16">
                      {/* Left: Data Collection */}
                      <div className={`relative p-3 rounded-lg border-2 text-center
                                     transition-all duration-300 
                                     ${isCalibrating && calibrationCycle === 0 ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-gray-200'}`}>
                        <Database className={`mx-auto ${isCalibrating && calibrationCycle === 0 ? 'text-blue-500' : 'text-gray-400'}`} size={20} />
                        <h5 className={`text-sm font-medium mt-1 ${isCalibrating && calibrationCycle === 0 ? 'text-blue-700' : 'text-gray-600'}`}>
                          Data Collection
                        </h5>
                        {isCalibrating && calibrationCycle === 0 && (
                          <div className="mt-1 text-xs text-blue-700 bg-blue-100 rounded px-1 py-0.5">
                            Processing new data...
                          </div>
                        )}
                        <div className="text-xs text-gray-500 mt-1">
                          Credit bureau data, bank records
                        </div>
                      </div>
                      
                      {/* Center: Model Training (larger) */}
                      <div className={`relative p-4 rounded-lg border-2 text-center row-span-2
                                     transition-all duration-300 
                                     ${isCalibrating && calibrationCycle === 1 ? 'border-green-500 bg-green-50 shadow-lg' : 'border-gray-200'}`}>
                        <Brain className={`mx-auto ${isCalibrating && calibrationCycle === 1 ? 'text-green-500' : 'text-gray-400'}`} size={32} />
                        <h5 className={`text-md font-medium mt-1 ${isCalibrating && calibrationCycle === 1 ? 'text-green-700' : 'text-gray-600'}`}>
                          Model Training
                        </h5>
                        {isCalibrating && calibrationCycle === 1 && (
                          <div className="mt-1 text-xs text-green-700 bg-green-100 rounded px-1 py-0.5">
                            Learning coefficients...
                          </div>
                        )}
                        <div className="text-sm text-gray-600 mt-2 flex flex-col items-center">
                          <div className="text-center mb-1">
                            <strong>Model:</strong> Logistic Regression
                          </div>
                          <div className="text-center">
                            <strong>Target:</strong> Probability of Default
                          </div>
                          
                          <div className="mt-3 border-t border-gray-200 pt-2 w-full">
                            <div className="text-xs text-left">Key Coefficients:</div>
                            <div className="grid grid-cols-2 gap-x-1 gap-y-1 mt-1 text-xs text-left">
                              <div>Payment History: <span className="font-medium">High</span></div>
                              <div>Credit Utilization: <span className="font-medium">Medium</span></div>
                              <div>Credit Age: <span className="font-medium">Medium</span></div>
                              <div>Inquiries: <span className="font-medium">Low</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right: Validation */}
                      <div className={`relative p-3 rounded-lg border-2 text-center
                                     transition-all duration-300 
                                     ${isCalibrating && calibrationCycle === 2 ? 'border-purple-500 bg-purple-50 shadow-lg' : 'border-gray-200'}`}>
                        <Eye className={`mx-auto ${isCalibrating && calibrationCycle === 2 ? 'text-purple-500' : 'text-gray-400'}`} size={20} />
                        <h5 className={`text-sm font-medium mt-1 ${isCalibrating && calibrationCycle === 2 ? 'text-purple-700' : 'text-gray-600'}`}>
                          Validation
                        </h5>
                        {isCalibrating && calibrationCycle === 2 && (
                          <div className="mt-1 text-xs text-purple-700 bg-purple-100 rounded px-1 py-0.5">
                            Testing accuracy...
                          </div>
                        )}
                        <div className="text-xs text-gray-500 mt-1">
                          Gini, KS, AUC-ROC metrics
                        </div>
                      </div>
                      
                      {/* Bottom Left: Deployment */}
                      <div className={`relative p-3 rounded-lg border-2 text-center
                                     transition-all duration-300 
                                     ${isCalibrating && calibrationCycle === 3 ? 'border-amber-500 bg-amber-50 shadow-lg' : 'border-gray-200'}`}>
                        <Layers className={`mx-auto ${isCalibrating && calibrationCycle === 3 ? 'text-amber-500' : 'text-gray-400'}`} size={20} />
                        <h5 className={`text-sm font-medium mt-1 ${isCalibrating && calibrationCycle === 3 ? 'text-amber-700' : 'text-gray-600'}`}>
                          Deployment
                        </h5>
                        {isCalibrating && calibrationCycle === 3 && (
                          <div className="mt-1 text-xs text-amber-700 bg-amber-100 rounded px-1 py-0.5">
                            Releasing model...
                          </div>
                        )}
                        <div className="text-xs text-gray-500 mt-1">
                          Implementing score rules
                        </div>
                      </div>
                      
                      {/* Bottom Right: Monitoring */}
                      <div className={`relative p-3 rounded-lg border-2 text-center
                                     transition-all duration-300 
                                     ${isCalibrating && calibrationCycle === 4 ? 'border-red-500 bg-red-50 shadow-lg' : 'border-gray-200'}`}>
                        <LineChart className={`mx-auto ${isCalibrating && calibrationCycle === 4 ? 'text-red-500' : 'text-gray-400'}`} size={20} />
                        <h5 className={`text-sm font-medium mt-1 ${isCalibrating && calibrationCycle === 4 ? 'text-red-700' : 'text-gray-600'}`}>
                          Monitoring
                        </h5>
                        {isCalibrating && calibrationCycle === 4 && (
                          <div className="mt-1 text-xs text-red-700 bg-red-100 rounded px-1 py-0.5">
                            Analyzing performance...
                          </div>
                        )}
                        <div className="text-xs text-gray-500 mt-1">
                          Tracking model metrics
                        </div>
                      </div>
                    </div>
                    
                    {/* Connecting arrows with SVG */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                      {/* Data Collection to Model Training */}
                      <path 
                        d="M 30% 15% L 45% 15%" 
                        fill="none" 
                        stroke={isCalibrating && (calibrationCycle === 0 || calibrationCycle === 1) ? "#22c55e" : "#e5e7eb"} 
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      
                      {/* Model Training to Validation */}
                      <path 
                        d="M 70% 15% L 85% 15%" 
                        fill="none" 
                        stroke={isCalibrating && (calibrationCycle === 1 || calibrationCycle === 2) ? "#a855f7" : "#e5e7eb"} 
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      
                      {/* Validation to Deployment */}
                      <path 
                        d="M 85% 20% L 85% 50% L 30% 50%" 
                        fill="none" 
                        stroke={isCalibrating && (calibrationCycle === 2 || calibrationCycle === 3) ? "#f59e0b" : "#e5e7eb"} 
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      
                      {/* Deployment to Monitoring */}
                      <path 
                        d="M 30% 60% L 85% 60%" 
                        fill="none" 
                        stroke={isCalibrating && (calibrationCycle === 3 || calibrationCycle === 4) ? "#ef4444" : "#e5e7eb"} 
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      
                      {/* Monitoring back to Data Collection */}
                      <path 
                        d="M 85% 70% L 15% 70% L 15% 15%" 
                        fill="none" 
                        stroke={isCalibrating && (calibrationCycle === 4 || calibrationCycle === 0) ? "#3b82f6" : "#e5e7eb"} 
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      
                      {/* Animated dot */}
                      {isCalibrating && (
                        <circle 
                          r="5"
                          fill={calibrationCycle === 0 ? "#3b82f6" : 
                                calibrationCycle === 1 ? "#22c55e" : 
                                calibrationCycle === 2 ? "#a855f7" : 
                                calibrationCycle === 3 ? "#f59e0b" : "#ef4444"}
                          cx={calibrationCycle === 0 ? "15%" : 
                              calibrationCycle === 1 ? "50%" : 
                              calibrationCycle === 2 ? "85%" : 
                              calibrationCycle === 3 ? "30%" : "85%"}
                          cy={calibrationCycle === 0 ? "15%" : 
                              calibrationCycle === 1 ? "15%" : 
                              calibrationCycle === 2 ? "15%" : 
                              calibrationCycle === 3 ? "60%" : "60%"}
                          className="animate-pulse"
                        />
                      )}
                      
                      {/* Arrow definitions */}
                      <defs>
                        <marker
                          id="arrowhead"
                          markerWidth="10"
                          markerHeight="7"
                          refX="0"
                          refY="3.5"
                          orient="auto"
                        >
                          <polygon points="0 0, 10 3.5, 0 7" fill="#e5e7eb" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                  
                  {/* Logistic Regression Model Formula - Below the training diagram with improved styling */}
                  <div className={`border-2 rounded-lg mb-4 overflow-hidden transition-all duration-300
                                  ${isCalibrating && calibrationCycle === 1 ? 'border-green-500 shadow-lg' : 'border-gray-200'}`}>
                    <div className={`px-4 py-2 border-b ${isCalibrating && calibrationCycle === 1 ? 'bg-green-50 text-green-800' : 'bg-gray-50 text-gray-700'}`}>
                      <h5 className="font-medium text-center">Logistic Regression Model Formula</h5>
                    </div>
                    <div className={`p-4 ${isCalibrating && calibrationCycle === 1 ? 'bg-green-50' : 'bg-white'}`}>
                      <div className="flex justify-center items-center space-x-1 font-medium text-gray-700">
                        <span>P(Default|X) =</span>
                        <div className="border-b border-gray-400 text-center mx-1 px-3">
                          <div>1</div>
                          <div>1 + e<sup>-Z</sup></div>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-sm text-gray-700">
                        <div className="mb-1">Where Z is a linear combination of input features:</div>
                        <div className="pl-4 font-mono">
                          Z = β<sub>0</sub> + 
                          <span className={`font-medium text-blue-600 ${isCalibrating && calibrationCycle === 1 ? 'animate-pulse' : ''}`}>
                            β<sub>1</sub> × Payment_History
                          </span> + 
                          <span className={`font-medium text-green-600 ${isCalibrating && calibrationCycle === 1 ? 'animate-pulse' : ''}`}>
                            β<sub>2</sub> × Credit_Utilization
                          </span> + 
                          <span className={`font-medium text-purple-600 ${isCalibrating && calibrationCycle === 1 ? 'animate-pulse' : ''}`}>
                            β<sub>3</sub> × Credit_History
                          </span> + ...
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-3 gap-2 text-xs bg-gray-50 p-2 rounded-md">
                        <div className="flex items-center">
                          <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-1">1</div>
                          <div>Predict probability of default</div>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center mr-1">2</div>
                          <div>Convert to points (PDO scaling)</div>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center mr-1">3</div>
                          <div>Map to 300-850 score range</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description of current phase */}
                  <div className="mb-4 p-2 rounded bg-gray-50 text-sm">
                    <h5 className="font-medium mb-1">Current Phase: 
                      <span className="ml-2 font-bold">
                        {calibrationCycle === 0 ? 'Data Collection' : 
                         calibrationCycle === 1 ? 'Model Training' : 
                         calibrationCycle === 2 ? 'Validation' : 
                         calibrationCycle === 3 ? 'Deployment' : 'Monitoring'}
                      </span>
                    </h5>
                    <p className="text-xs text-gray-600">
                      {calibrationCycle === 0 ? 'Gathering new credit data from financial institutions, telecom providers, and alternative sources.' : 
                       calibrationCycle === 1 ? 'Training logistic regression model to predict Probability of Default (PD). Optimizing coefficients through maximum likelihood estimation.' : 
                       calibrationCycle === 2 ? 'Testing model discrimination power with Gini, KS statistics and AUC-ROC on holdout data.' : 
                       calibrationCycle === 3 ? 'Deploying updated scorecard to production systems for real-time credit scoring.' : 
                       'Continuously monitoring performance and credit population shifts to ensure reliability.'}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Feature Weights Visualization */}
                  <div className="bg-white p-3 rounded-md border">
                    <h4 className="font-medium mb-3">Feature Weight Distribution</h4>
                    <p className="text-xs text-gray-500 mb-2">
                      {isCalibrating ? 'Weights are being recalibrated based on new data' : 'Weights represent relative importance in current model'}
                    </p>
                    <div className="space-y-3">
                      {getDynamicWeights().map((feature, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">{feature.name}</span>
                            <div className="flex items-center">
                              {isCalibrating && (
                                <span className={`text-xs mr-1 ${
                                  feature.weight > featureWeights[borrowerType][i].weight ? 'text-green-500' : 
                                  feature.weight < featureWeights[borrowerType][i].weight ? 'text-red-500' : ''
                                }`}>
                                  {feature.weight > featureWeights[borrowerType][i].weight ? '▲' : 
                                   feature.weight < featureWeights[borrowerType][i].weight ? '▼' : ''}
                                </span>
                              )}
                              <span className="text-sm font-medium">{feature.weight}%</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`${feature.color} h-2 rounded-full transition-all duration-500`}
                              style={{ width: `${feature.weight}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Add arrow connecting to point calculation */}
                    <div className="flex justify-center mt-4 text-blue-500 md:hidden">
                      <div className="text-center">
                        <ChevronRight className="mx-auto transform rotate-90" size={20} />
                        <span className="text-xs">Feeds into calculation</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Point Calculation Flow - with Kooti branding and integrated scorecard */}
                  <div className="bg-gray-50 p-3 rounded-md relative">
                    {/* Add arrow connecting from weights on larger screens */}
                    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden md:block text-blue-500">
                      <ChevronRight size={20} />
                    </div>
                    
                    <h4 className="font-medium mb-2">
                      Kooti {borrowerType === 'thick-file' ? 'Pro' : 'New'} Score Calculation
                    </h4>
                    <p className="text-xs text-gray-500 mb-2">Sample credit score calculation based on input data</p>
                    
                    {/* Sample input reference with bands */}
                    <div className="mb-3 p-2 bg-blue-50 rounded-md">
                      <div className="font-medium text-sm">Sample Input Data:</div>
                      <div className="space-y-3 mt-2">
                        {borrowerType === 'thick-file' ? (
                          <>
                    <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>Loan Accounts: <span className="font-medium">{inputs.loanHistory}</span></span>
                                <span className={`text-xs px-2 py-0.5 rounded ${inputs.loanHistory >= 3 ? 'bg-green-100 text-green-800' : inputs.loanHistory > 0 ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                  {inputs.loanHistory >= 3 ? 'Excellent' : inputs.loanHistory > 0 ? 'Good' : 'Limited'}
                                </span>
                              </div>
                    </div>
                    <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>Credit Age: <span className="font-medium">{inputs.creditAge} months</span></span>
                                <span className={`text-xs px-2 py-0.5 rounded ${inputs.creditAge > 24 ? 'bg-green-100 text-green-800' : inputs.creditAge > 12 ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                  {inputs.creditAge > 24 ? 'Well-established' : inputs.creditAge > 12 ? 'Moderate' : 'Limited'}
                                </span>
                              </div>
                    </div>
                    <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>Payment History: <span className="font-medium">{inputs.paymentHistory}%</span></span>
                                <span className={`text-xs px-2 py-0.5 rounded ${inputs.paymentHistory > 95 ? 'bg-green-100 text-green-800' : inputs.paymentHistory > 85 ? 'bg-blue-100 text-blue-800' : inputs.paymentHistory > 75 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                  {inputs.paymentHistory > 95 ? 'Excellent' : inputs.paymentHistory > 85 ? 'Good' : inputs.paymentHistory > 75 ? 'Fair' : 'Poor'}
                                </span>
                    </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>Credit Utilization: <span className="font-medium">{inputs.creditUtilization}%</span></span>
                                <span className={`text-xs px-2 py-0.5 rounded ${inputs.creditUtilization < 10 ? 'bg-green-100 text-green-800' : inputs.creditUtilization < 30 ? 'bg-blue-100 text-blue-800' : inputs.creditUtilization < 50 ? 'bg-yellow-100 text-yellow-800' : inputs.creditUtilization < 70 ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'}`}>
                                  {inputs.creditUtilization < 10 ? 'Very Low' : inputs.creditUtilization < 30 ? 'Low' : inputs.creditUtilization < 50 ? 'Moderate' : inputs.creditUtilization < 70 ? 'High' : 'Very High'}
                              </span>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>Credit Inquiries: <span className="font-medium">{inputs.inquiries}</span></span>
                                <span className={`text-xs px-2 py-0.5 rounded ${inputs.inquiries === 0 ? 'bg-green-100 text-green-800' : inputs.inquiries < 3 ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                                  {inputs.inquiries === 0 ? 'None' : inputs.inquiries < 3 ? 'Few' : 'Many'}
                                </span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>Telecom Payments: <span className="font-medium">{inputs.telecomPayments}%</span></span>
                                <span className={`text-xs px-2 py-0.5 rounded ${inputs.telecomPayments > 95 ? 'bg-green-100 text-green-800' : inputs.telecomPayments > 85 ? 'bg-blue-100 text-blue-800' : inputs.telecomPayments > 75 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                  {inputs.telecomPayments > 95 ? 'Excellent' : inputs.telecomPayments > 85 ? 'Good' : inputs.telecomPayments > 75 ? 'Fair' : 'Poor'}
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>MFS Usage: <span className="font-medium">{inputs.mobileFinancial}</span></span>
                                <span className={`text-xs px-2 py-0.5 rounded ${inputs.mobileFinancial > 90 ? 'bg-green-100 text-green-800' : inputs.mobileFinancial > 80 ? 'bg-blue-100 text-blue-800' : inputs.mobileFinancial > 70 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                  {inputs.mobileFinancial > 90 ? 'Very Active' : inputs.mobileFinancial > 80 ? 'Active' : inputs.mobileFinancial > 70 ? 'Moderate' : 'Limited'}
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>Utility Bills: <span className="font-medium">{inputs.utilityBills}%</span></span>
                                <span className={`text-xs px-2 py-0.5 rounded ${inputs.utilityBills > 95 ? 'bg-green-100 text-green-800' : inputs.utilityBills > 85 ? 'bg-blue-100 text-blue-800' : inputs.utilityBills > 75 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                  {inputs.utilityBills > 95 ? 'Excellent' : inputs.utilityBills > 85 ? 'Good' : inputs.utilityBills > 75 ? 'Fair' : 'Poor'}
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>Formal Loans: <span className="font-medium">{inputs.loanHistory}</span></span>
                                <span className={`text-xs px-2 py-0.5 rounded ${inputs.loanHistory > 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                  {inputs.loanHistory > 0 ? 'Has History' : 'No History'}
                                </span>
                              </div>
                            </div>
                          </>
                        )}
                  </div>
                </div>
                
                    {/* Simplified Scorecard Section */}
                    <div className="mb-3 p-2 bg-white rounded-md border border-blue-200">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium text-sm">Scorecard Points Allocation</h5>
                        <div className="text-xs text-gray-500">Points to Double Odds (PDO): 40</div>
                      </div>
                      
                      {/* Simple points visualization */}
                      <div className="space-y-2">
                        {borrowerType === 'thick-file' ? (
                          <>
                            <div className="flex justify-between items-center p-2 rounded bg-blue-50">
                              <span className="text-sm font-medium text-blue-700">Payment History</span>
                              <span className={`px-2 py-1 rounded text-sm font-medium ${inputs.paymentHistory > 95 ? 'bg-green-100 text-green-800' : inputs.paymentHistory > 85 ? 'bg-blue-100 text-blue-800' : inputs.paymentHistory > 75 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                {inputs.paymentHistory > 95 ? '+100' : inputs.paymentHistory > 85 ? '+70' : inputs.paymentHistory > 75 ? '+30' : '-20'}
                              </span>
                    </div>
                            <div className="flex justify-between items-center p-2 rounded bg-green-50">
                              <span className="text-sm font-medium text-green-700">Credit Utilization</span>
                              <span className={`px-2 py-1 rounded text-sm font-medium ${inputs.creditUtilization < 10 ? 'bg-green-100 text-green-800' : inputs.creditUtilization < 30 ? 'bg-blue-100 text-blue-800' : inputs.creditUtilization < 50 ? 'bg-yellow-100 text-yellow-800' : inputs.creditUtilization < 70 ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'}`}>
                                {inputs.creditUtilization < 10 ? '+80' : inputs.creditUtilization < 30 ? '+60' : inputs.creditUtilization < 50 ? '+30' : inputs.creditUtilization < 70 ? '+0' : '-30'}
                              </span>
                  </div>
                            <div className="flex justify-between items-center p-2 rounded bg-purple-50">
                              <span className="text-sm font-medium text-purple-700">Credit History</span>
                              <span className={`px-2 py-1 rounded text-sm font-medium ${inputs.creditAge > 24 ? 'bg-green-100 text-green-800' : inputs.creditAge > 12 ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {inputs.creditAge > 24 ? '+70' : inputs.creditAge > 12 ? '+40' : '+10'}
                              </span>
                </div>
                            <div className="flex justify-between items-center p-2 rounded bg-yellow-50">
                              <span className="text-sm font-medium text-yellow-700">Loan Accounts</span>
                              <span className={`px-2 py-1 rounded text-sm font-medium ${inputs.loanHistory >= 3 ? 'bg-green-100 text-green-800' : inputs.loanHistory > 0 ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {inputs.loanHistory >= 3 ? '+50' : inputs.loanHistory > 0 ? '+30' : '+0'}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-2 rounded bg-red-50">
                              <span className="text-sm font-medium text-red-700">Credit Inquiries</span>
                              <span className={`px-2 py-1 rounded text-sm font-medium ${inputs.inquiries === 0 ? 'bg-green-100 text-green-800' : inputs.inquiries < 3 ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                                {inputs.inquiries === 0 ? '+50' : inputs.inquiries < 3 ? '+20' : '-10'}
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-between items-center p-2 rounded bg-blue-50">
                              <span className="text-sm font-medium text-blue-700">Telecom Payments</span>
                              <span className={`px-2 py-1 rounded text-sm font-medium ${inputs.telecomPayments > 95 ? 'bg-green-100 text-green-800' : inputs.telecomPayments > 85 ? 'bg-blue-100 text-blue-800' : inputs.telecomPayments > 75 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                {inputs.telecomPayments > 95 ? '+100' : inputs.telecomPayments > 85 ? '+70' : inputs.telecomPayments > 75 ? '+30' : '-10'}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-2 rounded bg-green-50">
                              <span className="text-sm font-medium text-green-700">Utility Payments</span>
                              <span className={`px-2 py-1 rounded text-sm font-medium ${inputs.utilityBills > 95 ? 'bg-green-100 text-green-800' : inputs.utilityBills > 85 ? 'bg-blue-100 text-blue-800' : inputs.utilityBills > 75 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                {inputs.utilityBills > 95 ? '+100' : inputs.utilityBills > 85 ? '+70' : inputs.utilityBills > 75 ? '+30' : '-10'}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-2 rounded bg-purple-50">
                              <span className="text-sm font-medium text-purple-700">Mobile Financial</span>
                              <span className={`px-2 py-1 rounded text-sm font-medium ${inputs.mobileFinancial > 90 ? 'bg-green-100 text-green-800' : inputs.mobileFinancial > 80 ? 'bg-blue-100 text-blue-800' : inputs.mobileFinancial > 70 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                {inputs.mobileFinancial > 90 ? '+100' : inputs.mobileFinancial > 80 ? '+70' : inputs.mobileFinancial > 70 ? '+40' : '+10'}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-2 rounded bg-yellow-50">
                              <span className="text-sm font-medium text-yellow-700">Formal Loans</span>
                              <span className={`px-2 py-1 rounded text-sm font-medium ${inputs.loanHistory > 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {inputs.loanHistory > 0 ? '+50' : '+0'}
                              </span>
                            </div>
                          </>
                        )}
                        
                        {/* Base score */}
                        <div className="flex justify-between items-center p-2 rounded bg-gray-100">
                          <span className="text-sm font-medium">Base Score</span>
                          <span className="px-2 py-1 rounded bg-gray-200 text-sm font-medium">500</span>
                        </div>
                        
                        {/* Final score */}
                        <div className="flex justify-between items-center p-2 rounded bg-blue-100">
                          <span className="text-sm font-medium">Final Score</span>
                          <span className="px-2 py-1 rounded bg-blue-200 text-sm font-medium">{isCalibrating ? calibratedScore : creditScore}</span>
                        </div>
                      </div>
                      
                      <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded">
                        <p>Scorecard Formula: Points = Offset + (Factor × Weight × Attribute Value)</p>
                        <p>• Factor = PDO/ln(2) • Offset calibrated to yield 600 at 1:1 odds</p>
                        <p className="italic mt-1">The logistic regression model learns weights for each feature that are then transformed into points through the scorecard process.</p>
                      </div>
                    </div>
                    
                    {/* Dynamic calculation flow */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="font-medium">Base Score</span>
                        <span className="text-sm font-medium">500</span>
                      </div>
                      
                      {scoreExplanation.map((item, i) => {
                        const points = parseInt(item.match(/[+-]?\d+/)?.[0] || '0');
                        // Link to feature weight if possible
                        const featureName = item.split('(+')[0].split('(-')[0].trim();
                        const matchingFeature = getDynamicWeights().find(f => 
                          featureName.toLowerCase().includes(f.name.toLowerCase()));
                        
                        // Calculate adjusted points based on weight changes
                        const adjustedPoints = matchingFeature ? 
                          Math.round(points * (matchingFeature.weight / featureWeights[borrowerType][featureWeights[borrowerType].findIndex(f => f.name === matchingFeature.name)].weight)) : 
                          points;
                        
                        const pointDifference = adjustedPoints - points;
                        
                        return (
                          <div key={i} className={`flex justify-between items-center p-2 rounded transition-all duration-300 ${
                            isCalibrating && calibrationCycle === 1 ? 'bg-green-50' : 'bg-white'
                          }`}>
                            <div className="flex items-center space-x-2">
                              <span>{featureName}</span>
                              {matchingFeature && (
                                <span className={`text-xs px-1 rounded ${matchingFeature.color.replace('bg-', 'bg-opacity-30 text-')}`}>
                                  {matchingFeature.weight}%
                                </span>
                              )}
                            </div>
                            <div className="flex items-center">
                              <span className={`text-sm font-medium transition-all duration-300 ${
                                adjustedPoints >= 0 ? 'text-green-600' : 'text-red-600'
                              } ${
                                isCalibrating && calibrationCycle === 1 ? 'scale-110' : ''
                              }`}>
                                {adjustedPoints > 0 ? `+${adjustedPoints}` : adjustedPoints}
                              </span>
                              
                              {isCalibrating && calibrationCycle === 1 && pointDifference !== 0 && (
                                <span className={`ml-1 text-xs ${pointDifference > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {pointDifference > 0 ? `(+${pointDifference})` : `(${pointDifference})`}
                                </span>
                              )}
                            </div>
                          </div>
                        )
                      })}
                      
                      <div className="flex justify-between items-center p-2 bg-blue-50 rounded font-medium border-t-2 border-blue-200">
                        <span>Kooti {borrowerType === 'thick-file' ? 'Pro' : 'New'} Score</span>
                        <div className="flex items-center">
                          <span className={`text-lg ${
                            isCalibrating && calibrationCycle === 1 ? 'text-blue-600 transition-all duration-300' : ''
                          }`}>
                            {isCalibrating ? calibratedScore : creditScore}
                          </span>
                          
                          {isCalibrating && calibrationCycle === 1 && calibratedScore !== creditScore && (
                            <span className={`ml-1 text-xs ${calibratedScore > creditScore ? 'text-green-600' : 'text-red-600'}`}>
                              {calibratedScore > creditScore ? `(+${calibratedScore - creditScore})` : `(${calibratedScore - creditScore})`}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Bar-based score range visualization */}
                    <div className="mt-4 mb-2">
                      <h5 className="text-xs font-medium mb-1">Score Range: 300-850</h5>
                      
                      {/* Bar Range Visualization */}
                      <div className="relative h-16 w-full">
                        {/* Background bar */}
                        <div className="absolute top-0 w-full h-8 flex rounded-md overflow-hidden">
                          <div className="bg-red-500 h-full" style={{width: '20%'}}></div>
                          <div className="bg-yellow-500 h-full" style={{width: '20%'}}></div>
                          <div className="bg-teal-500 h-full" style={{width: '20%'}}></div>
                          <div className="bg-green-500 h-full" style={{width: '20%'}}></div>
                          <div className="bg-emerald-500 h-full" style={{width: '20%'}}></div>
                        </div>
                        
                        {/* Score markers */}
                        <div className="absolute top-8 w-full flex justify-between text-xs text-gray-600">
                          <span>300</span>
                          <span>410</span>
                          <span>520</span>
                          <span>630</span>
                          <span>740</span>
                          <span>850</span>
                        </div>
                        
                        {/* Category labels */}
                        <div className="absolute top-0 w-full flex text-xs text-white font-medium h-8">
                          <div className="w-1/5 flex items-center justify-center">Poor</div>
                          <div className="w-1/5 flex items-center justify-center">Fair</div>
                          <div className="w-1/5 flex items-center justify-center">Good</div>
                          <div className="w-1/5 flex items-center justify-center">Very Good</div>
                          <div className="w-1/5 flex items-center justify-center">Excellent</div>
                        </div>
                        
                        {/* Score pointer */}
                        <div className="absolute top-0 h-12 flex items-center" 
                             style={{left: `${((isCalibrating ? calibratedScore : creditScore) - 300) / 550 * 100}%`}}>
                          <div className="h-12 w-0.5 bg-black"></div>
                          <div className="absolute top-12 transform -translate-x-1/2 bg-white px-2 py-0.5 rounded border text-sm font-bold">
                            {isCalibrating ? calibratedScore : creditScore}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 text-xs text-gray-500">
                        <p>Note: Features with higher weights have greater impact on final score.</p> 
                        <p>The Kooti score is scaled to the standard 300-850 range used by major credit bureaus worldwide.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-3">Implementation & Monitoring</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 p-3 rounded-md">
                    <h4 className="font-medium mb-2">Implementation</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Real-time API for instant loan decisions</li>
                      <li>Batch processing for portfolio reviews</li>
                      <li>Standardized Kooti scorecard output (300-850)</li>
                      <li>Clear reason codes for score factors</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-md">
                    <h4 className="font-medium mb-2">Monitoring Framework</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Daily operational checks</li>
                      <li>Monthly performance reviews</li>
                      <li>Quarterly deep-dive analyses</li>
                      <li>Annual comprehensive evaluations</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Governance Structure:</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-blue-100 px-3 py-1 rounded-md text-sm">Model Oversight Committee</div>
                    <div className="bg-green-100 px-3 py-1 rounded-md text-sm">Regular Performance Reviews</div>
                    <div className="bg-purple-100 px-3 py-1 rounded-md text-sm">Regulatory Compliance Checks</div>
                    <div className="bg-yellow-100 px-3 py-1 rounded-md text-sm">Consumer Protection Mechanisms</div>
                    <div className="bg-red-100 px-3 py-1 rounded-md text-sm">Recalibration Triggers</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Final Credit Assessment:</h4>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">Kooti {borrowerType === 'thick-file' ? 'Pro' : 'New'} Score</h3>
                        <div className="mt-2 flex items-center">
                          <div className={`text-4xl font-bold ${creditScore >= 700 ? 'text-green-600' : creditScore >= 600 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {creditScore}
                          </div>
                          <div className="ml-4">
                            <div className={`px-3 py-1 rounded-full text-white text-sm ${riskInfo.color}`}>
                              {riskInfo.category}
                            </div>
                            <div className="text-gray-600 text-sm mt-1">
                              Range: 300-850
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Score Breakdown:</h4>
                        <div className="text-sm space-y-1">
                          {scoreExplanation.map((explanation, i) => (
                            <div key={i} className="flex items-center">
                              <div className={explanation.includes('+') ? 'text-green-600' : 'text-red-600'}>
                                {explanation.includes('+') ? '▲' : '▼'}
                              </div>
                              <span className="ml-2">{explanation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Replace the half-clock visualization in the Implementation section */}
                    <div className="mt-6 relative h-16 w-full">
                      {/* Background bar */}
                      <div className="absolute inset-0 rounded-lg overflow-hidden">
                        <div className="flex h-6 w-full">
                          <div className="bg-red-500 h-full" style={{width: '20%'}}></div>
                          <div className="bg-yellow-500 h-full" style={{width: '20%'}}></div>
                          <div className="bg-teal-500 h-full" style={{width: '20%'}}></div>
                          <div className="bg-green-500 h-full" style={{width: '20%'}}></div>
                          <div className="bg-emerald-500 h-full" style={{width: '20%'}}></div>
                        </div>
                      </div>
                      
                      {/* Score marker */}
                      <div 
                        className="absolute top-0 w-3 h-8 bg-blue-700 border-2 border-white rounded"
                        style={{ 
                          left: `calc(${((creditScore - 300) / 550 * 100)}% - 6px)`,
                          transition: "left 0.5s ease-in-out" 
                        }}
                      >
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-0 border-b-8 border-l-transparent border-r-transparent border-b-blue-700 absolute -top-6 left-1/2 transform -translate-x-1/2"></div>
                      </div>
                      
                      {/* Score labels */}
                      <div className="absolute top-8 w-full flex justify-between text-xs">
                        <div className="text-center" style={{width: '20%'}}>
                          <div className="text-red-700 font-medium">Poor</div>
                          <div className="text-gray-600">300</div>
                        </div>
                        <div className="text-center" style={{width: '20%'}}>
                          <div className="text-yellow-700 font-medium">Fair</div>
                          <div className="text-gray-600">410</div>
                        </div>
                        <div className="text-center" style={{width: '20%'}}>
                          <div className="text-teal-700 font-medium">Good</div>
                          <div className="text-gray-600">520</div>
                        </div>
                        <div className="text-center" style={{width: '20%'}}>
                          <div className="text-green-700 font-medium">Very Good</div>
                          <div className="text-gray-600">630</div>
                        </div>
                        <div className="text-center" style={{width: '20%'}}>
                          <div className="text-emerald-700 font-medium">Excellent</div>
                          <div className="text-gray-600">740</div>
                        </div>
                        <div className="text-gray-600">850</div>
                      </div>
                      
                      {/* Current score indicator */}
                        <div
                        className="absolute -top-6 text-center font-bold text-blue-700 text-lg"
                          style={{
                          left: `${(creditScore - 300) / 550 * 100}%`,
                          transform: "translateX(-50%)",
                          transition: "left 0.5s ease-in-out"
                          }}
                      >
                        {creditScore}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation controls */}
          <div className="mt-6 flex justify-between">
            <Button
              onClick={handlePrevStep}
              variant="outline"
              className={`flex items-center border-primary text-primary hover:bg-primary/10 ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={activeStep === 0}
            >
              <ChevronRight className="mr-1 rotate-180 h-4 w-4" /> Previous
            </Button>
            <Button
              onClick={handleNextStep}
              variant="default"
              className={`flex items-center bg-primary hover:bg-primary/90 ${activeStep === 4 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={activeStep === 4}
            >
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 bg-muted text-center text-sm text-muted-foreground border-t border-border">
        <p className="flex items-center justify-center">
          <span className="font-semibold text-primary mr-1">© 2025 Kooti Credit Bureau</span>
          <span className="mx-2">—</span>
          <span>This visualization represents the Kooti Credit Scoring Methodology (CSM)</span>
        </p>
      </div>
    </div> // Closing the main content div <div className="p-6 flex flex-col">
  </div> // Closing the main component div <div className="flex flex-col w-full h-full ...">
  );
};

export default KootiCSMVisualization;
