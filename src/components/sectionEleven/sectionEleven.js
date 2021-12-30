import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Writing from "../../assets/images/writing.png";
import Girls from "../../assets/images/girls.png";
import Tick from "../../assets/images/tick.png";
const Sectioneleven = () => {
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="sectionEleven pt-12">
        <div className="w-full flex justify-center">
          <div className="w-full lg:w-6/12">
            <div className=" overviewimg">
              <div className="w-full h-full flex items-center justify-center">
                <h5 className="font-semibold text-xl">Overview</h5>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pl-3 block lg:hidden flex  justify-center">
          <div className="w-10/12  p-2 ">
            <div className="carouselcolor pl-3 pr-3  py-2 radiusdiv ">
              <Carousel responsive={responsive2}>
                <div>
                  <img src={Writing} alt="" className="picsize" />
                </div>
                <div>
                  <img src={Girls} al="" className="picsize" />
                </div>
                <div>
                  <img src={Writing} alt="" className="picsize" />
                </div>
                <div>
                  <img src={Girls} al="" className="picsize" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start lg:justify-center">
          <div className="w-full lg:w-10/12">
            <div>
              <div className="w-full lg:w-6/12 flex flex-col justify-center">
                <div className="w-full flex">
                  <div className="blackdot mt-1 hidden lg:block" ></div>
                  <div className="lg:pl-2 pl-4 pt-3 lg:pt-0">
                    <h3 className="text-black text-3xl font-semibold">
                      Love & Lux
                    </h3>
                  </div>
                </div>
                <div className="w-full lg:w-9/12 pt-4 lg:pl-1 pl-4 pr-3 lg:pr-0">
                  <p className="leading-loose">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="w-full flex justify-center">
          <div className="lg:w-8/12 w-full flex">
            <div className="w-full lg:w-6/12 pt-8">
              <div className="flex pb-8 pl-4 lg:pl-0">
                <img src={Tick} alt="" className="h-5 pr-2" />
                <div >
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
              <div className="flex pb-8 pl-4 lg:pl-0">
                <img src={Tick} alt="" className="h-5 pr-2" />
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
              <div className="flex pb-8 pl-4 lg:pl-0">
                <img src={Tick} alt="" className="h-5 pr-2" />
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
              <div className="flex pb-20 pl-4 lg:pl-0">
                <img src={Tick} alt="" className="h-5 pr-2" />
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-6/12 flex justify-center ">
            <div className="w-full pl-3 hidden lg:block ">
              <div className="flex justify-end ">
              <div className="w-7/12 p-2 absoluteDiv">
            <div className="carouselcolor pl-3 pr-3  py-2 radiusdiv">
              <Carousel responsive={responsive2}>
                <div>
                  <img src={Writing} alt="" className="" />
                </div>
                <div>
                  <img src={Girls} al="" className="" />
                </div>
                <div>
                  <img src={Writing} alt="" className="" />
                </div>
                <div>
                  <img src={Girls} al="" className="" />
                </div>
              </Carousel>
            </div>
          </div>
              </div>
      
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sectioneleven;
