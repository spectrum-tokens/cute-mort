import { SectionTitle } from "@/components/SectionTitle";
import { TOKEN_SYMBOL } from "@/data/config";

export const Disclaimer = () => {
  return (
    <>
      <iframe
        className="w-full h-[500px] col-span-2"
        src="https://dexscreener.com/solana/3ez5Giu1U9i9kB9U88sC72UmqxYqgqdoizkqmADHodr6?embed=1&theme=dark"
      ></iframe>
      <section className="w-full flex-col flex items-center justify-center text-xs">
        Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The
        value of cryptocurrencies may go down as well as up. Profits may be
        subject to capital gains or other taxes applicable in your jurisdiction.
        <br />
        Sire Creator: nikossoftwaredev@gmail.com
      </section>
    </>
  );
};
export default Disclaimer;
