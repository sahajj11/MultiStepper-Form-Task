import React, { useState } from "react";
import Step1Basic from "./components/multiStepForm/Step1Basic";
import Step2Address from "./components/multiStepForm/Step2Address";
import Step3File from "./components/multiStepForm/Step3File";
import Stepper from "./components/ui/Stepper";

const FormContainer: React.FC = () => {
  const [step, setStep] = useState(1);

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

  const handleReset = () => {
    setTitle(""); setDescription(""); setPhone("");
    setStreet(""); setCity(""); setStateProv(""); setZip(""); setCountry("");
    setFile(null); setStep(1);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    // This outer div is transparent so the App.tsx background shows through clearly
    <div className="flex items-center justify-center min-h-screen py-12 px-4">
      
      {/* THE GLASS CARD */}
      <div className="w-full max-w-xl 
                      bg-white/10             /* Very transparent white */
                      backdrop-blur-sm       /* Blurs only what is behind the card */
                      rounded-3xl 
                      shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] /* Deep soft shadow */
                      border border-white/20  /* Thin glass border */
                      p-8 
                      relative 
                      overflow-hidden">
        
        {/* Ferrari Red Accent Line at the top */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#e10600] shadow-[0_0_15px_rgba(225,6,0,0.5)]" />

        <div className="relative z-10">
          <header className="mb-8">
            <h1 className="text-2xl font-black italic tracking-tighter text-white flex items-center gap-2">
              <span className="bg-[#e10600] text-white px-2 py-0.5 rounded-sm not-italic">F1</span> 
              DRIVE REGISTRATION
            </h1>
            <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.3em] mt-1">Scuderia Ferrari / Maranello</p>
          </header>

          <Stepper currentStep={step} />

          <div className="mt-10">
            {step === 1 && (
              <Step1Basic title={title} setTitle={setTitle} description={description} setDescription={setDescription} phone={phone} setPhone={setPhone} onNext={nextStep}/>
            )}
            {step === 2 && (
              <Step2Address street={street} setStreet={setStreet} city={city} setCity={setCity} stateProv={stateProv} setStateProv={setStateProv} zip={zip} setZip={setZip} country={country} setCountry={setCountry} onNext={nextStep} onBack={prevStep} />
            )}
            {step === 3 && (
              <Step3File file={file} setFile={setFile} onBack={prevStep} onSubmit={() => alert('Data Sent to Pit Wall!')} handleReset={handleReset} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;