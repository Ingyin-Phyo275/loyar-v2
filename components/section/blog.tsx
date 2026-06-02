"use client";
import { ExpandableCard } from "../ui/expendable-card";
import { useGetBlogsQuery } from "@/composable/query/useGetBlogsQuery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Blog() {
  const { blogs: promotionBlogs, isLoading: promotionLoading, isError: promotionError } = useGetBlogsQuery('Promotion');
  const { blogs: taxiBlogs, isLoading: taxiLoading, isError: taxiError } = useGetBlogsQuery('Taxi');

  const renderBlogSection = (title: string, blogs: any[], isLoading: boolean, isError: boolean) => (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{title}</h3>
      {isLoading && <p className="text-center py-8">Loading {title.toLowerCase()} blogs...</p>}
      {isError && <p className="text-center py-8 text-destructive">Failed to load {title.toLowerCase()} blogs</p>}
      {blogs && blogs.length > 0 && (
        <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {blogs.map((post: any) => (
                <CarouselItem key={post.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ExpandableCard
                    title={post.title}
                    src={post.featureImage}
                    description={post.description.replace(/<[^>]*>/g, '')}
                    className="overflow-hidden border-border hover:border-primary/50 transition-colors h-full"
                  >
                    <div dangerouslySetInnerHTML={{ __html: post.description }} />
                  </ExpandableCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      )}
    </div>
  );

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
      {renderBlogSection('Promotion', promotionBlogs, promotionLoading, promotionError)}

      {/* Taxi Section */}
      {renderBlogSection('Taxi', taxiBlogs, taxiLoading, taxiError)}
    </div>
  );
}
