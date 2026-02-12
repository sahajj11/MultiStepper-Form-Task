export interface StepProps {
  onNext?: () => void;
  onBack?: () => void;
  // Add specific field types here
}

export interface BasicInfoProps extends StepProps {
  title: string;
  setTitle: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  phone: string | undefined;
  setPhone: (val: string | undefined) => void;
}