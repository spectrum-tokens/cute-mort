import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { RAYDIUM_URL, TOKEN_SYMBOL } from "@/data/config";

const StepCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Card className="max-w-[600px]">
      <div className="card-body flex flex-col md:flex-row items-center justify-start gap-10">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-[100px] h-[100px] object-contain"
        />
        <span className="space-y-2 flex flex-col items-center">
          <h2 className="font-extrabold text-2xl text-primary">{title}</h2>
          <p className="text-center">{description}</p>
        </span>
      </div>
    </Card>
  );
};

const HowToBuySection = () => {
  return (
    <section
      id="buy"
      className="grid grid-cols-1 grid-flow-row items-center gap-8"
    >
      <SectionTitle title="HOW TO BUY" />
      {[
        {
          title: "1. Create a Wallet",
          description:
            "Download Phantom or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom.app.",
          image: "/images/phantom.png",
        },
        {
          title: "2. Get Some SOL",
          description: `Have SOL in your wallet to switch to ${TOKEN_SYMBOL}. If you don’t have any SOL, you can buy SOL from an exchange or cross chain swap and send it to your wallet.`,
          image: "/images/solana.png",
        },
        {
          title: "3. Go to Raydium, Jupiter.",
          description: `Connect to Raydium or Jupiter. Go raydium.io or jup.ag in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the ${TOKEN_SYMBOL} token address into Raydium or Jupiter and confirm the swap. When Phantom prompts you for a wallet signature, sign.`,
          image: "/images/raydium.png",
        },
        {
          title: `4. Swap SOL for ${TOKEN_SYMBOL}`,
          description: `Switch SOL for ${TOKEN_SYMBOL}. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility`,
          image: "/images/buy-mort.webp",
        },
      ].map(({ title, description, image }) => (
        <StepCard
          key={title}
          title={title}
          description={description}
          image={image}
        />
      ))}
    </section>
  );
};

export default HowToBuySection;
