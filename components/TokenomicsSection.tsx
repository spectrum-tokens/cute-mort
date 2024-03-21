"use client";
import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import Stat from "@/components/Stat";
import {
  BIRDEYE_URL,
  RAYDIUM_URL,
  TOKEN_ADDRESS,
  TOKEN_NAME,
  TOKEN_SYMBOL,
  TOTAL_SUPPLY,
} from "@/data/config";
import { PieChart } from "react-minimal-pie-chart";
import { FaCopy } from "react-icons/fa";
import Toast from "@/components/Toast";
import { useState } from "react";

const TokenomicsSection = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {showAlert && <Toast title="Token address copied" />}
      <section id="tokenomics" className="w-full">
        <SectionTitle title="Tokenomics" />
        <div className="grid grid-cols-2 gap-8">
          <img
            className="w-full h-full col-span-2 md:col-span-1 object-cover rounded-xl  outline outline-accent"
            src="images/cute-mort.gif"
          />
          <div className="col-span-2 md:col-span-1 stats stats-vertical shadow outline outline-accent">
            {[
              { title: "Total Supply", value: `💰 ${TOTAL_SUPPLY}` },
              { title: "Liquidity", value: "🔥 Burned" },
              { title: "Mint & Freeze", value: "💀 Revoked" },
              { title: "Taxes", value: "✅ 0%" },
            ].map(({ title, value }) => (
              <Stat key={title} title={title} value={value} />
            ))}
          </div>
          <SectionTitle title="Token address" className="col-span-2" />
          <Card className="col-span-2">
            <span className="card-body p-2">
              <span className="grid grid-cols-2 items-center justify-center gap-4 font-extrabold text-2xl">
                <button
                  className="col-span-2 btn btn-outline btn-accent m-1 text-xs"
                  onClick={() => {
                    setShowAlert(true);
                    navigator.clipboard.writeText(TOKEN_ADDRESS);
                    setTimeout(() => {
                      setShowAlert(false);
                    }, 2000);
                  }}
                >
                  <span className="hidden sm:block">
                    <FaCopy />
                  </span>
                  {TOKEN_ADDRESS}
                </button>
                <a
                  href={RAYDIUM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary "
                >
                  BUY NOW
                </a>
                <a
                  href={BIRDEYE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-accent"
                >
                  CHARTS
                </a>
              </span>
            </span>
          </Card>
          <iframe
            className="w-full h-[300px] col-span-2"
            src="https://dexscreener.com/solana/3ez5Giu1U9i9kB9U88sC72UmqxYqgqdoizkqmADHodr6?embed=1&theme=dark"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default TokenomicsSection;
