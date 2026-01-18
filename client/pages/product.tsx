import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Truck, Shield, ShoppingBag } from "lucide-react";
import heroImage from "@assets/image_1766077326928.png"; // 3D Box
import layoutImage from "@assets/image_1766077315416.png"; // Flat Layout
import logo from "@assets/anjulrajam_Logo_English_1766161336520.jpg";

export default function Product() {
  return (
    <div className="min-h-screen bg-background">
       <nav className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="h-12 flex items-center">
              <img src={logo} alt="Anjulrajam Logo" className="h-full object-contain" />
            </a>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/">
              <a className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            </Link>
            <Link href="/checkout">
              <Button size="sm" className="gap-2 rounded-full">
                <ShoppingBag className="h-4 w-4" />
                Cart (1)
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 lg:py-12">
        <Link href="/">
          <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </a>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Gallery */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-50 flex items-center justify-center aspect-square relative overflow-hidden group">
               <div className="absolute inset-0 bg-radial-gradient from-blue-100/50 to-transparent opacity-50"></div>
               <img 
                  src={heroImage} 
                  alt="Anjulrajam Hair Oil Box" 
                  className="w-full max-w-sm h-auto drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500" 
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white rounded-xl p-2 border border-blue-50 cursor-pointer hover:border-primary/30 transition-colors">
                  <img src={heroImage} alt="Side View" className="w-full h-full object-contain" />
               </div>
               <div className="bg-white rounded-xl p-2 border border-blue-50 cursor-pointer hover:border-primary/30 transition-colors">
                  <img src={layoutImage} alt="Package Details" className="w-full h-full object-contain scale-110" />
               </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-2">
                Hibiscus Bhringraj Hair Oil
              </h1>
              <p className="text-lg text-primary font-medium">100ml • 100% Ayurvedic</p>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-foreground">₹599</span>
              <span className="text-xl text-muted-foreground line-through">₹799</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-sm font-bold">25% OFF</span>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              A time-tested Ayurvedic formula that combines the potency of Bhringraj, Hibiscus, and 23 other rare herbs. 
              This oil penetrates deep into the scalp to strengthen roots, reduce hair fall, and restore natural shine 
              without any harmful chemicals.
            </p>

            <div className="space-y-3">
              {[
                "Promotes healthy hair growth",
                "Controls hair fall & dandruff",
                "Prevents premature greying",
                "Non-sticky & easy to wash",
                "Suitable for all hair types"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <Link href="/checkout">
                <Button size="lg" className="w-full lg:w-auto min-w-[200px] h-14 text-lg rounded-full shadow-xl shadow-primary/20">
                  Buy Now
                </Button>
              </Link>
              <p className="mt-4 text-xs text-muted-foreground text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                <Shield className="h-3 w-3" /> Secure Checkout • <Truck className="h-3 w-3" /> Fast Delivery
              </p>
            </div>
          </div>
        </div>

        {/* Ingredients Detail Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">What's Inside?</h2>
          <div className="bg-white rounded-3xl p-6 lg:p-12 shadow-sm border border-blue-50">
             <img src={layoutImage} alt="Ingredients Detail" className="w-full h-auto rounded-xl" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { name: "Bhringraj", desc: "Prevents hair fall and promotes growth." },
              { name: "Hibiscus", desc: "Conditions hair and prevents dryness." },
              { name: "Amla", desc: "Rich in Vitamin C, strengthens roots." },
              { name: "Neem", desc: "Antifungal properties keep scalp healthy." }
            ].map((ing, i) => (
              <div key={i} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                <h3 className="font-heading font-bold text-lg mb-2 text-primary">{ing.name}</h3>
                <p className="text-sm text-muted-foreground">{ing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
