"use client";
import { ExpandableCard } from "../ui/expendable-card";

export default function Blog() {
  const blogPosts = [
    {
      title: "5 Tips for a Safe Night Ride",
      description:
        "Learn how to stay safe during late-night taxi rides with these essential tips from our safety team.",
      image:
        "https://img.freepik.com/free-photo/yellow-black-sign-taxi-placed-top-car-night_181624-10624.jpg?semt=ais_hybrid&w=740&q=80",
      content: (
        <>
          <h4>The Village's Secret</h4>
          <p>
            Deep within the mist-covered mountains of Japan, there lies a small,
            secluded village known as <i>Yamadori</i>. For centuries, the
            villagers have lived in harmony with nature, but they also harbor a
            dark secret— an ancient pact with the spirits of the forest, the{" "}
            <i>yokai</i>.
          </p>
          <h4>The Mysterious Disappearances</h4>
          <p>
            Recently, strange occurrences have unsettled the peace of{" "}
            <i>Yamadori</i>. People have started to disappear without a trace,
            vanishing into the dense forest at night. Some say it is the work of
            the <i>yurei</i>, vengeful spirits of those who died unjustly.
            Others whisper of the return of the fearsome
            <i> Tengu</i>.
          </p>
          <h4>The Encounter with the Kitsune</h4>
          <p>
            One night, while performing a sacred ritual, the <i>yamabushi</i>
            encounters a mysterious figure in the forest—a beautiful woman with
            fox-like features. She reveals herself to be a <i>kitsune</i>, a
            shapeshifting fox spirit.
          </p>
          <h4>The Final Confrontation</h4>
          <p>
            With time running out, the <i>yamabushi</i> must uncover the
            forgotten history of Yamadori and restore balance between the human
            and spirit worlds.
          </p>
        </>
      ),
    },
    {
      title: "Introducing Loyar Poh for Families",
      description:
        "Our new family-friendly service comes with child seats, extra space, and trained drivers.",
      image:
        "https://gerrardscrosstaxis.com/wp-content/uploads/2025/12/ChatGPT-Image-Dec-15-2025-09_18_17-AM.png",
      content: (
        <>
          <h4>Family-Friendly Travel</h4>
          <p>
            Loyar Poh now offers services designed for families with children,
            including safe child seats and extra spacious vehicles.
          </p>
        </>
      ),
    },
    {
      title: "Enhancing Passenger Safety with Smart Technology",
      description:
        "Learn how we use modern technology to ensure every journey is safe and secure.",
      image:
        "https://www.thecooldown.com/wp-content/uploads/2023/03/VmEGj3Cxe3ugzKaqPmC682utwUfhUbe5XOLOWH5i148.jpeg",
      content: (
        <>
          <h4>Smart Safety Features</h4>
          <p>
            Our vehicles are equipped with GPS tracking, real-time monitoring,
            and emergency support systems to ensure passenger safety at all
            times.
          </p>

          <h4>Verified Drivers</h4>
          <p>
            Every driver undergoes strict background checks and regular
            training, ensuring you always travel with trusted professionals.
          </p>
        </>
      ),
    },
  ];

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

      {/* Expandable Blog Cards */}
      <div className="grid md:grid-cols-3  gap-8">
        {blogPosts.map((post) => (
          <ExpandableCard
            key={post.title}
            title={post.title}
            src={post.image}
            description={post.description}
            className="overflow-hidden border-border hover:border-primary/50 transition-colors h-full"
          >
            {post.content}
          </ExpandableCard>
        ))}
      </div>
    </div>
  );
}
