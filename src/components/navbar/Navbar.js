import React from 'react'
import "./navbar.css";
import { BsFillCartFill } from "react-icons/bs";
import {  Icon } from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../../assets/fc_logo.png"
import SearchInput from '../SearchInput';

const Navbar = () => {
  return (
    <div style={{ width: "100%", bg: "#ffffff" }} className="allcontainer">
        <div className="leftsidecontnav">
          <Link to="/"><img className="logo1" src={logo} alt="img" /></Link>
        </div>
        <div style={{ marginLeft: "20px" }} className="RC">
          <SearchInput />
        </div>

        <div className="rightsidecontnav">
          <Icon className="IC" mt={1} fontSize="20px">
            <CiLocationOn />
          </Icon>
          <Link to={`/account`}>
            My Account |
          </Link>

          <Link to={"/login"}>
            Login /Register | 
          </Link>

          <Link to={"/cart"}>
            Cart
          </Link>
          <Icon className="IC" fontSize="20px">
            <BsFillCartFill />
          </Icon>
        </div>
      </div>
  )
}

export default Navbar