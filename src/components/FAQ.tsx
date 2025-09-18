import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What happens after I submit?',
    answer: "You'll receive a confirmation email and your entry will be recorded in our raffle system. Make sure to save this confirmation for the event!",
  },
  {
    question: 'Do I need to be present at the event?',
    answer: 'For VR access, yes! You need to be physically present at our Diwali booth. Raffle details and winner announcements will be shared via email.',
  },
  {
    question: 'Will you spam me?',
    answer: 'Absolutely not. You will only receive event updates and educational content relevant to your interests. You can unsubscribe from our communications at any time.',
  },
  {
    question: 'What about COPPA compliance?',
    answer: "Parents or guardians must complete this form on behalf of their children. We do not knowingly collect children's personal information directly from children under 13.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="faq-heading">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground-muted">
            Everything you need to know about the raffle
          </p>
        </div>

        <div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-festive border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-coral transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;