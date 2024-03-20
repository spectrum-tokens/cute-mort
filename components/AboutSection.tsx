import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { TOKEN_NAME } from "@/data/config";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionTitle title={`About ${TOKEN_NAME}`} />
      <Card className="max-w-[600px]">
        <span className="card-body flex flex-wrap  items-center justify-center">
          <img className="object-contain" src="/images/logo.png" />
          <span>
            Welcome to <strong className="text-primary">{TOKEN_NAME}</strong>, a
            revolutionary token built on the Solana blockchain.
            <br />
            <br /> Our mission is simple yet impactful. To become the primary
            cryptocurrency to support <strong>Lemurs</strong> like Mort and King
            Julian in Madagascar.
            <br />
            <br />
            We are going to achieve this by reserving <strong>10%</strong> of
            the tokens in a wallet for saving the wild animals.
            <br />
            <br /> 💰 Fill your bags
            <br /> 🔥 100x in the next days
            <br /> 🚀 Be one of the {TOKEN_NAME} early investors
          </span>
        </span>
      </Card>
    </section>
  );
};

export default AboutSection;
