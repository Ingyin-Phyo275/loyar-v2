"use client";

import { useEffect, useState } from "react";
import { useGetBlogsQuery } from "@/composable/query/useGetBlogsQuery";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExpandableCard } from "../ui/expendable-card";

interface BlogPost {
  id: string | number;
  title: string;
  featureImage: string;
  description: string;
}

function BlogSection({
  title,
  blogs = [],
  isLoading,
  isError,
}: {
  title: string;
  blogs: BlogPost[];
  isLoading: boolean;
  isError: boolean;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1); 

  useEffect(() => {
    if (!api) return;

    const timeoutId = setTimeout(() => {
      setCurrent(api.selectedScrollSnap() + 1);
    }, 0);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);

    return () => {
      clearTimeout(timeoutId);
      api.off("select", onSelect);
    };
  }, [api]);

  if (isLoading) {
    return <p className="text-center py-8">Loading {title.toLowerCase()} blogs...</p>;
  }

  if (isError) {
    return <p className="text-center py-8 text-destructive">Failed to load {title.toLowerCase()} blogs</p>;
  }

  if (!blogs || blogs.length === 0) return null;

  return (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
        {title}
      </h3>
      
      <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4">
        {/* Mobile Page Indicator */}
        <div className="md:hidden text-center mb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-70">
          Showing {current} of {blogs.length}
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
            watchDrag: true,
          }}
          className="w-full relative px-2"
        >
          <CarouselContent>
            {blogs.map((post) => (
              <CarouselItem
                key={post.id}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <ExpandableCard
                  title={post.title}
                  src={post.featureImage}
                  description={(post.description || "").replace(/<[^>]*>/g, "")}
                  className="overflow-hidden border-border hover:border-primary/50 transition-colors h-full"
                >
                  <div dangerouslySetInnerHTML={{ __html: post.description }} />
                </ExpandableCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}

export default function Blog() {
  const {
    blogs: promotionBlogs,
    isLoading: promotionLoading,
    isError: promotionError,
  } = useGetBlogsQuery("Promotion");
  
  const {
    blogs: taxiBlogs,
    isLoading: taxiLoading,
    isError: taxiError,
  } = useGetBlogsQuery("Taxi");

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* Header */}
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

      {/* Promotion Section */}
      <BlogSection
        title="Promotion"
        blogs={promotionBlogs}
        isLoading={promotionLoading}
        isError={promotionError}
      />

      {/* Taxi Section */}
      <BlogSection
        title="Taxi"
        blogs={taxiBlogs}
        isLoading={taxiLoading}
        isError={taxiError}
      />
    </div>
  );
}