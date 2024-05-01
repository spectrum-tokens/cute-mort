import Card from "@/components/Card";

import {
  TWITTER_URL,
  TELEGRAM_URL,
  DEX_URL,
  DEX_TOOLS_URL,
  PUMP_URL,
} from "@/data/config";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { IconBase } from "react-icons";
import { SectionTitle } from "@/components/SectionTitle";

const SOCIALS_INFO = [
  {
    url: TELEGRAM_URL,
    icon: <FaTelegramPlane size={40} />,
  },
  {
    url: PUMP_URL,
    icon: <img src="/images/pump.webp" className="h-[40px]"></img>,
  },
];

const SocialsSection = () => {
  return (
    <section id="socials">
      <SectionTitle title="Socials" />
      <Card className="w-full">
        <div className="card-body flex flex-row items-center justify-center gap-8">
          {SOCIALS_INFO.map(({ url, icon }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center btn btn-square btn-primary"
            >
              {icon}
            </a>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default SocialsSection;
