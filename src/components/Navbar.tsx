import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/enhanced-button";
import { Moon, Sun, Monitor } from "lucide-react";
import coralLogo from "@/assets/coral-logo.svg";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <Sun className="h-4 w-4" />;
      case 'dark': return <Moon className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={coralLogo}
              alt="Coral Academy" 
              className="h-8 w-auto"
              data-testid="nav-logo"
            />
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {getThemeIcon()}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;