"use client";

import { motion } from "framer-motion";
import {
  Car,
  Plane,
  Users,
  Shield,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Quote,
  FileText,
  Lock,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper, FadeInWhenVisible } from "@/components/page-wrapper";
import { TypewriterEffect } from "@/components/ui/typewriter-efffect";
import About from "@/components/section/about";
import Stats from "@/components/section/stats";
import Contact from "@/components/section/contact";
import Booking from "@/components/section/booking";
import Legal from "@/components/section/legal";
import Reviews from "@/components/section/review";
import Blog from "@/components/section/blog";
import Service from "@/components/section/service";
import Hero from "@/components/section/hero";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        <Hero />
      </section>

      {/* Stats Section */}
      <SectionWrapper className="py-16 bg-foreground text-background">
        <Stats />
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-background" id="about">
        <About />
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-secondary" id="services">
        <Service />
      </SectionWrapper>

      {/* Blog Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-background" id="blog">
        <Blog />
      </SectionWrapper>

      {/* Reviews Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-secondary" id="reviews">
        <Reviews />
      </SectionWrapper>

      {/* Legal & Policies Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-background" id="legal">
        <Legal />
      </SectionWrapper>

      {/* Book a Ride CTA */}
      <SectionWrapper className="py-20 lg:py-28 bg-primary" id="book">
        <Booking />
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-background" id="contact">
        <Contact />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
