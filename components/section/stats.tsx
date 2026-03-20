import React from "react";
import { FadeInWhenVisible } from "../page-wrapper";
import { NumberTicker } from "../ui/number-ticker";

export default function Stats() {
  const stats = [
    { value: 5000, label: "Happy Riders" },
    { value: 150, label: "Active Drivers" },
    { value: 2, label: "Cities Covered" },
    { value: 4, label: "Average Rating" },
  ];
  
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <FadeInWhenVisible key={stat.label} delay={index * 0.1}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {/* {stat.value} */}
                <NumberTicker value={Number(stat.value)} />
              </p>
              <p className="text-background/70 text-sm">{stat.label}</p>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  );
}
