import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface FormRadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
}

const FormRadioGroup = ({ value, onValueChange }: FormRadioGroupProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">What are you interested in? *</Label>
      <RadioGroup 
        value={value} 
        onValueChange={onValueChange}
        className="grid grid-cols-3 gap-2"
        data-testid="form-radio-group"
      >
        <div className="flex items-center space-x-2 p-2 rounded-md border border-border hover:bg-primary/5 transition-colors">
          <RadioGroupItem 
            value="raffle" 
            id="raffle" 
            data-testid="radio-raffle"
            className="shrink-0"
          />
          <Label htmlFor="raffle" className="cursor-pointer text-sm flex-1">
            Raffle
          </Label>
        </div>
        
        <div className="flex items-center space-x-2 p-2 rounded-md border border-border hover:bg-primary/5 transition-colors">
          <RadioGroupItem 
            value="games-vr" 
            id="games-vr" 
            data-testid="radio-games"
            className="shrink-0"
          />
          <Label htmlFor="games-vr" className="cursor-pointer text-sm flex-1">
            Games & VR
          </Label>
        </div>
        
        <div className="flex items-center space-x-2 p-2 rounded-md border border-border hover:bg-primary/5 transition-colors">
          <RadioGroupItem 
            value="both" 
            id="both" 
            data-testid="radio-both"
            className="shrink-0"
          />
          <Label htmlFor="both" className="cursor-pointer text-sm flex-1">
            Both
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default FormRadioGroup;