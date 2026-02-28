"use client";
import { useState } from 'react';

export default function PercentageConverter() {
  const [cgpa, setCgpa] = useState('');
  const [percentage, setPercentage] = useState<number | null>(null);

  const handleInputChange = (value: string) => {
    // Basic validation to prevent typing a number > 10
    if (value !== '') {
      const numValue = parseFloat(value);
      if (numValue > 10) {
        alert("CGPA cannot be greater than 10.0!");
        return;
      }
      if (numValue < 0) return; 
    }
    setCgpa(value);
    setPercentage(null); // Reset result when user types a new number
  };

  const handleCalculate = () => {
    const cgpaValue = parseFloat(cgpa);

    if (isNaN(cgpaValue) || cgpaValue < 0 || cgpaValue > 10) {
      alert("Please enter a valid CGPA.");
      return;
    }

    // SPPU Engineering Formula
    let calcPercentage = (cgpaValue - 0.75) * 10;
    
    // Catch edge case where CGPA is very low (prevents negative percentage)
    if (calcPercentage < 0) calcPercentage = 0;

    setPercentage(calcPercentage);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-slate-900 border border-slate-800 rounded-2xl mt-12">
      <h1 className="text-2xl font-bold text-white mb-2">SPPU Percentage Converter</h1>
      <p className="text-slate-400 mb-8 text-sm">Official SPPU Engineering formula: (CGPA - 0.75) × 10</p>

      <div className="mb-6">
        <label className="text-slate-300 block mb-2 font-medium">Enter your CGPA</label>
        <input 
          type="number" 
          step="0.01"
          max="10"
          placeholder="e.g. 8.50"
          value={cgpa}
          className="w-full bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-orange-500 outline-none transition-colors text-lg"
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>

      <button 
        onClick={handleCalculate}
        className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-900/20 mb-6"
      >
        Convert to Percentage
      </button>

      {percentage !== null && (
        <div className="p-6 bg-orange-600/10 border border-orange-500/30 rounded-xl text-center animate-in fade-in zoom-in duration-300">
          <p className="text-slate-400 text-sm mb-1">Your Equivalent Percentage is:</p>
          <h2 className="text-5xl font-black text-orange-500">{percentage.toFixed(2)}%</h2>
        </div>
      )}
    </div>
  );
}