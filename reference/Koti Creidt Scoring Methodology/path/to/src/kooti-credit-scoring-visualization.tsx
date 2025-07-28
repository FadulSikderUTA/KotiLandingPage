function KootiCreditScoreVisualization() {
    // ... existing code ...

    return (
        <div>
            {/* ... existing code ... */}

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Kooti Pro Score Calculation</h2>
                <p className="mb-2">
                    Sample credit score calculation based on input data
                </p>
                
                {/* Sample Input Data Section - Keep this */}
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <h3 className="font-semibold mb-2">Sample Input Data:</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <div>Loan Accounts: {sampleData.loanAccounts}</div>
                        <div className="text-right">
                            <span className="bg-blue-100 px-2 py-1 rounded-md">Good</span>
                        </div>
                        
                        <div>Credit Age: {sampleData.creditAge} months</div>
                        <div className="text-right">
                            <span className="bg-purple-100 px-2 py-1 rounded-md">Moderate</span>
                        </div>
                        
                        <div>Payment History: {sampleData.paymentHistory}%</div>
                        <div className="text-right">
                            <span className="bg-blue-100 px-2 py-1 rounded-md">Good</span>
                        </div>
                        
                        <div>Credit Utilization: {sampleData.creditUtilization}%</div>
                        <div className="text-right">
                            <span className="bg-green-100 px-2 py-1 rounded-md">Low</span>
                        </div>
                        
                        <div>Credit Inquiries: {sampleData.creditInquiries}</div>
                        <div className="text-right">
                            <span className="bg-yellow-100 px-2 py-1 rounded-md">Few</span>
                        </div>
                    </div>
                </div>
                
                {/* REMOVE Scorecard Points Allocation table - replace with just formula explanation */}
                <div className="p-4 bg-gray-50 rounded-md mb-4">
                    <p className="mb-2">
                        <strong>Scorecard Formula:</strong> Points = Offset + (Factor × Weight × Attribute Value)
                    </p>
                    <p className="mb-2">
                        • Factor = PDO/ln(2) • Offset calibrated to yield 600 at 1:1 odds
                    </p>
                    <p className="text-sm italic">
                        The logistic regression model learns weights for each feature that are then transformed into points through the scorecard process.
                    </p>
                </div>
                
                {/* Base Score and Points Breakdown - Keep this */}
                <div className="mb-4">
                    <div className="flex justify-between py-2 border-b">
                        <span className="font-semibold">Base Score</span>
                        <span>{baseScore}</span>
                    </div>
                    
                    <div className="flex justify-between py-2 text-green-700">
                        <span>Limited credit lines</span>
                        <span>+30</span>
                    </div>
                    
                    <div className="flex justify-between py-2 text-purple-700">
                        <span>Moderate credit history</span>
                        <span className="flex items-center">
                            <span className="text-xs text-gray-500 mr-2">13%</span>
                            +35
                        </span>
                    </div>
                    
                    <div className="flex justify-between py-2 text-blue-700">
                        <span>Good payment history</span>
                        <span className="flex items-center">
                            <span className="text-xs text-gray-500 mr-2">33%</span>
                            +66
                        </span>
                    </div>
                    
                    <div className="flex justify-between py-2 text-green-700">
                        <span>Low credit utilization</span>
                        <span className="flex items-center">
                            <span className="text-xs text-gray-500 mr-2">28%</span>
                            +56
                        </span>
                    </div>
                    
                    <div className="flex justify-between py-2 text-red-700">
                        <span>Few recent credit inquiries</span>
                        <span>+20</span>
                    </div>
                    
                    <div className="flex justify-between py-2 border-t">
                        <span className="font-semibold">Kooti Pro Score</span>
                        <span className="font-bold">{finalScore}</span>
                    </div>
                </div>
                
                {/* Score Visualization - Keep this */}
                <div className="mb-4">
                    <p className="mb-1 text-sm">Score Range: 300-850</p>
                    <ScoreBarVisualization score={finalScore} />
                    <p className="mt-4 text-sm">
                        Note: Features with higher weights have greater impact on final score.
                        The Kooti score is scaled to the standard 300-850 range used by major credit bureaus worldwide.
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Sample Input Data and Score Ranges</h2>
                <p className="mb-4">
                    Below are example input data profiles and their corresponding score ranges, visualized using a bar to indicate the risk category.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleInputs.map((input, index) => (
                        <div key={index} className="p-4 border rounded-md shadow-sm">
                            <h3 className="font-semibold mb-2">{input.name}</h3>
                            <ul className="mb-4">
                                <li>Credit Lines: {input.creditLines}</li>
                                <li>Credit History: {input.creditHistory}</li>
                                <li>Payment History: {input.paymentHistory}</li>
                                <li>Credit Utilization: {input.creditUtilization}</li>
                                <li>Credit Inquiries: {input.creditInquiries}</li>
                            </ul>
                            <div className="mb-2 flex items-center">
                                <span className="font-semibold mr-2">Score:</span>
                                <span className="font-bold">{calculateScoreForInput(input, featureWeights[borrowerType])}</span>
                            </div>
                            {/* Score bar for each sample input */}
                            <ScoreBarVisualization score={calculateScoreForInput(input, featureWeights[borrowerType])} />
                        </div>
                    ))}
                </div>
            </section>

            // ... existing code ...
        </div>
    );
}


function ScoreBarVisualization({ score }: { score: number }) {
    const riskCategory = getRiskCategory(score);
    const barWidth = Math.max(0, Math.min(100, ((score - 300) / (850 - 300)) * 100)); // Ensure width is within 0-100%

    const getBarColor = (category: string) => {
        switch (category) {
            case 'Excellent': return 'bg-green-500';
            case 'Very Good': return 'bg-blue-500';
            case 'Good': return 'bg-teal-500';
            case 'Fair': return 'bg-yellow-500';
            case 'Poor': return 'bg-red-500';
            default: return 'bg-gray-400';
        }
    };

    return (
        <div className="relative h-6 bg-gray-200 rounded-md overflow-hidden">
            <div
                className={`h-full ${getBarColor(riskCategory)}`}
                style={{ width: `${barWidth}%` }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-2 text-xs text-gray-800 font-semibold">
                <span>Poor (300)</span>
                <span>Fair (600)</span>
                <span>Good (650)</span>
                <span>Very Good (700)</span>
                <span>Excellent (750+)</span>
            </div>
            <div
                className="absolute top-1/2 left-0 h-4 w-0.5 bg-gray-900 transform -translate-y-1/2"
                style={{ left: `${barWidth}%` }}
            ></div>
            <div className="absolute top-full left-0 text-center text-sm mt-1" style={{ left: `${barWidth}%`, transform: 'translateX(-50%)' }}>
                {riskCategory} ({score})
            </div>
        </div>
    );
}

// ... existing code ... 