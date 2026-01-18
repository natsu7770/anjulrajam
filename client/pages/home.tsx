import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingBag, ArrowRight, Leaf, ShieldCheck, Droplets } from "lucide-react";
import heroImage from "@assets/image_1766077326928.png"; // 3D Box
import layoutImage from "@assets/image_1766077315416.png"; // Flat Layout
import logo from "@assets/anjulrajam_Logo_English_1766161336520.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
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
            <Link href="/product">
              <a className="text-sm font-medium hover:text-primary transition-colors">Shop</a>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                100% Pure Herbal Formula
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight text-foreground">
                Revitalize Your Hair <span className="text-primary italic">Naturally</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Experience the ancient wisdom of Ayurveda with Anjulrajam Hibiscus Bhringraj Hair Oil. 
                Nourishes the scalp, promotes growth, and restores natural shine.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Link href="/checkout">
                  <Button size="lg" className="rounded-full px-8 text-base h-12 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                    Buy Now - ₹599
                  </Button>
                </Link>
                <Link href="/product">
                  <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12 bg-white/50 border-primary/20 hover:bg-white transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                    <Leaf className="h-4 w-4" />
                  </div>
                  Toxin Free
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  Chemical Free
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                    <Droplets className="h-4 w-4" />
                  </div>
                  25 Ingredients
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Abstract decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/10 blur-3xl rounded-full -z-10"></div>
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out">
                <img 
                  src={heroImage} 
                  alt="Anjulrajam Hibiscus Bhringraj Hair Oil Box" 
                  className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Complete Hair Care Solution</h2>
            <p className="text-muted-foreground">
              Infused with the power of Bhringraj and Hibiscus, our oil is a potent blend of 25 rare herbs 
              designed to tackle modern hair problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg shadow-blue-900/5 bg-blue-50/50 overflow-hidden group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-heading">Promotes Growth</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bhringraj, known as the 'King of Herbs', activates hair follicles and stimulates growth effectively.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg shadow-blue-900/5 bg-blue-50/50 overflow-hidden group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <Droplets className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-heading">Nourishes Scalp</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Deeply penetrates the scalp to provide essential nutrients and hydration, reducing dryness.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg shadow-blue-900/5 bg-blue-50/50 overflow-hidden group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-heading">Prevents Fall</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Strengthens roots and hair strands to significantly reduce hair fall and breakage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ingredients Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold">Nature's Best Kept Secret</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-lg">Hibiscus Flower</h4>
                      <p className="text-muted-foreground">Rich in Vitamin C and amino acids, improves blood circulation to hair follicles.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-lg">Bhringraj</h4>
                      <p className="text-muted-foreground">Treats dandruff and dry scalp, preventing greying and promoting growth.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-lg">Amla & Neem</h4>
                      <p className="text-muted-foreground">Powerful antioxidants that keep the scalp healthy and infection-free.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                   <Link href="/product">
                    <Button className="rounded-full">Read Our Story</Button>
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">ANJULRAJAM</h3>
          <p className="opacity-80 max-w-md mx-auto mb-8">
            Bringing the purity of nature to your daily hair care routine. 
            Ayurveda & Herbal solutions for modern life.
          </p>
          <div className="flex justify-center gap-6 text-sm opacity-70">
            <span>© 2025 Anjulrajam</span>
            <span>Terms</span>
            <span>Privacy</span>
            <span>WhatsApp: 8755373247</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
