import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/Globe";

const About = () => {
    const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
        <h2 className="txt-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            { /* Grid column 1*/}
            <div className="flex items-end grid-default-color grid-1">
                <img 
                    src="assets/coding-pov.png" 
                    alt=""
                    className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" 
                />
                <div className="z-10">
                    <p className="headtext">Hi, I'm Tushar</p>
                    <p className="subtext">Over the last 2 years, I developed my frontend and backend dev skills to deliver dynamic and software and web applications.</p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
            </div>
            { /* Grid column 2 */}
            <div className="grid-default-color grid-2">
                <div 
                    ref={grid2Container}
                    className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-600">
                      CODE IS CRAFT  
                    </p>
                    <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="GRASP" containerRef={grid2Container} />

                    <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="SOLID" containerRef={grid2Container} />

                    <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Design Patterns" containerRef={grid2Container} />

                    <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Design Principles" containerRef={grid2Container} />

                    <Card style={{ rotate: "20deg", top: "10%", left: "40%" }} text="SRP" containerRef={grid2Container}/>

                    <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/csharp-pink.png" containerRef={grid2Container}/>

                    <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/dotnet-pink.png" containerRef={grid2Container}/>

                    <Card style={{ rotate: "-45deg", top: "5%", left: "5%" }} image="assets/logos/blazor-pink.png" containerRef={grid2Container}/>

                </div>
            </div>
            { /* Grid column 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">
                        Time Zone
                    </p>
                    <p className="subtext">
                        I'm based in Bhopal, India, and open to work.
                    </p>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
            </div>
            { /* Grid column 4 */}
            <div className="grid-special-color grid-4">

            </div>
            { /* Grid column 5 */}
            <div className="grid-default-color grid-5">

            </div>
        </div>
    </section>
  )
}

export default About