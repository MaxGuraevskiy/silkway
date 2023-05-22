"use client";
import React from "react";
import Link from "next/link";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "1.4rem",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header() {
  return (
    <header>
      <nav className="flex w-full flex-row justify-between items-center space-x-4">
        <Link href="/">
          <h1 className="font-sans_pro text-red-500">SilkWay</h1>
        </Link>

        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ fontSize: 20, color: 'red' }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <div className="flex flex-row space-x-5">
          <Link href="/bucket" className="h-full justify-center">
            <ShoppingCartCheckoutIcon sx={{ fontSize: 30, color: "red" }} />
          </Link>

          <Link href="/profile">
            <AccountCircleIcon sx={{fontSize: 30, color: 'red'}} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
