import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { type BasicInfoProps } from '../../types/form';

const Step1Basic: React.FC<BasicInfoProps> = ({
  title, setTitle,
  description, setDescription,
  phone, setPhone,
  onNext
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!title.trim()) newErrors.title = "Driver name/title is required";
    if (!description.trim()) newErrors.description = "Bio is required";
    if (!phone) newErrors.phone = "Contact number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext?.();
  };

  // Shared Tailwind classes for glass inputs
  const inputClasses = (error: string | undefined) => `
    w-full p-3 rounded-xl outline-none transition-all duration-300
    bg-white/5 border backdrop-blur-sm text-white placeholder:text-gray-500
    ${error 
      ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' 
      : 'border-white/20 focus:border-[#e10600] focus:bg-white/10'
    }
  `;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title / Name */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gray-300 ml-1">
          Full Name / Mission Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputClasses(errors.title)}
          placeholder="e.g. Sahaj Rajput"
        />
        {errors.title && <span className="text-[10px] font-bold text-red-400 uppercase ml-1 tracking-tighter">{errors.title}</span>}
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gray-300 ml-1">
          Racing Experience / Bio
        </label>
        <textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={inputClasses(errors.description)}
          placeholder="Tell us about your technical background..."
        />
        {errors.description && <span className="text-[10px] font-bold text-red-400 uppercase ml-1 tracking-tighter">{errors.description}</span>}
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gray-300 ml-1">
          Emergency Contact (Phone)
        </label>
        <div className={`glass-phone-input ${errors.phone ? 'border-red-500' : ''}`}>
          <PhoneInput
            international
            defaultCountry="IN"
            value={phone}
            onChange={setPhone}
            // Custom styling for the internal library input
            className="flex w-full p-1 bg-transparent text-white rounded-xl border border-white/20 focus-within:border-[#e10600] transition-all"
          />
        </div>
        {errors.phone && <span className="text-[10px] font-bold text-red-400 uppercase ml-1 tracking-tighter">{errors.phone}</span>}
      </div>

      {/* Action Button */}
      <button
        onClick={handleNext}
        className="w-full mt-4 group relative overflow-hidden bg-[#e10600] py-4 rounded-xl font-black italic uppercase tracking-tighter text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-900/20"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Initialize Step 02
          <span className="text-xl inline-block transition-transform group-hover:translate-x-1">→</span>
        </span>
      </button>
    </div>
  );
};

export default Step1Basic;