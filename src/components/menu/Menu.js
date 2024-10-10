import React, { useState } from "react";
import MenuThumbnail from '../menuThumbnail/MenuThumbnail';
import { CiViewColumn, CiGrid41 } from "react-icons/ci";

function Menu({ menuList, actions }) {
  const [view, setView] = useState("grid");

  {
    if (menuList.length === 0) {
      return <div className="errorBox">اطلاعاتی جهت نمایش وجود ندارد</div>;
    }
  }
  return (
    <div className="menu-wrapper">

      <div className="view-container">
			<CiViewColumn
				className="view-item row"
				title="نمایش افقی"
				onClick={() => setView("row")}
			/>
			<CiGrid41
				className="view-item grid"
				title="نمایش برگه ای"
				onClick={() => setView("grid")}
			/>
		</div>

        <div className={`${view==="row" ? "rows-container" : "grids-container"}`}>

        {menuList.map(menu => (
            <MenuThumbnail menu={menu} actions={actions} view={view} />
        ))}
          </div>
</div>

  );
}

export default Menu;
