import Card from "@/components/Card";

import { TWITTER_URL, TELEGRAM_URL, DEX_URL } from "@/data/config";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { IconBase } from "react-icons";

const SOCIALS_INFO = [
  {
    url: TWITTER_URL,
    icon: <FaTwitter size={40} />,
  },
  {
    url: TELEGRAM_URL,
    icon: <FaTelegramPlane size={40} />,
  },
  {
    url: DEX_URL,
    icon: <img src="/images/dex.png" className="h-[40px]"></img>,
  },
];

const SocialsSection = () => {
  return (
    <section id="socials">
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
