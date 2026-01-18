import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ShoppingBag, MessageCircle } from "lucide-react";

export default function Confirmation() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-2xl border-t-8 border-t-green-500">
        <CardContent className="pt-12 pb-8 px-8 text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-4">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          
          <div>
            <h1 className="text-2xl font-bold font-heading mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your order has been placed successfully.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-2 text-left">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order ID:</span>
              <span className="font-medium font-mono">#ORD-12345</span>
            </div>
            <div className="flex justify-between">
               <span className="text-muted-foreground">Est. Delivery:</span>
               <span className="font-medium">3-5 Days</span>
            </div>
          </div>
           
          <div className="flex flex-col gap-3">
             <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
               <a href="https://wa.me/8755373247?text=Hi%20I%20have%20a%20question%20about%20my%20order%20ORD-12345" target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Contact on WhatsApp
               </a>
             </Button>
            <Link href="/">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
