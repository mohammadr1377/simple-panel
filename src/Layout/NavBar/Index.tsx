import React, { useState, useEffect } from "react";
import ListRoute from "../../Route/listRoute";
import ItemNav from "./ItemNav";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { Bars3Icon, CloseIcon } from "../../assets/Icon";

export default function IndexNavBar() {
  const [isShowMenu, setIsShowMenu]: [boolean, Function] = useState(false);
  const { height, width } = useWindowDimensions();
  useEffect(() => {}, []);

  useEffect(() => {
    console.log("width", width);
    if (width <= 920) {
      setIsShowMenu(false);
    } else {
      setIsShowMenu(true);
    }
  }, [width]);

  // ${isShowMenu ? "w-64" :"w-10"}
  return (
    <div
      className={` relative overflow-hidden   bg-gradient-to-t from-blue-200 to-blue-600 shadow-lg shadow-blue-600 ml-1 min-h-screen ${
        isShowMenu === true ? "w-64" : "w-16"
      }`}
    >
      <div
        className={`fixed flex-wrap flex-col items-center flex justify-start  py-3 overflow-x-hidden    bg-white shadow-lg min-h-screen     ${
          isShowMenu === true ? "w-52" : "w-14"
        } `}
      >
        <div>
          <button
            className=""
            onClick={() => setIsShowMenu((prev: boolean) => !prev)}
          >
            {isShowMenu ? CloseIcon("text-red-700") : Bars3Icon()}
          </button>
        </div>
        <h2 className="text-center pb-3 text-2xl ">پنل</h2>
        <ul className="w-full ">
          {ListRoute.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <ItemNav
                  nameFarsi={item.nameFarsi}
                  path={item.path}
                  icon={item.icon}
                  isShowMenu={isShowMenu}
                />
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
