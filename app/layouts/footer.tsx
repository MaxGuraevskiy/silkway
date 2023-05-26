"use client";
import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import "./footer.css";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
        <li>
          <Link href={"/profile"}>
            <AccountCircleIcon sx={{ fontSize: 30, color: "red" }} />
          </Link>
        </li>
        <li>
          <Link href={"/bucket"}>
            <ShoppingCartCheckoutIcon sx={{ fontSize: 30, color: "red" }} />
          </Link>
        </li>
        <li>
          <Link href={"/favorites"}>
            <FavoriteBorderIcon sx={{ fontSize: 30, color: "red" }} />
          </Link>
        </li>
      </ul>

      <p>SilkWay 2023. Guraevskiy Maxim.</p>
    </footer>
  );
}

export default Footer;
