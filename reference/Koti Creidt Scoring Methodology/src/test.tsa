import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, ExternalLink, AlertCircle, Layers, Users, Database, Brain, LineChart, Eye } from 'lucide-react';

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
    if (score >= 550) return {category: "Poor", color: "bg-orange-500"};
    return {category: "Very Poor", color: "bg-red-500"};
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
      <div className="w-full bg-gray-200 h-2 rounded-full mt-2 mb-6">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: `${(activeStep + 1) * 20}%` }}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-700 text-white p-4">
        <h1 className="text-2xl font-bold">Kooti Credit Scoring Methodology</h1>
        <p className="opacity-80">Interactive visualization of the 5-step credit scoring framework</p>
        {renderProgressBar()}
      </div>

      <div className="flex flex-col lg:flex-row h-full">
        {/* Left panel: Steps */}
        <div className="lg:w-1/4 bg-gray-100 p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Borrower Type</h2>
            <div className="flex space-x-2">
              <button 
                className={`px-4 py-2 rounded-md ${borrowerType === 'thick-file' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setBorrowerType('thick-file')}
              >
                Thick-File
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${borrowerType === 'thin-file' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setBorrowerType('thin-file')}
              >
                Thin-File
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-600">
              {borrowerType === 'thick-file' 
                ? 'Borrowers with substantial credit history (multiple tradelines, 2+ years of data)' 
                : 'Borrowers with limited or no formal credit record'}
            </p>
          </div>

          <h2 className="text-lg font-semibold mb-2">Framework Steps</h2>
          <ul className="space-y-2">
            {steps.map((step, index) => (
              <li 
                key={index} 
                className={`p-3 rounded-md cursor-pointer transition flex items-center
                  ${activeStep === index ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="mr-3">{step.icon}</div>
                <div>
                  <span className="font-medium">{index + 1}. {step.title}</span>
                </div>
                {activeStep > index && <Check size={16} className="ml-auto text-green-500" />}
              </li>
            ))}
          </ul>
        </div>

        {/* Main content area */}
        <div className="lg:w-3/4 p-4 flex flex-col">
          {/* Current step details */}
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2">{steps[activeStep].title}</h2>
            <p className="text-lg mb-2">{steps[activeStep].description}</p>
            <p className="text-gray-600">{steps[activeStep].details}</p>
          </div>

          {/* Interactive content based on step */}
          <div className="flex-grow">
            {activeStep === 0 && (
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Business Objectives</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Improve lending decisions by quantifying risk</li>
                  <li>Streamline credit processes with automated scoring</li>
                  <li>Facilitate financial inclusion for underserved populations</li>
                  <li>Enhance market efficiency through reduced information asymmetry</li>
                  <li>Align with Bangladesh Bank's regulatory guidelines</li>
                </ul>
              </div>
            )}

            {activeStep === 1 && (
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Default Definition & Performance Window</h3>
                <div className="space-y-3">
                  <div>
                    <p><span className="font-medium">Primary Default Definition:</span> 90+ days past due within 12 months</p>
                    <p><span className="font-medium">Secondary Indicators:</span> Charge-offs, bankruptcies, settlements</p>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium">Segmented Approach:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className="border p-3 rounded-md bg-blue-50">
                        <h5 className="font-medium">Thick-File Borrowers</h5>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Up to 24 months of historical data</li>
                          <li>Standard 12-month performance window</li>
                          <li>Requires formal credit data from banks/NBFIs</li>
                        </ul>
                      </div>
                      <div className="border p-3 rounded-md bg-teal-50">
                        <h5 className="font-medium">Thin-File Borrowers</h5>
                        <ul className="list-disc pl-5 text-sm">
                          <li>6-12 months of alternative data</li>
                          <li>Adapted definition for alternative channels</li>
                          <li>More frequent updates with telecom/MFS data</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-4">Data Collection & Features</h3>
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
                          <input
                            type="range"
                            min={input.min}
                            max={input.max}
                            step={input.step}
                            value={input.value}
                            onChange={(e) => handleInputChange(input.param, Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
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
                          <input
                            type="range"
                            min={input.min}
                            max={input.max}
                            step={input.step}
                            value={input.value}
                            onChange={(e) => handleInputChange(input.param, Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="mt-4 bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-2">Feature Engineering Process:</h4>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    <li>Raw data collection from multiple sources</li>
                    <li>Data quality checks and missing value treatment</li>
                    <li>Weight of Evidence (WoE) transformations</li>
                    <li>Information Value (IV) calculation to identify predictive features</li>
                    <li>Feature selection based on statistical significance</li>
                  </ol>
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

                  {/* Enhanced Point Calculation Flow - with Kooti branding */}
                  <div className="bg-gray-50 p-3 rounded-md relative">
                    {/* Add arrow connecting from weights on larger screens */}
                    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden md:block text-blue-500">
                      <ChevronRight size={20} />
                    </div>
                    
                    <h4 className="font-medium mb-2">
                      Kooti {borrowerType === 'thick-file' ? 'Pro' : 'New'} Score Calculation
                    </h4>
                    <p className="text-xs text-gray-500 mb-3">Sample credit score calculation based on input data</p>
                    
                    {/* Sample input reference */}
                    <div className="mb-3 p-2 bg-blue-50 rounded-md text-xs">
                      <div className="font-medium text-sm">Sample Input Data:</div>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-1">
                        {borrowerType === 'thick-file' ? (
                          <>
                            <div>Loan Accounts: {inputs.loanHistory}</div>
                            <div>Credit Age: {inputs.creditAge} months</div>
                            <div>Payment History: {inputs.paymentHistory}%</div>
                            <div>Utilization: {inputs.creditUtilization}%</div>
                          </>
                        ) : (
                          <>
                            <div>Telecom Payments: {inputs.telecomPayments}%</div>
                            <div>MFS Usage: {inputs.mobileFinancial}</div>
                            <div>Utility Bills: {inputs.utilityBills}%</div>
                            <div>Loan Accounts: {inputs.loanHistory}</div>
                          </>
                        )}
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
                    
                    {/* Score band visualization with half-clock design */}
                    <div className="mt-4 mb-2">
                      <h5 className="text-xs font-medium mb-1">Score Range: 300-850</h5>
                      
                      {/* Half-Clock Range Visualization */}
                      <div className="relative h-32 w-full">
                        <div className="absolute inset-0 flex justify-center">
                          <div className="relative w-64 h-32 overflow-hidden">
                            {/* Semicircle background */}
                            <div className="absolute bottom-0 w-full h-full bg-gray-100 rounded-t-full border border-gray-300"></div>
                            
                            {/* Colored segments */}
                            <div className="absolute bottom-0 left-1/2 w-full h-full origin-bottom-center transform -translate-x-1/2" 
                                 style={{ transform: "rotate(-90deg) translateY(50%)" }}>
                              <div className="flex h-full">
                                <div className="bg-red-500 h-full" style={{width: '15%'}}></div>
                                <div className="bg-orange-500 h-full" style={{width: '10%'}}></div>
                                <div className="bg-yellow-500 h-full" style={{width: '10%'}}></div>
                                <div className="bg-teal-500 h-full" style={{width: '15%'}}></div>
                                <div className="bg-green-500 h-full" style={{width: '15%'}}></div>
                                <div className="bg-emerald-500 h-full" style={{width: '35%'}}></div>
                              </div>
                            </div>
                            
                            {/* Needle indicator */}
                            <div className="absolute bottom-0 left-1/2 w-1 h-28 bg-black transform -translate-x-1/2 origin-bottom"
                                 style={{ transform: `rotate(${((isCalibrating ? calibratedScore : creditScore) - 300) / 550 * 180 - 90}deg) translateX(-50%)` }}>
                              <div className="w-3 h-3 rounded-full bg-black absolute -top-1 -left-1"></div>
                            </div>
                            
                            {/* Score display */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-blue-700">
                              {isCalibrating ? calibratedScore : creditScore}
                            </div>
                            
                            {/* Score category */}
                            <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-0.5 rounded-full text-xs text-white ${riskInfo.color}`}>
                              {riskInfo.category}
                            </div>
                          </div>
                        </div>
                        
                        {/* Score labels */}
                        <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-600 px-2">
                          <span>300</span>
                          <span>550</span>
                          <span>600</span>
                          <span>650</span>
                          <span>700</span>
                          <span>750</span>
                          <span>850</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-xs text-gray-500">
                        Note: Features with higher weights have greater impact on final score. 
                        Point values are derived from feature weights and input data. The Kooti score is scaled to the 300-850 range.
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
                    
                    {/* Half-clock score visualization here as well */}
                    <div className="mt-6 relative h-40 w-full">
                      <div className="absolute inset-0 flex justify-center">
                        <div className="relative w-80 h-40 overflow-hidden">
                          {/* Semicircle background */}
                          <div className="absolute bottom-0 w-full h-full bg-gray-100 rounded-t-full border border-gray-300"></div>
                          
                          {/* Colored segments */}
                          <div className="absolute bottom-0 left-1/2 w-full h-full origin-bottom-center transform -translate-x-1/2" 
                               style={{ transform: "rotate(-90deg) translateY(50%)" }}>
                            <div className="flex h-full">
                              <div className="bg-red-500 h-full" style={{width: '15%'}}></div>
                              <div className="bg-orange-500 h-full" style={{width: '10%'}}></div>
                              <div className="bg-yellow-500 h-full" style={{width: '10%'}}></div>
                              <div className="bg-teal-500 h-full" style={{width: '15%'}}></div>
                              <div className="bg-green-500 h-full" style={{width: '15%'}}></div>
                              <div className="bg-emerald-500 h-full" style={{width: '35%'}}></div>
                            </div>
                          </div>
                          
                          {/* Needle indicator */}
                          <div className="absolute bottom-0 left-1/2 w-1 h-28 bg-black transform -translate-x-1/2 origin-bottom"
                               style={{ transform: `rotate(${((creditScore - 300) / 550) * 180 - 90}deg) translateX(-50%)` }}>
                            <div className="w-3 h-3 rounded-full bg-black absolute -top-1 -left-1"></div>
                          </div>
                          
                          {/* Score display */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-blue-700">
                            {creditScore}
                          </div>
                          
                          {/* Score category */}
                          <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-0.5 rounded-full text-xs text-white ${riskInfo.color}`}>
                            {riskInfo.category}
                          </div>
                        </div>
                      </div>
                      
                      {/* Score labels */}
                      <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-600 px-2">
                        <span>300</span>
                        <span>550</span>
                        <span>600</span>
                        <span>650</span>
                        <span>700</span>
                        <span>750</span>
                        <span>850</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation controls */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={handlePrevStep}
              className={`px-4 py-2 bg-gray-200 rounded-md flex items-center ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
              disabled={activeStep === 0}
            >
              <ChevronRight className="mr-1 rotate-180" /> Previous
            </button>
            <button
              onClick={handleNextStep}
              className={`px-4 py-2 bg-blue-600 text-white rounded-md flex items-center ${activeStep === 4 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
              disabled={activeStep === 4}
            >
              Next <ChevronRight className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-100 text-center text-sm text-gray-600">
        <p>© 2025 Kooti Credit Bureau — This visualization represents the Kooti Credit Scoring Methodology (CSM)</p>
      </div>
    </div>
  );
};

export default KootiCSMVisualization;
