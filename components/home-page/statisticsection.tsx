// Layout
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

type StatisticItem = {
  percentage: string;
  description: string;
};

const statistics: StatisticItem[] = [
  { percentage: "55%", description: "Faster time-to-hire" },
  { percentage: "60%", description: "Increase in recruiter productivity" },
  { percentage: "5X", description: "Increase in response rate" },
  { percentage: "35%", description: "Reduced cost-per-hire" },
];

const StatisticSection = () => {
  return (
    <Section>
      <Container className="not-prose text-center">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl font-semibold">
            <Balancer>
              Real Customers, Real Results
            </Balancer>
          </h3>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {statistics.map(({ percentage, description }, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-6 rounded-full border-4 border-purple-500 w-40 h-40 mx-auto transition-transform hover:scale-105"
                style={{ borderColor: "#7B61FF" }}
              >
                <p className="text-3xl font-bold text-purple-700">{percentage}</p>
                <p className="text-sm font-medium text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default StatisticSection;
