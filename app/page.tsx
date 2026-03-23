// app/page.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/page-wrapper";
import Hero from "@/components/section/hero";       // Server component
import About from "@/components/section/about";     // Server component
import Stats from "@/components/section/stats";     // Server component
import Service from "@/components/section/service"; // Server component
import Blog from "@/components/section/blog";       // Server component
import Reviews from "@/components/section/review";  // Server component
import Legal from "@/components/section/legal";     // Server component
import BookingClient from "@/components/section/booking"; // Client component
import ContactClient from "@/components/section/contact"; // Client component

// export const metadata = {
//   title: "Loyar Myanmar",
//   description:
//     "Book reliable taxi services in Myanmar with Loyar Taxi. Loyar Thwar, Loyar Sar, Loyar Poh, and Airport Checkin rides.",
//   keywords: "Myanmar taxi, Loyar Taxi, airport transfer, safe transport",
// };

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-0 overflow-hidden max-sm:py-0">
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

      {/* Book a Ride CTA (Interactive, Client Component) */}
      <SectionWrapper className="py-20 lg:py-28 bg-primary" id="book">
        <BookingClient />
      </SectionWrapper>

      {/* Contact Section (Interactive, Client Component) */}
      <SectionWrapper className="py-20 lg:py-28 bg-background" id="contact">
        <ContactClient />
      </SectionWrapper>

      <Footer />
    </main>
  );
}