import React from 'react';
import { motion } from "framer-motion";
import { leaf, leafWrapper } from "../Services/variants";

interface Leaf {
    className: string;
    imageUrl: string;
    animationSpeed: number;
}

const Leaf = ({ className, imageUrl, animationSpeed }: Leaf) => {
  return (
    <motion.div variants={leafWrapper} className={className}>
      <motion.img custom={animationSpeed} variants={leaf} className="leaf" src={imageUrl} />
    </motion.div>
  );
};

export default Leaf;