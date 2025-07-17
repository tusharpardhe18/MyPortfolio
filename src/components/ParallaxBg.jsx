import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBg = () => {
  const { scrollYProgress } = useScroll();

  const mountain3Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBg;
