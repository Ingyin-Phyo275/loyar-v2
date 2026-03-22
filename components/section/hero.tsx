"use client";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../ui/typewriter-efffect";
import { Button } from "../ui/button";
import { ArrowRight, Clock, Shield, Star, Car, Zap, Crown } from "lucide-react";
import { Spotlight } from "../ui/spotlight-new";

export default function Hero() {
  const features = [
    { icon: Shield, title: "Safe & Secure" },
    { icon: Clock, title: "24/7 Available" },
    { icon: Star, title: "Top Rated" },
  ];

  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: "Loyar", className: "text-primary" },
    { text: "Taxi" },
  ];

  const taxiTypes = [
    {
      name: "Standard",
      icon: Car,
      description: "Affordable everyday rides",
    },
    {
      name: "EV Taxi",
      icon: Zap,
      description: "Eco-friendly electric rides",
    },
    {
      name: "Luxury",
      icon: Crown,
      description: "Premium comfort experience",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 overflow-hidden bg-linear-to-br from-background via-secondary/40 to-background">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full" />

      <Spotlight />

      <div className="grid grid-cols-1 gap-10 max-w-7xl w-full z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Badge */}
          <div className="mb-6 px-4 py-2 text-sm rounded-full bg-primary/10 text-primary backdrop-blur border border-primary/20">
            Your Trusted Ride Partner
          </div>

          {/* Title */}
          <TypewriterEffect words={words} />

          {/* Description */}
          <p className="mt-4 text-base md:text-md  text-muted-foreground max-w-xl leading-relaxed">
            Safe. Reliable. Transparent. Your trusted ride partner in Myanmar.
          </p>

          {/* Buttons */}
          <div className="flex flex-col max-w-sm:flex-row gap-4 mt-8">
            <Button
              size="lg"
              className="group bg-primary text-white hover:scale-105 transition-all shadow-lg shadow-primary/30"
              asChild
            >
              <a href="#book">
                Book a Ride
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/40 hover:bg-primary/10 backdrop-blur"
              asChild
            >
              <a href="#services">View Services</a>
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mt-10">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <f.icon className="text-primary" size={18} />
                {f.title}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}

      </div>
    </section>
  );
}
