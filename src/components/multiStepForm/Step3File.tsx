import React, { useRef, useState } from 'react';

interface FileStepProps {
  file: File | null;
  setFile: (file: File | null) => void;
  onBack: () => void;
  onSubmit: () => void;
  handleReset: () => void;
}

const Step3File: React.FC<FileStepProps> = ({
  file, setFile,
  onBack, onSubmit,
  handleReset
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validation: Max 5MB and specific types
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword'];
      if (!allowedTypes.includes(selectedFile.type)) {
        setError("Invalid format. Please upload PDF, JPG, or PNG.");
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File too large. Max limit is 5MB.");
        return;
      }
      setError(null);
      setFile(selectedFile);
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center mb-4">
        <h2 className="text-white font-bold uppercase tracking-widest text-sm">Final Documentation</h2>
        <p className="text-gray-400 text-[10px] mt-1 italic">UPLOAD RACING LICENSE OR IDENTITY PROOF</p>
      </div>

      {/* Custom Upload Zone */}
      <div 
        onClick={triggerFileInput}
        className={`group cursor-pointer border-2 border-dashed rounded-2xl p-8 transition-all duration-300 flex flex-col items-center justify-center gap-3
          ${file 
            ? 'border-[#e10600] bg-[#e10600]/10' 
            : 'border-white/20 hover:border-white/40 bg-white/5'
          }`}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          className="hidden" 
          accept=".pdf,.jpg,.png,.doc"
        />
        
        {/* Upload Icon (Simple SVG) */}
        <div className={`p-4 rounded-full transition-colors ${file ? 'bg-[#e10600]' : 'bg-white/10 group-hover:bg-white/20'}`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        </div>

        <div className="text-center">
          {file ? (
            <p className="text-white font-medium text-sm truncate max-w-[200px]">{file.name}</p>
          ) : (
            <>
              <p className="text-white text-sm font-semibold">Click to upload telemetry data</p>
              <p className="text-gray-500 text-[10px] mt-1 uppercase">PDF, PNG, JPG (Max 5MB)</p>
            </>
          )}
        </div>
      </div>

      {error && <p className="text-red-500 text-[10px] font-bold text-center uppercase tracking-tighter">{error}</p>}

      {/* Buttons Container */}
      <div className="space-y-3">
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="flex-1 py-4 rounded-xl font-bold uppercase tracking-widest text-gray-400 border border-white/20 hover:bg-white/5 transition-all"
          >
            Back
          </button>
          <button
            onClick={() => {
              if(!file) return setError("Please upload a file to proceed.");
              onSubmit();
            }}
            className="flex-[2] py-4 rounded-xl font-black italic uppercase tracking-tighter text-white bg-[#e10600] hover:bg-[#ff1e1e] transition-all shadow-lg shadow-red-600/20"
          >
            Finish Race 🏁
          </button>
        </div>

        {/* The Reset Button Requirement */}
        <button
          onClick={handleReset}
          className="w-full py-2 text-[10px] font-bold text-gray-500 hover:text-red-400 uppercase tracking-[0.4em] transition-colors"
        >
          Reset Application Data
        </button>
      </div>
    </div>
  );
};

export default Step3File;