import DarkOverlay from "./DarkOverlay";
import { useLanguage } from "@contexts/LanguageContext";
import ContactButton from "./ContactButton";
function BookBanner({ data, imagePosition }) {
  const { language } = useLanguage();
  return (
    <div className="section_y_padding zoom_out_w_container px-3">
      <div className="relative overflow-hidden shadow rounded-sm">
        <DarkOverlay />
        <img
          alt="Book Now!"
          src={data.images?.[0].src}
          className={`w-full h-[300px] md:h-[500px] object-cover ${
            imagePosition || "object-bottom"
          }`}
        />
        <ContactButton
          type="whatsapp"
          placeholder={
            language === "en"
              ? "Book your free consultation!"
              : "احجز استشارتك المجانية"
          }
          styles="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 light_button regular_button big_button"
        />
      </div>
    </div>
  );
}

export default BookBanner;
