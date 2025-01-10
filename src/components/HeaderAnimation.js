import React from "react";
import { motion } from "framer-motion";
import './Home.css';

const HeaderAnimation = () => {
  const blockVariants = {
    initial: { x: "-100%" },
    animate: { x: ["-100%", "0%", "100%"] },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div style={{ 
      position: "absolute", 
      overflow: "hidden",
      top: "10%",
      left: "80%",
      transform: "translate(-80%, -10%)",
      width: "100%",
      maxWidth: "700px",
      height: "20%", 
      }}>
      <motion.div
        className="block block1"
        variants={blockVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="block block2"
        variants={blockVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.2, delay: 1 }}
      >
        L'Art du moment
      </motion.h1>
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.2, delay: 1 }}
      >
        Atelier créatif avec Saiora
      </motion.h2>
    </div>
  );
};

export default HeaderAnimation;
