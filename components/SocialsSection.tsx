import Card from "@/components/Card";

import { TWITTER_URL } from "@/data/config";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { IconBase } from "react-icons";

const SOCIALS_INFO = [
  {
    url: TWITTER_URL,
    icon: <FaTwitter size={40} />,
  },
  {
    url: "",
    icon: <FaTelegramPlane size={40} />,
  },
  {
    url: "",
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
              className="flex items-center justify-center btn btn-square outline-accent"
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
