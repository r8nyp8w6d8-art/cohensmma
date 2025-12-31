import { useState } from "react";
import { Accessibility, ZoomIn, ZoomOut, Eye, Moon, Sun, X } from "lucide-react";

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle("high-contrast");
  };

  const resetSettings = () => {
    setFontSize(100);
    setHighContrast(false);
    document.documentElement.style.fontSize = "100%";
    document.body.classList.remove("high-contrast");
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        <div className="mb-3 glass-card rounded-xl border border-border p-4 animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <span className="text-body-sm text-foreground font-medium">נגישות</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <span className="text-body-sm text-muted-foreground">גודל טקסט</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFontSize}
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="הקטן טקסט"
                >
                  <ZoomOut className="w-4 h-4 text-foreground" />
                </button>
                <span className="text-body-sm text-foreground w-12 text-center">{fontSize}%</span>
                <button
                  onClick={increaseFontSize}
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="הגדל טקסט"
                >
                  <ZoomIn className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>

            <button
              onClick={toggleHighContrast}
              className="w-full flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <span className="text-body-sm text-muted-foreground">ניגודיות גבוהה</span>
              <div className={`w-10 h-6 rounded-full transition-colors ${highContrast ? 'bg-primary' : 'bg-muted'} flex items-center`}>
                <div className={`w-4 h-4 rounded-full bg-foreground transition-transform ${highContrast ? 'translate-x-1' : 'translate-x-5'}`} />
              </div>
            </button>

            <button
              onClick={resetSettings}
              className="w-full text-body-sm text-primary hover:underline text-center pt-2"
            >
              איפוס הגדרות
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors btn-scale"
        aria-label="תפריט נגישות"
      >
        <Accessibility className="w-6 h-6 text-primary-foreground" />
      </button>
    </div>
  );
};

export default AccessibilityMenu;
