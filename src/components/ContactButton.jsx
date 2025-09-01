import { loadData } from "@utility/hooks/useDataLoader";
import useServiceSlug from "@utility/hooks/useServiceSlug";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdOutlinePhoneEnabled } from "react-icons/md";

function ContactButton({
  type,
  placeholder,
  styles,
  iconSize = 21,
  withPlaceholder = true,
}) {
  const { data: contactInfo } = loadData(
    "contactInfo.js",
    "contactInfo",
    false
  );
  const { data: whatsappMessages } = loadData(
    "whatsappMessages.js",
    "whatsappMessages"
  );
  const { serviceSlug } = useServiceSlug({
    base: "campaign",
    supportedLangs: new Set(["en", "ar"]),
  });

  // Fallback to "/" if the current slug isn’t found in data
  const key =
    (contactInfo && contactInfo[serviceSlug] && serviceSlug) ||
    (whatsappMessages && whatsappMessages[serviceSlug] && serviceSlug) ||
    "/";

  const EMAIL_ICON = <MdEmail size={iconSize} />;
  const WHATSAPP_ICON = <FaWhatsapp size={iconSize} />;
  const PHONE_ICON = <MdOutlinePhoneEnabled size={iconSize} />;

  const contactMethod = {
    email: {
      href: "mailto:info@companyname.com",
      placeholder: "info@companyname.com",
      icon: EMAIL_ICON,
    },
    whatsapp: {
      href: `whatsapp://send?phone=${
        contactInfo?.[key]?.whatsappNumber || ""
      }&text=${encodeURIComponent(whatsappMessages?.[key] || "")}`,
      placeholder: contactInfo?.[key]?.whatsappNumberPlaceholder || "",
      icon: WHATSAPP_ICON,
    },
    call: {
      href: `tel:${contactInfo?.[key]?.phoneNumber1 || ""}`,
      placeholder: contactInfo?.[key]?.phoneNumberPlaceholder1 || "",
      icon: PHONE_ICON,
    },
    toll: {
      href: `tel:${contactInfo?.[key]?.toll || ""}`,
      placeholder: contactInfo?.[key]?.tollPlaceholder || "",
      icon: PHONE_ICON,
    },
  };

  return (
    <a
      href={contactMethod[type].href}
      className={`duration-300 flex items-center justify-center md:justify-start gap-1 ${
        styles || "text-primary-50 hover:text-secondary-600"
      }`}
    >
      {contactMethod[type].icon}
      {withPlaceholder && (
        <span className="to_show_number_properly">
          {placeholder || contactMethod[type].placeholder}
        </span>
      )}
    </a>
  );
}

export default ContactButton;
