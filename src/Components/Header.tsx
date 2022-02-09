import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../Services/variants";

const Header = () => {
  return (
    <motion.nav id="header" variants={fadeIn("down")} initial="initial" animate="animate" className="header">
      <span className="header-logo">TEST GUYS</span>
      <ul>
        <li>SHOP</li>
        <li>STORY</li>
        <li>MENU</li>
      </ul>

      <span className="header-account">Connect Wallet</span>
      <span className="header-user">🤕</span>
    </motion.nav>
  );
};

export default Header;