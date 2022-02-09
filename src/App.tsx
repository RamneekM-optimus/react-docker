import React from 'react';
import Header from "./Components/Header";
import Leaf from "./Components/Leaf";
import TextContainer from "./Components/TextContainer";
import { motion } from "framer-motion";
import { bottle, bottleWrapper, leavesContainer } from "./Services/variants";
import Juice from './images/juice.png';
import Leaf1 from './images/leaf01.png';
import Leaf2 from './images/leaf02.png';
import Leaf3 from './images/leaf03.png';
import Leaf4 from './images/leaf04.png';
import Leaf5 from './images/leaf05.png';
import './styles/globals.css';
import './App.css';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-3">
        {/* texts wrapper */}
        <TextContainer />

        {/* juice bottle image */}
        <motion.div variants={bottleWrapper} initial="initial" animate="animate" className="bottleWrapper">
          <motion.img src={Juice} variants={bottle} className="bottle h-400px w-250px md:h-550px md:w-500px" />
        </motion.div>

        {/* leaves images */}
        <motion.div variants={leavesContainer} initial="initial" animate="animate">
          <Leaf animationSpeed={1.8} className="leafWrapper-1 absolute top-52 left-[30%]" imageUrl={Leaf1} />
          <Leaf animationSpeed={1.6} className="leafWrapper-2 absolute top-1/2 right-72" imageUrl={Leaf2} />
          <Leaf animationSpeed={1.5} className="leafWrapper-3 absolute top-10 right-[40%]" imageUrl={Leaf3} />
          <Leaf animationSpeed={1.7} className="leafWrapper-4 absolute top-10 right-[40%]" imageUrl={Leaf4} />
          <Leaf animationSpeed={1.8} className="leafWrapper-5 absolute top-[75%] left-1/4" imageUrl={Leaf5} />
        </motion.div>
      </main>
    </div>
  );
}