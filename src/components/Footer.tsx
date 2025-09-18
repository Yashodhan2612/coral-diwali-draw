import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import coralLogo from '@/assets/coral-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <a href="https://www.coralacademy.com" target="_blank" rel="noopener noreferrer" className="flex items-center group">
            <img src={coralLogo} alt="Coral Academy" className="h-6 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="sr-only">Coral Academy</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <span className="text-foreground-muted">
              © {new Date().getFullYear()} Coral Academy
            </span>
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-foreground-muted hover:text-coral transition-colors">
                  Terms
                </button>
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

            <Dialog>
              <DialogTrigger asChild>
                <button className="text-foreground-muted hover:text-coral transition-colors">
                  Privacy
                </button>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;