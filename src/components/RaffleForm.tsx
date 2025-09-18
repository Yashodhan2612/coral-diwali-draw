import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  childAge: string;
  kidsCount: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  ageOrCount?: string;
}

const RaffleForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    childAge: '',
    kidsCount: '',
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

    if (!formData.childAge.trim() && !formData.kidsCount.trim()) {
      newErrors.ageOrCount = 'Please provide either child age or number of kids';
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
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    if ((field === 'childAge' || field === 'kidsCount') && errors.ageOrCount) {
      setErrors(prev => ({ ...prev, ageOrCount: undefined }));
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
        <div className="card-festive p-6 backdrop-blur-sm">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-gold" />
              Enter the Raffle
              <Sparkles className="h-6 w-6 text-coral" />
            </h2>
            <p className="text-foreground-muted">
              Join us for Diwali celebrations and VR fun!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" data-testid="raffle-form">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                data-testid="form-name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Your full name"
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                data-testid="form-email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your@email.com"
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            {/* Age/Kids Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="childAge">Child Age</Label>
                <Input
                  id="childAge"
                  type="number"
                  data-testid="form-childAge"
                  value={formData.childAge}
                  onChange={(e) => handleInputChange('childAge', e.target.value)}
                  placeholder="e.g. 10"
                  min="1"
                  max="18"
                  className={errors.ageOrCount ? 'border-destructive' : ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kidsCount"># of Kids</Label>
                <Input
                  id="kidsCount"
                  type="number"
                  data-testid="form-kidsCount"
                  value={formData.kidsCount}
                  onChange={(e) => handleInputChange('kidsCount', e.target.value)}
                  placeholder="e.g. 2"
                  min="1"
                  max="10"
                  className={errors.ageOrCount ? 'border-destructive' : ''}
                />
              </div>
            </div>
            {errors.ageOrCount && (
              <p className="text-sm text-destructive">{errors.ageOrCount}</p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="festive"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
              data-testid="cta-submit"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Entering Raffle...
                </>
              ) : (
                'Enter Raffle'
              )}
            </Button>

            {/* Terms and Privacy */}
            <div className="text-xs text-foreground-muted space-y-2">
              <p>
                By entering, you consent to Coral Academy creating an account on your behalf and agree to our{' '}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-coral hover:underline">Terms of Use</button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Terms of Use</DialogTitle>
                    </DialogHeader>
                    <div className="prose prose-sm max-w-none">
                      <h3>Raffle Terms</h3>
                      <p>By participating in this raffle, you agree to:</p>
                      <ul>
                        <li>Provide accurate information</li>
                        <li>Allow Coral Academy to create an account for educational purposes</li>
                        <li>Receive event-related communications</li>
                        <li>Comply with event rules and regulations</li>
                      </ul>
                      <h3>Eligibility</h3>
                      <p>This raffle is open to parents/guardians of children aged 8-13. Winners will be contacted via email.</p>
                    </div>
                  </DialogContent>
                </Dialog>
                {' '}and{' '}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-coral hover:underline">Privacy Policy</button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Privacy Policy</DialogTitle>
                    </DialogHeader>
                    <div className="prose prose-sm max-w-none">
                      <h3>Data Collection</h3>
                      <p>We collect only the information you provide: name, email, and child/family information.</p>
                      <h3>Data Use</h3>
                      <p>Your information is used to:</p>
                      <ul>
                        <li>Process your raffle entry</li>
                        <li>Create educational accounts</li>
                        <li>Send event updates and educational content</li>
                      </ul>
                      <h3>Data Protection</h3>
                      <p>We implement industry-standard security measures to protect your information. We do not sell or share your data with third parties.</p>
                    </div>
                  </DialogContent>
                </Dialog>
                .
              </p>
              <p>
                You also agree to receive event updates (opt-out anytime).
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default RaffleForm;