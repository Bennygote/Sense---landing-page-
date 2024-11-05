// Layout
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

const comparisonData = {
  withoutSense: [
    "More than 60% time spent on mundane, repetitive tasks",
    "High spend on expensive job ads and sites",
    "Low response rates across campaigns and channels",
    "Not enough recruiter bandwidth to deliver a consistent candidate experience, leading to high drop-off and no-show rates",
    "Multiple point solutions not fully integrated, leading to data silos",
  ],
  withSense: [
    "Recruiter time spent on high-value activities like engaging hard-to-find talent",
    "30% increase in roles filled through talent already in ATS",
    "Personalized engagement through texting, email and chatbots drives 5X responses",
    "Automated alerts, follow-ups and outreach based on intelligent workflows",
    "All-in-one engagement platform integrates bi-directionally with ATS provider",
  ],
};

const ComparisonSection = () => {
  return (
    <Section>
      <Container className="text-center">
        <h3 className="text-4xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
          <Balancer>Why our customers can’t imagine recruiting without Sense, either</Balancer>
        </h3>

        <div className="grid gap-10 md:grid-cols-2 bg-purple-100 dark:bg-purple-900 p-10 rounded-lg">
          {/* Without Sense Column */}
          <div className="flex flex-col items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Without Sense</h4>
            <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300">
              {comparisonData.withoutSense.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-500 dark:text-orange-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With Sense Column */}
          <div className="flex flex-col items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">With Sense</h4>
            <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300">
              {comparisonData.withSense.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 dark:text-green-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ComparisonSection;
