"use client";
import { FadeInWhenVisible } from "../page-wrapper";
import { Card, CardContent } from "../ui/card";
import {
  Car,
  CheckCircle,
  Clock,
  Pizza,
  Plane,
  Shield,
  Star,
  Truck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
export default function Service() {

  const services = [
    {
      icon: Car,
      title: "Loyar Thwar",
      description:
        "Premium ride service for business professionals. Luxury vehicles with professional drivers for your important meetings.",
    },
    {
      icon: Pizza,
      title: "Loyar Sar",
      description:
        "Affordable shared rides for daily commuters. Split the fare and make new friends on your journey.",
    },
    {
      icon: Truck,
      title: "Loyar Poh",
      description:
        "Family-friendly rides with spacious vehicles. Child seats available and extra luggage space for family trips.",
    },
    {
      icon: Plane,
      title: "Airport Checkin",
      description:
        "Hassle-free airport transfers. We ensure you reach on time with flight tracking and meet & greet service.",
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Choose Your Perfect Ride
        </h2>
        <p className="text-muted-foreground">
          From daily commutes to airport transfers, we have the perfect ride
          option for every occasion.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <FadeInWhenVisible key={service.title} delay={index * 0.1}>
            <Card className="cursor-pointer group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 h-full bg-background">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon
                    size={28}
                    className="text-primary group-hover:text-primary-foreground"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm grow">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Choose Loyar Taxi?
          </h3>
          <div className="space-y-4">
            {[
              "Professional and verified drivers",
              "Real-time ride tracking",
              "Transparent and fair pricing",
              "24/7 customer support",
              "Multiple payment options",
            ].map((item, index) => (
              <FadeInWhenVisible key={item} delay={index * 0.1}>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <span className="text-foreground">{item}</span>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <Card className="p-6 bg-primary text-primary-foreground  hover:-translate-y-2 hover:shadow-xl hover:border-primary/70 transition-all duration-300 ease-in-out">
              <Shield size={32} className="mb-4" />
              <h4 className="font-semibold text-lg mb-2">100% Safe</h4>
              <p className="text-primary-foreground/80 text-sm">
                All rides are insured
              </p>
            </Card>
            <Card className="p-6 bg-background hover:-translate-y-2 hover:shadow-xl hover:border-primary/70 transition-all duration-300 ease-in-out">
              <Clock size={32} className="mb-4 text-primary" />
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                Quick Pickup
              </h4>
              <p className="text-muted-foreground text-sm">Under 5 minutes</p>
            </Card>
          </div>
          <div className="space-y-4 mt-8">
            <Card className="p-6 bg-background hover:-translate-y-2 hover:shadow-xl hover:border-primary/70 transition-all duration-300 ease-in-out">
              <Star size={32} className="mb-4 text-primary" />
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                Top Rated
              </h4>
              <p className="text-muted-foreground text-sm">
                4.9 from 100K+ reviews
              </p>
            </Card>
            <Card className="p-6 bg-foreground text-background hover:-translate-y-2 hover:shadow-xl hover:border-primary/70 transition-all duration-300 ease-in-out">
              <Car size={32} className="mb-4 text-primary" />
              <h4 className="font-semibold text-lg mb-2">Modern Fleet</h4>
              <p className="text-background/80 text-sm">
                Well-maintained vehicles
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

