import { SectionTitle } from "@/components/SectionTitle";
import { EXCHANGES_LIST } from "@/data/config";

const ExchangeCard = ({ logo, title }: { logo: string; title: string }) => {
  return (
    <div className="flex justify-center items-center btn">
      <span>{title}</span>
      <img className="h-[30px]" src={logo} />
    </div>
  );
};
const ComingSoonSection = () => {
  return (
    <section className="w-3/4">
      <SectionTitle title="Applications Coming Soon" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
        {EXCHANGES_LIST.map(({ logo, title }) => (
          <ExchangeCard key={title} logo={logo} title={title} />
        ))}
      </div>
    </section>
  );
};

export default ComingSoonSection;
