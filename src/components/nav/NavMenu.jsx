import { loadData } from "@utility/hooks/useDataLoader";
import NavMenuItem from "./NavMenuItem";
import NavMenuLogic from "./NavMenuLogic";

function NavMenu({ classes, setMenuOpen = () => {} }) {
  const { data: menu } = loadData("nav-menu.js", "menu");
  return (
    <NavMenuLogic>
      <div className={`flex gap-8 items-center ${classes}`}>
        {menu?.map((item, i) => (
          <NavMenuItem key={i} item={item} setMenuOpen={setMenuOpen} />
        ))}
      </div>
    </NavMenuLogic>
  );
}

export default NavMenu;
