import React from "react";
import { FadeInWhenVisible } from "../page-wrapper";
import { Card, CardContent } from "../ui/card";
import { FileText } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "5 Tips for a Safe Night Ride",
      excerpt:
        "Learn how to stay safe during late-night taxi rides with these essential tips from our safety team.",
      category: "Safety",
      date: "Mar 15, 2026",
    },
    {
      title: "Introducing Loyar Poh for Families",
      excerpt:
        "Our new family-friendly service comes with child seats, extra space, and trained drivers.",
      category: "News",
      date: "Mar 10, 2026",
    },
    {
      title: "How We're Reducing Carbon Emissions",
      excerpt:
        "Discover our commitment to sustainability and our electric vehicle initiative.",
      category: "Sustainability",
      date: "Mar 5, 2026",
    },
  ];
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
          Our Blog
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Latest News & Updates
        </h2>
        <p className="text-muted-foreground">
          Stay informed with the latest news, tips, and updates from Loyar Taxi.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <FadeInWhenVisible key={post.title} delay={index * 0.1}>
            <Card className="overflow-hidden border-border hover:border-primary/50 transition-colors h-full">
              <div className="h-48 bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  );
}
