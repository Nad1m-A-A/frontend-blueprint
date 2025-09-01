import ContactButton from "./ContactButton";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-5 flex flex-col gap-4 z-20 morph px-1.5 py-2 rounded-full">
      <ContactButton
        type="call"
        withPlaceholder={false}
        styles="light_button p-[.4rem] rounded-full shadow-md mx-auto"
        iconSize={24}
      />
      <ContactButton
        type="whatsapp"
        withPlaceholder={false}
        styles="light_button p-[.4rem] rounded-full shadow-md mx-auto"
        iconSize={24}
      />
    </div>
  );
};

export default FloatingButtons;
