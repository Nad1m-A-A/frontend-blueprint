import CustomLink from "./CustomLink";

function DropDown({
  baseLinkClass,
  activeClass,
  language,
  item,
  open,
  setOpen,
  setMenuOpen,
}) {
  return (
    <div
      className={`absolute top-full ${
        language === "ar" ? "right-0" : "left-0"
      } bg-accent-500 shadow-md rounded-sm transition-all duration-300 z-50 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <ul
        className={`flex flex-col ${
          language === "ar" ? "items-end" : "items-start"
        } gap-2 min-w-[200px] py-2 `}
      >
        {item.children.map((child, i) => (
          <div
            key={i}
            onClick={() => {
              setOpen(false);
              setMenuOpen(false);
            }}
          >
            <CustomLink
              to={child.link}
              baseClass={`${baseLinkClass} ${
                language === "ar" ? "me-5" : "ms-5"
              }`}
              activeClass={`${activeClass} ${
                language === "ar" ? "me-5" : "ms-5"
              }`}
            >
              {child.title}
            </CustomLink>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
