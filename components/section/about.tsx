"use client";
import { FadeInWhenVisible } from "../page-wrapper";
import { Card, CardContent } from "../ui/card";
import { Shield, Star, Users } from "lucide-react";

export default function About() {
  const teamMembers = [
    { name: "U Kyaw Win", role: "CEO & Founder", initial: "K" },
    { name: "Daw Aye Mya", role: "COO", initial: "A" },
    { name: "U Zaw Lin", role: "CTO", initial: "Z" },
    { name: "Daw Su Su", role: "Customer Success", initial: "S" },
  ];
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
          About Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Transforming Transportation in Myanmar
        </h2>
        <p className="text-muted-foreground">
          Founded in 2020, Loyar Taxi has grown to become Myanmar&apos;s most
          trusted ride-hailing service, connecting thousands of riders with
          professional drivers every day.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <FadeInWhenVisible delay={0.1}>
          <AboutCard
            title="Our Vision"
            description="To provide safe, reliable, and affordable transportation that
                improves the daily lives of people across Myanmar."
            icon={<Star className="w-8 h-8 text-primary" />}
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <AboutCard
            title="Our Mission"
            description="To be the leading mobility platform in Southeast Asia, known for
                innovation, safety, and customer excellence."
            icon={<Shield className="w-8 h-8 text-primary" />}
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.3}>
          <AboutCard
            title="Our Values"
            description="Safety first, customer-centric approach, innovation, integrity,
                and community empowerment guide everything we do."
            icon={<Users className="w-8 h-8 text-primary" />}
          />
        </FadeInWhenVisible>
      </div>

      {/* Team */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Meet Our Team
        </h3>
        <p className="text-muted-foreground">
          The dedicated people behind Loyar Taxi
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <FadeInWhenVisible key={member.name} delay={index * 0.1}>
            <MemberCard {...member} />
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  );
}

type AboutCardProps = {
  title: string;
  description: string;
  icon: React.ReactElement;
};
function AboutCard({ title, description, icon }: AboutCardProps) {
  return (
    <Card
      className="group cursor-pointer p-6 bg-background border-border transition-all duration-300 ease-in-out h-full
      hover:-translate-y-2 hover:shadow-xl hover:border-primary/70 text-center"
    >
      <CardContent className="p-0">
        <div
          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6
          transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110"
        >
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>

        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

type MemberCardProps = {
  name: string;
  initial: string;
  role: string;
};
function MemberCard({ name, initial, role }: MemberCardProps) {
  return (
    <Card
      className="group cursor-pointer p-6 bg-background border-border transition-all duration-300 ease-in-out h-full
      hover:-translate-y-2 hover:shadow-xl hover:border-primary/70 text-center"
    >
      {" "}
      <CardContent className="p-0">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-primary">{initial}</span>
        </div>
        <h4 className="font-semibold text-foreground">{name}</h4>
        <p className="text-muted-foreground text-sm">{role}</p>
      </CardContent>
    </Card>
  );
}
