import React, { useState, useEffect } from 'react';
import { X, Calculator } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AggregateCalculatorPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  const [marks, setMarks] = useState({
    matricObtained: '',
    matricTotal: '',
    fscObtained: '',
    fscTotal: '',
    mdcatObtained: '',
    mdcatTotal: '',
  });
  const [aggregate, setAggregate] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMarks(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const { matricObtained, matricTotal, fscObtained, fscTotal, mdcatObtained, mdcatTotal } = marks;

    const allFieldsFilled = Object.values(marks).every(val => val.trim() !== '');
    if (!allFieldsFilled) {
      setAggregate(null);
      setError(null);
      return;
    }

    const mO = parseFloat(matricObtained);
    const mT = parseFloat(matricTotal);
    const fO = parseFloat(fscObtained);
    const fT = parseFloat(fscTotal);
    const dO = parseFloat(mdcatObtained);
    const dT = parseFloat(mdcatTotal);

    if (isNaN(mO) || isNaN(mT) || isNaN(fO) || isNaN(fT) || isNaN(dO) || isNaN(dT)) {
        setAggregate(null);
        setError("Please enter valid numbers.");
        return;
    }
    
    if (mO > mT || fO > fT || dO > dT) {
      setError("Obtained marks cannot be greater than total marks.");
      setAggregate(null);
      return;
    }

    if ([mT, fT, dT].some(val => val <= 0)) {
        setError("Total marks must be greater than zero.");
        setAggregate(null);
        return;
    }

    setError(null);

    const matricPercent = (mO / mT) * 100;
    const fscPercent = (fO / fT) * 100;
    const mdcatPercent = (dO / dT) * 100;

    const finalAggregate = (matricPercent * 0.10) + (fscPercent * 0.40) + (mdcatPercent * 0.50);
    
    setAggregate(finalAggregate);

  }, [marks]);
  
  useEffect(() => {
    if (!isOpen) {
      setMarks({
        matricObtained: '',
        matricTotal: '',
        fscObtained: '',
        fscTotal: '',
        mdcatObtained: '',
        mdcatTotal: '',
      });
      setAggregate(null);
      setError(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const renderInputField = (label: string, name: keyof typeof marks, placeholder: string) => (
    <div>
      <label htmlFor={name} className="text-sm text-gray-400">{label}</label>
      <input
        id={name}
        name={name}
        type="number"
        placeholder={placeholder}
        value={marks[name]}
        onChange={handleInputChange}
        className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fadeInOverlay">
      <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-md flex flex-col animate-scaleIn">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-lg font-bold text-teal-400 flex items-center">
            <Calculator className="w-6 h-6 mr-2" />
            MDCAT Aggregate Calculator
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 font-semibold text-gray-200">Matric / SSC</div>
            {renderInputField("Obtained Marks", "matricObtained", "e.g., 950")}
            {renderInputField("Total Marks", "matricTotal", "e.g., 1100")}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 font-semibold text-gray-200">F.Sc (Pre-Medical)</div>
            {renderInputField("Obtained Marks", "fscObtained", "e.g., 1010")}
            {renderInputField("Total Marks", "fscTotal", "e.g., 1100")}
          </div>
           <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 font-semibold text-gray-200">MDCAT</div>
            {renderInputField("Obtained Marks", "mdcatObtained", "e.g., 165")}
            {renderInputField("Total Marks", "mdcatTotal", "e.g., 200")}
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          {aggregate !== null && !error && (
            <div className="pt-4 text-center bg-gray-900/50 rounded-lg p-4">
              <p className="text-gray-300">Your MDCAT Aggregate:</p>
              <p className="text-4xl font-bold text-teal-400 mt-1">
                {aggregate.toFixed(2)}%
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AggregateCalculatorPopup;