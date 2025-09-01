import ContactButton from "@components/ContactButton";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";

const SOCIAL_ICONS = {
  Instagram: <FaInstagram size={21} />,
  Facebook: <FaFacebook size={21} />,
  TikTok: <FaTiktok size={21} />,
  Snapchat: <FaSnapchatGhost size={21} />,
};

const SocialsAndContacts = ({ contactTitle, socials }) => (
  <div>
    <div className="font-bold mb-3 text-lg">{contactTitle}</div>
    <div className="space-y-2">
      <ContactButton type="whatsapp" />
      <ContactButton type="call" />
      <ContactButton type="email" />
    </div>
    <div className="flex gap-3 mt-6 justify-center md:justify-start">
      {socials?.items.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary-500 duration-300"
          aria-label={social.name}
        >
          {SOCIAL_ICONS[social.name] || null}
        </a>
      ))}
    </div>
  </div>
);

export default SocialsAndContacts;
