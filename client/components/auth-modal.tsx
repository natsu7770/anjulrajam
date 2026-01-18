import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Leaf } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onSignIn: (email: string) => void;
  onContinueAsGuest: () => void;
}

export function AuthModal({ isOpen, onSignIn, onContinueAsGuest }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = () => {
    if (email.trim()) {
      setIsSigningIn(true);
      setTimeout(() => {
        onSignIn(email);
        setIsSigningIn(false);
        setEmail('');
      }, 500);
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-md rounded-2xl border-2 border-primary/10">
        <DialogHeader className="space-y-4 pb-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <DialogTitle className="text-2xl">Welcome to Anjulrajam</DialogTitle>
            <DialogDescription className="text-base">
              Experience the power of Ayurvedic hair care
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address (Optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSignIn()}
              className="rounded-lg"
            />
            <p className="text-xs text-muted-foreground">
              We'll send you order updates and exclusive offers
            </p>
          </div>

          <Button
            onClick={handleSignIn}
            disabled={!email.trim() || isSigningIn}
            className="w-full h-11 rounded-lg font-medium"
            data-testid="button-sign-in"
          >
            {isSigningIn ? 'Signing In...' : 'Sign In'}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-background text-muted-foreground">Or</span>
            </div>
          </div>

          <Button
            onClick={onContinueAsGuest}
            variant="outline"
            className="w-full h-11 rounded-lg font-medium border-primary/20 hover:bg-blue-50"
            data-testid="button-continue-guest"
          >
            Continue as Guest
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            You can shop as a guest or sign in to track your orders
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
