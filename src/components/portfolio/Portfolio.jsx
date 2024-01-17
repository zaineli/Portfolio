import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Inventory Dashboard",
    link: "https://inventoryxdashboard.netlify.app",
    img: "/inv.png",
    desc: "Transforming inventory management, I engineered a sleek and intuitive dashboard. Unleash the power of real-time insights with a visually appealing interface, ensuring seamless control over your inventory at a glance",
  },
  {
    id: 2,
    title: "Apple Vision",
    link: "https://applexvision.netlify.app/",
    img: "https://i.ytimg.com/vi/TX9qSaGXFyg/maxresdefault.jpg",
    desc: "Crafted a meticulous clone of the Apple Vision website, showcasing sleek design and seamless functionality. This project highlights my commitment to delivering pixel-perfect replicas with a keen eye for detail.",
  },
  {
    id: 3,
    title: "Reviv Style",
    link: "https://zaineli.github.io/RevivStyle/",
    img: "/rev.png",
    desc: "I curated a captivating fashion profile that transcends trends, blending timeless elegance with contemporary flair. This project reflects my ability to capture the essence of individual style, creating a visually stunning showcase that resonates with a diverse and fashion-forward audience.",
  },
  {
    id: 4,
    title: "Magma Designers",
    link: "https://magmaxdesign.netlify.app",
    img: "/magma.png",
    desc: "Seamlessly blending aesthetics and functionality, this online showcase reflects our commitment to creating visually stunning and immersive digital experiences that resonate with your unique design ethos.",
  },
  {
    id: 5,
    title: "Admin Dashboard",
    link: "https://zain-dashboard.netlify.app",
    img: "/dashboard.png",
    desc: "Revolutionizing admin interfaces, I created a sleek, user-friendly dashboard that turns data management into a visual adventure. Efficiency meets excitement in every click.",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>               
          <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>See Demo</button>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
