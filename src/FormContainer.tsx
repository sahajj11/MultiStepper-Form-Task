import React, { useState } from "react";
import Step1Basic from "./components/multiStepForm/Step1Basic";
import Step2Address from "./components/multiStepForm/Step2Address";
import Step3File from "./components/multiStepForm/Step3File";

const FormContainer: React.FC = () => {
  const [step, setStep] = useState(1);

  // Requirement #1
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");

  // Requirement #2
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateProv, setStateProv] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  // Requirement #3
  const [file, setFile] = useState<File | null>(null);

  //Reset Logic
  const handleReset = () => {
    setTitle("");
    setDescription("");
    setPhone("");
    setStreet("");
    setCity("");
    setStateProv("");
    setZip("");
    setCountry("");
    setFile(null);
    setStep(1);
  };

  //Navigation Logic
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <>
    <div>
        <div>
            <Stepper currentStep={step} />

            <div>
                {
                    step === 1 && (
                        <Step1Basic title={title} setTitle={setTitle} description={description} setDescription={setDescription} phone={phone} setPhone={setPhone} onNext={nextStep}/>
                    )
                }
                {
                    step === 2 && (
                        <Step2Address street={street} setStreet={setStreet} city={city} setCity={setCity} stateProv={stateProv} setStateProv={setStateProv} zip={zip} setZip={setZip} country={country} setCountry={setCountry} onNext={nextStep} onBack={prevStep} />
                    )
                }
                {
                    step === 3 && (
                        <Step3File file={file} setFile={setFile} onBack={prevStep} onSubmit={() => alert('Submitted!')} handleReset={handleReset} />
                    )
                }
            </div>
        </div>
    </div>
      
    </>
  );
};

export default FormContainer;