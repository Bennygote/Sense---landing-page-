// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import Placeholder from "../../public/Automate.png";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://9d8.dev">
              Lorem ipsum dolor sit amet <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>
            Automate your recruiting and hire faster — at scale
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
            Sense eliminates manual and repetitive work for hiring teams while delivering a delightful experience to candidates
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>

        <div>
          <h1 className="justify-center items-center pt-10">What Sense can do for you</h1>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
