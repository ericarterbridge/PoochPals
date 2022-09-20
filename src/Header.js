import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Popper from "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        {/* image here */}
        <img
          src="https://thumbs.dreamstime.com/b/abstract-vector-logo-your-company-colorful-crossing-orange-red-lines-generic-template-84604765.jpg"
          alt=""
        />
        <div className="header_input">
          {/* <SearchIcon /> */}
          <i class="bi bi-search"></i>
          <input placeholder="Search PoochPals" type="text" />
        </div>
      </div>

      <div className="header_center">
        <div
          className="header_option
        header_option--active"
        >
          <i class="bi bi-house"></i>
        </div>
        <div className="header_option">
          <i class="bi bi-chat-left-text-fill"></i>
        </div>
        <div className="header_option">
          <i class="bi bi-people-fill"></i>
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <i class="bi bi-person-circle"></i>
          <h4>Fluffy</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
