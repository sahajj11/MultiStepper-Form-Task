import React from 'react';
import ferrari from "../../assets/fss.png"

interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Sector 1' },
    { id: 2, label: 'Sector 2' },
    { id: 3, label: 'Sector 3' },
  ];

  // Logic: Step 1 = 0%, Step 2 = 50%, Step 3 = 100%
  const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="relative w-full mb-12 mt-4 px-2">
      {/* Background Track Line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0" />
      
      {/* Active Racing Line (Red) */}
      <div 
        className="absolute top-1/2 left-0 h-[2px] bg-[#e10600] transition-all duration-700 ease-in-out -translate-y-1/2 z-0"
        style={{ width: `${progressWidth}%` }}
      />

      {/* THE RACING CAR - Moves with the red line */}
      <div 
        className="absolute top-1/2 -translate-y-[80%] transition-all duration-700 ease-in-out z-20 pointer-events-none"
        style={{ left: `calc(${progressWidth}% - 22px)` }} 
      >
        <div className="relative">
          {/* F1 Car SVG */}
          <img 
      src={ferrari} // Replace with your actual car image path
      alt="Ferrari F1"
      className="w-19 h-auto drop-shadow-[0_5px_10px_rgba(225,6,0,0.5)] object-contain"
    />
    
    {/* Speed Lines Effect - still looks cool with a photo! */}
    <div className="absolute -left-3 top-3/4 -translate-y-1/2 opacity-60">
      <div className="w-6 h-[1px] bg-red-500 animate-pulse"></div>
      <div className="w-4 h-[1px] bg-red-400 mt-1 animate-pulse delay-75"></div>
    </div>
        </div>
      </div>

      {/* Sector Numbers (The Checkpoints) */}
      <div className="relative flex justify-between items-center w-full z-10">
        {steps.map((step) => (
          <div key={step.id} className="relative flex flex-col items-center">
            {/* Step Circle */}
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center font-black italic transition-all duration-500
              ${currentStep >= step.id 
                ? 'bg-[#e10600] text-white shadow-[0_0_15px_rgba(225,6,0,0.6)] scale-110' 
                : 'bg-[#15151e] border border-white/20 text-gray-500'
              }
            `}>
              {step.id}
            </div>
            
            {/* Label Below */}
            <span className={`
              absolute -bottom-6 text-[9px] font-bold uppercase tracking-widest transition-colors duration-300 whitespace-nowrap
              ${currentStep >= step.id ? 'text-white' : 'text-gray-600'}
            `}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;