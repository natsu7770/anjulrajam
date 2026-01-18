import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, CreditCard, Truck, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@assets/image_1766077326928.png";
import logo from "@assets/anjulrajam_Logo_English_1766161336520.jpg";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<"prepaid" | "cod">("prepaid");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const productPrice = 599;
  const courierCharge = paymentMethod === "cod" ? 70 : 0;
  const total = productPrice + courierCharge;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock processing
    toast({
      title: "Processing Order",
      description: "Please wait while we secure your order...",
    });

    setTimeout(() => {
      setLocation("/confirmation/ORD-12345");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center">
           <Link href="/">
            <a className="h-12 flex items-center">
              <img src={logo} alt="Anjulrajam Logo" className="h-full object-contain" />
            </a>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-5xl mx-auto">
          <Link href="/product">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Product
            </a>
          </Link>
          
          <h1 className="text-3xl font-heading font-bold mb-8">Secure Checkout</h1>

          <form onSubmit={handlePayment} className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Shipping Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number (for updates)</Label>
                    <Input id="whatsapp" type="tel" placeholder="+91 98765 43210" />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="House No, Street, Locality" required />
                  </div>
                   <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={(val) => setPaymentMethod(val as "prepaid" | "cod")}
                    className="space-y-4"
                  >
                    <div className={`flex items-start space-x-3 border p-4 rounded-lg transition-colors ${paymentMethod === 'prepaid' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                      <RadioGroupItem value="prepaid" id="prepaid" />
                      <div className="flex-1">
                        <Label htmlFor="prepaid" className="font-bold cursor-pointer text-base">Online Payment (Prepaid)</Label>
                        <p className="text-sm text-muted-foreground mt-1">Free Shipping via Razorpay (UPI, Card, Netbanking)</p>
                      </div>
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className={`flex items-start space-x-3 border p-4 rounded-lg transition-colors ${paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                      <RadioGroupItem value="cod" id="cod" />
                      <div className="flex-1">
                        <Label htmlFor="cod" className="font-bold cursor-pointer text-base">Cash on Delivery (COD)</Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          Pay ₹70 courier charge now. The remaining product amount (₹599) is payable in cash at delivery.
                        </p>
                         {paymentMethod === 'cod' && (
                          <div className="mt-3 text-xs bg-yellow-50 text-yellow-800 p-2 rounded border border-yellow-200 flex items-start gap-2">
                             <div className="shrink-0 mt-0.5">ℹ️</div>
                             For Cash on Delivery, you pay ₹70 courier charge in advance. The remaining product amount is payable in cash at delivery.
                          </div>
                        )}
                      </div>
                      <Truck className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-lg border-t-4 border-t-primary">
                <CardHeader className="bg-blue-50/50 border-b border-blue-100 pb-6">
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 border rounded bg-white p-1 shrink-0">
                      <img src={heroImage} alt="Product" className="w-full h-full object-contain" />
                    </div>
                    <div>
                       <h4 className="font-medium text-sm">Hibiscus Bhringraj Hair Oil</h4>
                       <p className="text-xs text-muted-foreground mt-1">Qty: 1</p>
                    </div>
                    <div className="ml-auto font-medium">₹{productPrice}</div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{productPrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Courier Charge</span>
                       {paymentMethod === 'prepaid' ? (
                        <span className="text-green-600 font-medium">Free</span>
                       ) : (
                        <span>₹{courierCharge}</span>
                       )}
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-bold text-lg">
                    <span>Grand Total</span>
                    <span>₹{total}</span>
                  </div>
                  
                  {paymentMethod === 'cod' && (
                     <div className="text-xs text-center text-muted-foreground bg-gray-50 p-2 rounded">
                        Payable Now: <span className="font-bold text-foreground">₹70</span>
                        <br/>
                        Payable on Delivery: <span className="font-bold text-foreground">₹{productPrice}</span>
                     </div>
                  )}

                </CardContent>
                <CardFooter className="flex-col gap-4">
                  <Button className="w-full h-12 text-base font-bold shadow-md" type="submit">
                    {paymentMethod === 'prepaid' ? `Pay Now ₹${total}` : `Pay Advance ₹70`}
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-3 w-3" /> Secure Payment by Razorpay
                  </div>
                </CardFooter>
              </Card>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
