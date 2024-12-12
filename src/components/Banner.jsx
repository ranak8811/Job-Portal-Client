import { easeOut } from "motion";
import { motion } from "motion/react";
import happy_team from "../assets/team/happy_team.jpg";
import programming_team from "../assets/team/programming_team.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={happy_team}
            className="max-w-sm w-64  rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-red-500 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            src={programming_team}
            className="max-w-sm w-64  rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-red-500 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          {/* <h1 className="text-5xl font-bold">Latest Jobs For You!</h1> */}
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#10ad64", "#1310ad", "#6e0f07"] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
