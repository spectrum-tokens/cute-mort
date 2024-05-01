import RoadMapCard from "@/components/RoadMapCard";
import { SectionTitle } from "@/components/SectionTitle";

const RoadMapSection = () => {
  return (
    <section id="road-map">
      <SectionTitle title="Roadmap" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            month: "1st Stage",
            goals: [
              "Launch on pump.fun",
              "Complete king of the hill and bonding curve",
            ],
          },
          {
            month: "2nd Stage",
            goals: [
              "Launch on raydium",
              "Update DexScreener",
              "Update DexTools",
              "Buy trends",
            ],
          },
          {
            month: "3rd Stage",
            goals: ["200k MC", "Apply to tier 2 CEX"],
          },
        ].map(({ goals, month }) => (
          <RoadMapCard key={month} month={month} goals={goals} />
        ))}
      </div>
    </section>
  );
};

export default RoadMapSection;
