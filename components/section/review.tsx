import React from "react";
import { FadeInWhenVisible } from "../page-wrapper";
import { Card, CardContent } from "../ui/card";
import { Quote, Star } from "lucide-react";
import { Marquee } from "../ui/marquee";

export default function Reviews() {
  const riderReviews = [
    {
      name: "Daw Aye Thandar",
      rating: 5,
      comment:
        "Best taxi service in Myanmar! Always on time and drivers are very professional.",
      location: "Yangon",
    },
    {
      name: "U Hla Myint",
      rating: 5,
      comment:
        "I use Loyar Thwar for all my business trips. Premium service at reasonable prices.",
      location: "Mandalay",
    },
    {
      name: "Ma Su Wai",
      rating: 5,
      comment:
        "The Airport Checkin service is amazing. They track my flight and are always waiting for me.",
      location: "Yangon",
    },
  ];

  const driverReviews = [
    {
      name: "U Tun Aung",
      rating: 5,
      comment:
        "Great platform for drivers. Fair commission rates and supportive management.",
      experience: "3 years",
    },
    {
      name: "U Min Thu",
      rating: 5,
      comment:
        "I love the flexible hours. I can work when I want and earn well.",
      experience: "2 years",
    },
    {
      name: "U Kyaw Soe",
      rating: 5,
      comment:
        "Loyar takes care of their drivers. Insurance, training, and good pay.",
      experience: "4 years",
    },
  ];

  const firstRow = riderReviews.slice(0, riderReviews.length);
  const secondRow = riderReviews.slice(riderReviews.length / 2);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
          Reviews
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What People Say About Us
        </h2>
        <p className="text-muted-foreground">
          Hear from our riders and drivers about their experience with Loyar
          Taxi.
        </p>
      </div>

      {/* Rider Reviews */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Users Reviews
        </h3>
        {/* <div className="grid md:grid-cols-3 gap-6">
          {riderReviews.map((review, index) => (
            <ReviewCard index={index} review={review} key={index} />
          ))}
        </div> */}

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, index) => (
              <ReviewCard index={index} review={review} key={index} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, index) => (
              <ReviewCard index={index} review={review} key={index} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 "></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 "></div>
        </div>
      </div>

      {/* Driver Reviews */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Driver Reviews
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {driverReviews.map((review, index) => (
            <ReviewCard index={index} review={review} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

type Review = {
  name: string;
  comment: string;
  experience?: string;
  location?: string;
  rating: number;
};
type ReviewCardProps = {
  index: number;
  review: Review;
};
function ReviewCard({ index, review }: ReviewCardProps) {
  return (
    <FadeInWhenVisible key={review.name} delay={index * 0.1}>
      <Card
        className="group cursor-pointer p-6 bg-background border-border transition-all duration-300 ease-in-out h-full
  hover:-translate-y-2 hover:shadow-xl hover:border-primary/70"
      >
        {" "}
        <CardContent className="p-0 flex flex-col h-[90%] max-w-sm">
          {/* <Quote className="w-8 h-8 text-primary/30 mb-4" /> */}
          <p className="text-foreground text-sm mb-6 grow">
            {review.comment}&rdquo;
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-semibold text-primary">
                {review.name.charAt(0)}
              </span>
            </div>

            <div>
              <p className="font-semibold text-foreground">{review.name}</p>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {review.experience && (
                  <span className="text-muted-foreground text-sm">
                    {review.experience} driving
                  </span>
                )}

                {review.location && (
                  <span className="text-muted-foreground text-sm">
                    {review.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeInWhenVisible>
  );
}
