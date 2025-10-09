import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FormRadioGroup from '@/components/FormRadioGroup';

interface FormData {
  interest: string;
  name: string;
  email: string;
  phone: string;
  identity: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  identity?: string;
}

const NewRaffleForm = () => {
  const [formData, setFormData] = useState<FormData>({
    interest: 'games-vr', // Default to "Games & VR"
    name: '',
    email: '',
    phone: '',
    identity: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.identity) {
      newErrors.identity = 'Please select who you are';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setShowConfetti(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 600));

    toast({
      title: "Entry Submitted! 🎉",
      description: "You're now entered in the Diwali raffle!",
    });

    navigate('/thank-you');
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear related errors
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      {/* Confetti Effect */}
      {showConfetti && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -10,
                rotate: 0,
              }}
              animate={{
                y: window.innerHeight + 10,
                rotate: 360,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: Math.random() * 0.5,
              }}
            />
          ))}
        </motion.div>
      )}

      <motion.div
        className="w-full max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="rounded-xl border border-primary/20 bg-card/95 backdrop-blur-md p-4 sm:p-6 shadow-lg">
          <div className="mb-4 text-center">
            <h2 className="text-lg font-semibold mb-1 flex items-center justify-center gap-2 text-primary">
              <Sparkles className="h-5 w-5" />
              Register Now!
              <Sparkles className="h-5 w-5" />
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" data-testid="raffle-form">
            {/* Radio Group */}
            <FormRadioGroup 
              value={formData.interest}
              onValueChange={(value) => handleInputChange('interest', value)}
            />

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-sm">Name *</Label>
                <Input
                  id="name"
                  data-testid="form-name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  className={errors.name ? 'border-destructive h-9' : 'h-9'}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="email" className="text-sm">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  data-testid="form-email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  className={errors.email ? 'border-destructive h-9' : 'h-9'}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone & Identity Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  data-testid="form-phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Your phone number"
                  className={errors.phone ? 'border-destructive h-9' : 'h-9'}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone}</p>
                )}
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="identity" className="text-sm">About yourself? *</Label>
                <Select 
                  value={formData.identity} 
                  onValueChange={(value) => handleInputChange('identity', value)}
                >
                  <SelectTrigger 
                    className={errors.identity ? 'border-destructive h-9' : 'h-9'}
                    data-testid="form-identity"
                    aria-invalid={!!errors.identity}
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border shadow-lg">
                    <SelectItem value="kid-8-13">
                      I am a kid (8-13 years)
                    </SelectItem>
                    <SelectItem value="parent-8-13">
                      I am a Parent of a kid (8-13 years)
                    </SelectItem>
                    <SelectItem value="neither">
                      Neither of above
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.identity && (
                  <p className="text-xs text-destructive">{errors.identity}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-10 bg-primary hover:bg-primary/90 text-white font-medium"
              disabled={isSubmitting}
              data-testid="form-submit"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Continue to Step 2'
              )}
            </Button>

            {/* Disclaimer */}
            <div className="text-xs text-muted-foreground text-center pt-1">
              <p>
                By filling this form, you agree to receive event updates via your registered email.
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default NewRaffleForm;