import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../ui/typewriter-efffect";
import { Button } from "../ui/button";
import { ArrowRight, Clock, Shield, Star } from "lucide-react";
export default function Hero() {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "All drivers are verified and vehicles are regularly inspected",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Book a ride anytime, day or night, wherever you are",
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "4.9 star rating from over 100,000 happy customers",
    },
  ];

  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: "Loyar", className: "text-primary" },
    { text: "Taxi" },
  ];
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-secondary via-background to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Your Trusted Ride Partner
            </span>
            <TypewriterEffect words={words} />
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Get to Your{" "}
                <span className="text-primary">Destination</span>{" "}
                Safely & On Time
              </h1> */}
            <p className="text-lg text-muted-foreground mb-8 max-w-lg px-4">
              Book your ride in seconds. Loyar Taxi offers safe, reliable, and
              affordable transportation services with professional drivers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="#book">
                  Book a Ride <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <feature.icon className="text-primary" size={20} />
                  <span className="text-sm font-medium text-foreground">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                <div className="relative bg-linear-to-br from-primary to-primary/80 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-background rounded-2xl p-6 shadow-lg">
                    <h3 className="font-semibold text-foreground mb-4">
                      Quick Book
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-sm text-muted-foreground">
                          Current Location
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">
                          Where to?
                        </span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Find Driver
                      </Button>
                    </div>
                  </div>
                </div>
              </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
