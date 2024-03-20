import RoadMapCard from "@/components/RoadMapCard";
import { SectionTitle } from "@/components/SectionTitle";

const RoadMapSection = () => {
  return (
    <section id="road-map">
      <SectionTitle title="Roadmap" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            month: "March",
            goals: [
              "Launch Website and Social Media Channels",
              "Initiate Community Building Campaign",
            ],
          },
          {
            month: "April",
            goals: [
              "List on CoinMarketCap and CoinGecko Listings",
              "Achieve 5M Market Cap",
            ],
          },
          {
            month: "May",
            goals: [
              "Achieve 50M Market Cap",
              "Secure Listing on a Centralized Exchange (CEX)",
              "Contribute 10% to the wild animals in Madagascar",
            ],
          },
        ].map(({ goals, month }) => (
          <RoadMapCard key={month} month={month} goals={goals} />
        ))}
      </div>
    </section>
  );
};

export default RoadMapSection;
