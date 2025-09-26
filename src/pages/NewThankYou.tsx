import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/enhanced-button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ExternalLink, Instagram, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

interface Question {
  id: string;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 'q1',
    question: 'What financial topic interests you most for your child?',
    options: ['Saving Money', 'Understanding Money Value', 'Smart Spending']
  },
  {
    id: 'q2', 
    question: 'How does your child currently learn about money?',
    options: ['Allowance System', 'Family Discussions', 'School Only']
  },
  {
    id: 'q3',
    question: 'What age-appropriate financial skill would you prioritize?',
    options: ['Basic Math with Money', 'Needs vs Wants', 'Simple Budgeting']
  }
];

const NewThankYou = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [waitlistChecked, setWaitlistChecked] = useState(false);

  useEffect(() => {
    // Update page title for SEO
    document.title = 'Thank You - Financial Literacy Program | Coral Academy';
    
    // Optional: Track page view or other analytics
    console.log('Thank you page viewed');
  }, []);

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const currentQ = questions[currentQuestion];
  const selectedAnswer = answers[currentQ.id];

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* FL Class Hero */}
            <div className="text-center mb-12" data-testid="thankyou-fl-hero">
              <motion.div
                className="mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.4 }}
              >
                {/* FL Class Picture Placeholder */}
                <div className="w-full max-w-md mx-auto mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-yellow/20 aspect-video flex items-center justify-center border-2 border-border">
                  <div className="text-center space-y-2">
                    <div className="text-4xl">🏦💡</div>
                    <p className="text-sm font-medium text-foreground-muted">FL Class Photo</p>
                  </div>
                </div>
              </motion.div>

              <p className="text-lg font-semibold text-primary mb-2">Coral Academy's</p>
              <h1 className="text-hero mb-6">
                Financial Literacy for Kids{' '}
                <span className="bg-gradient-festive bg-clip-text text-transparent">
                  (8–13)
                </span>
              </h1>
            </div>

            {/* 3 Hooklines */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              data-testid="thankyou-fl-hooklines"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 card-festive">
                  <div className="text-3xl mb-4">💰</div>
                  <h3 className="font-semibold text-lg mb-2">Smart Money Habits</h3>
                  <p className="text-foreground-muted text-sm">Learn saving, spending, and earning fundamentals through interactive games and real-world scenarios.</p>
                </div>
                
                <div className="text-center p-6 card-festive">
                  <div className="text-3xl mb-4">🎮</div>
                  <h3 className="font-semibold text-lg mb-2">Fun Learning Games</h3>
                  <p className="text-foreground-muted text-sm">Engaging activities that make financial concepts easy and exciting for young minds to grasp.</p>
                </div>
                
                <div className="text-center p-6 card-festive">
                  <div className="text-3xl mb-4">🌟</div>
                  <h3 className="font-semibold text-lg mb-2">Future-Ready Skills</h3>
                  <p className="text-foreground-muted text-sm">Build confidence with money decisions that will benefit them throughout their entire life journey.</p>
                </div>
              </div>
            </motion.div>

            {/* Carousel: 3 Quick Questions */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              data-testid="thankyou-fl-carousel"
            >
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">3 Quick Questions for Parents</h2>
                
                <div className="card-festive p-8">
                  {/* Question Progress */}
                  <div className="flex justify-center items-center gap-2 mb-6">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentQuestion 
                            ? 'bg-primary' 
                            : index < currentQuestion 
                            ? 'bg-primary/50' 
                            : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Current Question */}
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold mb-6">{currentQ.question}</h3>
                    
                    <div className="space-y-3">
                      {currentQ.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(currentQ.id, option)}
                          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                            selectedAnswer === option
                              ? 'border-primary bg-primary/10 text-primary font-medium'
                              : 'border-border hover:border-primary/50 hover:bg-primary/5'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      onClick={prevQuestion}
                      disabled={currentQuestion === 0}
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>

                    <span className="text-sm text-foreground-muted">
                      {currentQuestion + 1} of {questions.length}
                    </span>

                    <Button
                      variant="outline"
                      onClick={nextQuestion}
                      disabled={currentQuestion === questions.length - 1}
                      className="flex items-center gap-2"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Waitlist Checkbox */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              data-testid="thankyou-fl-waitlist"
            >
              <div className="flex items-center justify-center gap-3 p-6 card-festive max-w-md mx-auto">
                <Checkbox
                  id="waitlist"
                  checked={waitlistChecked}
                  onCheckedChange={(checked) => setWaitlistChecked(checked as boolean)}
                  className="shrink-0"
                />
                <Label htmlFor="waitlist" className="cursor-pointer font-medium">
                  Add me to the Financial Literacy class waitlist
                </Label>
              </div>
            </motion.div>

            {/* Final Thank-You */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="card-festive p-8 max-w-2xl mx-auto">
                <div className="text-4xl mb-4">🙏</div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Thanks for confirming!</h2>
                <p className="text-foreground-muted">
                  We'll be in touch with class updates and event details. 
                  {waitlistChecked && ' You\'ve been added to our Financial Literacy waitlist!'}
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {/* Primary CTA */}
              <div className="mb-8">
                <Button
                  variant="festive"
                  size="xl"
                  className="min-w-48"
                  asChild
                >
                  <a href="https://www.coralacademy.com" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Visit Coral Academy
                  </a>
                </Button>
              </div>

              {/* Secondary Social CTAs */}
              <div className="space-y-4">
                <p className="text-foreground-muted">Follow us for updates:</p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-pink-glow/10 hover:border-pink-glow/30 hover:text-pink-glow transition-all duration-200"
                    asChild
                  >
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-coral/10 hover:border-coral/30 hover:text-coral transition-all duration-200"
                    asChild
                  >
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewThankYou;