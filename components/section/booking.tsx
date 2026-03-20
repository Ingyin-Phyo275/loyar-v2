"use client";
import { Button } from "../ui/button";

export default function Booking() {
  return (
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Ready to Ride?
      </h2>
      <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
        Download the Loyar Taxi app or book directly through our website. Your
        ride is just a few taps away.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          size="lg"
          variant="secondary"
          className="bg-background text-foreground hover:bg-background/90"
        >
          Download App
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Book Online
        </Button>
      </div>
    </div>
  );
}
