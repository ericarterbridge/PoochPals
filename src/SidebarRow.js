import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {/* {src && <i class="bi bi-person-circle" src={src} />}
      {Icon && <Icon />} */}
      <img src={src} alt="" />

      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
