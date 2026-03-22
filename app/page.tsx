"use server"
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/page-wrapper";
import About from "@/components/section/about";
import Stats from "@/components/section/stats";
import Contact from "@/components/section/contact";
import Booking from "@/components/section/booking";
import Legal from "@/components/section/legal";
import Reviews from "@/components/section/review";
import Blog from "@/components/section/blog";
import Service from "@/components/section/service";
import Hero from "@/components/section/hero";
import { getUsers } from "@/server/actions/testActions";
export default async function HomePage() {
  const users = await getUsers();
  console.log("users", users)
  return (
    <main className="min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-0 overflow-hidden max-sm:py-0"
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

      {/* <SectionWrapper className=" bg-background" id="guide">
        <TimelineDemo />
      </SectionWrapper> */}

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
