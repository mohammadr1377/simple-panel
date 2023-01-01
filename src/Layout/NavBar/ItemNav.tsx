import { NavLink } from "react-router-dom";
import "./style.css";

export default function ItemNav(data: {
  path: string;
  nameFarsi: string;
  icon: Function;
  isShowMenu: boolean;
}) {
  return (
    <>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive ? "styleMainNavLinkActive" : "styleMainNavLinkNotActive"
          }
          to={data.path}
        >
          <span className="mb-1 ml-2">{data.icon()}</span>

          {data.isShowMenu && <>{data.nameFarsi}</>}
        </NavLink>
      </li>
    </>
  );
}
