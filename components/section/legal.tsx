import { CheckCircle, FileText, Lock } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { FadeInWhenVisible } from "../page-wrapper";

export default function Legal() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
          Legal & Policies
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Transparency & Trust
        </h2>
        <p className="text-muted-foreground">
          We believe in complete transparency. Review our policies to understand
          how we protect you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <FadeInWhenVisible delay={0.1}>
          <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 overflow-hidden">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <FileText
                  size={32}
                  className="text-primary group-hover:text-primary-foreground transition-colors"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Terms & Conditions
              </h3>
              <p className="text-muted-foreground mb-6">
                Our terms of service outline the rules and guidelines for using
                Loyar Taxi services. Please read carefully before booking.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Service usage guidelines
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Payment terms
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  User responsibilities
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Cancellation policy
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="/terms">Read Full Terms</a>
              </Button>
            </CardContent>
          </Card>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 overflow-hidden">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Lock
                  size={32}
                  className="text-primary group-hover:text-primary-foreground transition-colors"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Privacy Policy
              </h3>
              <p className="text-muted-foreground mb-6">
                Learn how we collect, use, and protect your personal information
                when you use our services.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Data collection practices
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Information security
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Your privacy rights
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Cookie usage
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="/privacy">Read Privacy Policy</a>
              </Button>
            </CardContent>
          </Card>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}
