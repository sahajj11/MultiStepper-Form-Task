import React, { useState } from "react";
import Step1Basic from "./components/multiStepForm/Step1Basic";
import Step2Address from "./components/multiStepForm/Step2Address";
import Step3File from "./components/multiStepForm/Step3File";
import Stepper from "./components/ui/Stepper";
import logo from "../src/assets/fll.png";
import SuccessScreen from "./components/multiStepForm/SuccescScreen";


const FormContainer: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Requirement #1: Individual States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateProv, setStateProv] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFinish = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setTitle(""); setDescription(""); setPhone("");
    setStreet(""); setCity(""); setStateProv(""); setZip(""); setCountry("");
    setFile(null); 
    setStep(1);
    setIsSubmitted(false);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="relative flex items-center justify-center min-h-screen py-12 px-4 overflow-hidden">
      
      {/* UPPER LEFT: Branding Identity */}
      <div className="absolute top-8 left-8 flex items-center gap-4 animate-in fade-in slide-in-from-left-6 duration-1000">
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
          <img 
            src={logo}
            alt="Ferrari Shield" 
            className="w-12 md:w-16 h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          />
        </div>
        <div className="hidden sm:block">
          <h2 className="text-white font-black italic tracking-tighter text-xl leading-none">
            SCUDERIA <br /> <span className="text-[#e10600]">FERRARI</span>
          </h2>
          <p className="text-[8px] text-gray-400 font-bold uppercase tracking-[0.4em] mt-1">
            Maranello, Italy
          </p>
        </div>
      </div>

      {/* UPPER RIGHT: Circuit Data & Driver Status */}
      <div className="absolute top-8 right-8 hidden md:flex flex-col items-end gap-3 animate-in fade-in slide-in-from-right-6 duration-1000">
        <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-right min-w-[200px]">
          <div className="mb-3">
            <p className="text-[10px] font-bold text-[#e10600] uppercase tracking-[0.2em]">Current Location</p>
            <p className="text-lg font-black italic text-white uppercase tracking-tighter">Pista di Fiorano</p>
          </div>

          <div className="space-y-2 border-t border-white/10 pt-3">
            <div className="flex justify-between items-center gap-4">
              <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">System Status</span>
              <span className="text-[10px] text-green-400 font-mono font-bold animate-pulse">ONLINE</span>
            </div>
            
            <div className="flex justify-between items-center gap-4">
              <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Entry Phase</span>
              <span className="text-[10px] text-white font-mono font-bold uppercase">
                {isSubmitted ? 'Completed' : step === 1 ? 'Initialization' : step === 2 ? 'Locating' : 'Finalizing'}
              </span>
            </div>

            <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#e10600] transition-all duration-700 shadow-[0_0_8px_#e10600]" 
                style={{ width: isSubmitted ? '100%' : `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-4">
            <div>
              <p className="text-xs font-black text-white italic">24°C</p>
              <p className="text-[8px] text-gray-500 uppercase">Track</p>
            </div>
            <div>
              <p className="text-xs font-black text-white italic">12%</p>
              <p className="text-[8px] text-gray-500 uppercase">Humidity</p>
            </div>
          </div>
        </div>
      </div>

      {/* THE GLASS CARD (Centered) */}
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-sm rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border border-white/20 p-8 relative z-10 overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#e10600] shadow-[0_0_20px_rgba(225,6,0,0.6)]" />

        <div className="relative">
          <header className="mb-8">
            <h1 className="text-2xl font-black italic tracking-tighter text-white flex items-center gap-2">
              <span className="bg-[#e10600] text-white px-2 py-0.5 rounded-sm not-italic">F1</span> 
              DRIVE REGISTRATION
            </h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mt-1">Official Scuderia Portal</p>
          </header>

          {!isSubmitted && <Stepper currentStep={step} />}

          <div className="mt-10">
            {isSubmitted ? (
              <SuccessScreen onReset={handleReset} />
            ) : (
              <>
                {step === 1 && (
                  <Step1Basic title={title} setTitle={setTitle} description={description} setDescription={setDescription} phone={phone} setPhone={setPhone} onNext={nextStep}/>
                )}
                {step === 2 && (
                  <Step2Address street={street} setStreet={setStreet} city={city} setCity={setCity} stateProv={stateProv} setStateProv={setStateProv} zip={zip} setZip={setZip} country={country} setCountry={setCountry} onNext={nextStep} onBack={prevStep} />
                )}
                {step === 3 && (
                  <Step3File file={file} setFile={setFile} onBack={prevStep} onSubmit={handleFinish} handleReset={handleReset} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;