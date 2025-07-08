import { Html, useProgress } from "@react-three/drei";
import "./loader.css";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="container">
          <div className="box box-1"></div>
          <div className="box box-2"></div>
          <div className="box box-3"></div>
          <div className="box box-4"></div>
          <div className="box box-5"></div>
        </div>
        <p className="text-white mt-4 text-sm">
          {Math.floor(progress)}% loaded
        </p>
      </div>
    </Html>
  );
};

export default Loader;
