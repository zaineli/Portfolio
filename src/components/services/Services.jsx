import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I Transform visions into immersive digital experiences
          <br /> through innovative web solutions.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Technologies</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Projects.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Tech</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "10px",
            }}
          >
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <img src="/react.png" height="90px" width="150px"alt="" />
              <span>React Js</span>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", color:"#fff"}}>
              <img src="/next2.png" height="90px" width="210px" alt="" /> 
              <span>Next.JS</span>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <img src="/vite.png" height="80px" width="80px"alt="" />
              <span>Vite</span>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <img src="/angular.png" height="90px" width="90px"alt="" />
              <span>Angular</span>
            </div>
          </div>

          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Tech</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "10px",
            }}
          >
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <img src="/node.png" height="85px" width="80px"alt="" />
              <span>Node JS</span>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", color:"#fff"}}>
              <img src="/mongo.png" height="90px" width="85px" alt="" /> 
              <span>MongoDB</span>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <img src="/express.png" height="90px" width="160px"alt="" />
              <span>Express</span>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <img src="/postgres.png" height="90px" width="140px"alt="" />
              <span>Postgres</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI & Other</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "10px",
            }}
          >
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <img src="/figma.png" height="90px" width="90px"alt="" />
              <span>Figma</span>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", color:"#fff"}}>
              <img src="/photoshop.png" height="90px" width="100px" alt="" /> 
              <span>photoshop</span>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <img src="/framerMotion.png" height="90px" width="140px"alt="" />
              <span>Framer Motion</span>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <img src="/GIT.png" height="90px" width="90px"alt="" />
              <span>Git/Github</span>
            </div>
          </div>
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
