import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient"; // Changed from ../../src
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/use-auth";
import { AuthModal } from "@/components/auth-modal";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Product from "@/pages/product";
import Checkout from "@/checkout";
import Confirmation from "@/confirmation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/confirmation/:id" component={Confirmation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { hasSeenModal, isLoading, signIn, continueAsGuest } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AuthModal
          isOpen={!hasSeenModal}
          onSignIn={signIn}
          onContinueAsGuest={continueAsGuest}
        />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
