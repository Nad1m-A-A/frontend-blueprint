import CustomLink from "./CustomLink";
import MenuItemDropDown from "./MenuItemDropDown";

function NavMenuItem({ item, setMenuOpen }) {
  const Icon = item.icon;
  const baseLinkClass = "text-primary-50 duration-300 nav-underline";
  const activeClass = "text-primary-50 border-b-[1px] border-primary-50";

  if (item.children) {
    return (
      <MenuItemDropDown
        setMenuOpen={setMenuOpen}
        item={item}
        baseLinkClass={baseLinkClass}
        activeClass={activeClass}
      />
    );
  }

  return (
    <div onClick={() => setMenuOpen(false)}>
      <CustomLink
        to={item.link}
        baseClass={baseLinkClass}
        activeClass={activeClass}
      >
        <div className="flex gap-1 items-center">
          <span>{item.title}</span>
          {Icon && <Icon className="size-5" />}
        </div>
      </CustomLink>
    </div>
  );
}

export default NavMenuItem;
