import React from 'react'
import { Card, CardContent } from "../ui/card";
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
            <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our support team is here to help you 24/7. Reach out to us
              anytime.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Call Us
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    +95 9 123 456 789
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Email Us
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    info@loyartaxi.com
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Visit Us
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    123 Main St, Yangon
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
  )
}
