import React, { useState } from 'react';
import { type StepProps } from '../../types/form';

// Extending props specifically for Step 2
interface AddressProps extends StepProps {
  street: string; setStreet: (val: string) => void;
  city: string; setCity: (val: string) => void;
  stateProv: string; setStateProv: (val: string) => void;
  zip: string; setZip: (val: string) => void;
  country: string; setCountry: (val: string) => void;
}

const Step2Address: React.FC<AddressProps> = ({
  street, setStreet,
  city, setCity,
  stateProv, setStateProv,
  zip, setZip,
  country, setCountry,
  onNext, onBack
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!street.trim()) newErrors.street = "Required";
    if (!city.trim()) newErrors.city = "Required";
    if (!stateProv.trim()) newErrors.stateProv = "Required";
    if (!zip.trim()) newErrors.zip = "Required";
    if (!country.trim()) newErrors.country = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext?.();
  };

  const inputClasses = (error: string | undefined) => `
    w-full p-3 rounded-xl outline-none transition-all duration-300
    bg-white/5 border backdrop-blur-sm text-white placeholder:text-gray-500
    ${error ? 'border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.2)]' : 'border-white/20 focus:border-[#e10600] focus:bg-white/10'}
  `;

  const labelClasses = "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-1 mb-1";

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* Street Address - Full Width */}
      <div className="flex flex-col">
        <label className={labelClasses}>Street Address / Paddock Location</label>
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className={inputClasses(errors.street)}
          placeholder="Via Abetone Inferiore, 4"
        />
      </div>

      {/* City & State - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className={labelClasses}>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={inputClasses(errors.city)}
            placeholder="Maranello"
          />
        </div>
        <div className="flex flex-col">
          <label className={labelClasses}>State / Province</label>
          <input
            type="text"
            value={stateProv}
            onChange={(e) => setStateProv(e.target.value)}
            className={inputClasses(errors.stateProv)}
            placeholder="Modena"
          />
        </div>
      </div>

      {/* ZIP & Country - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className={labelClasses}>ZIP / Postal Code</label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className={inputClasses(errors.zip)}
            placeholder="41053"
          />
        </div>
        <div className="flex flex-col">
          <label className={labelClasses}>Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={inputClasses(errors.country)}
            placeholder="Italy"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={onBack}
          className="flex-1 py-4 rounded-xl font-bold uppercase tracking-widest text-gray-300 border border-white/20 hover:bg-white/5 transition-all"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex-[2] py-4 rounded-xl font-black italic uppercase tracking-tighter text-white bg-[#e10600] hover:bg-[#c40500] transition-all shadow-lg shadow-red-900/40"
        >
          Next Sector →
        </button>
      </div>
    </div>
  );
};

export default Step2Address;