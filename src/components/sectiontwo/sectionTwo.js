import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Facebook from "../../assets/images/facebook1.png";
import Instagram from "../../assets/images/instagram1.png";
import Twitter from "../../assets/images/twitter1.png";
import Right from "../../assets/images/right.png";

const Sectiontwo = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

  return (
    <div>
      <div className="backgroundImageend pl-4 pr-4 w-full pt-24 justify-center lg:justify-end flex">
        <div className="backgroundwhite w-full lg:w-10/12 sectiontworounded shadow-md  pt-5 pl-4 pb-10">
        <div className="w-full flex justify-start">
        <div className="pl-3 pr-6">
              <img src={Facebook} alt="" className="w-12 pb-4" />
              <img src={Twitter} alt="" className="w-12 pb-4" />
              <img src={Instagram} alt="" className="w-12 " />
            </div>
            <div className="lifeback">
              <div className="flex justify-center items-center h-full font-semibold text-xl">
                <h5>Beter Life</h5>
              </div>
            </div>
          </div>
          <div>
          <Carousel responsive={responsive}>
  <div className="w-full pr-2">
      <div className="womenback">
      <div className="w-full h-full flex justify-between items-end pl-4 pr-4 pb-4">
                  <div className="pb-1">
                    <h5 className="font-semibold text-white text-xl">
                      Any Tour place Name
                    </h5>
                  </div>
                  <div className="rounded-xl bg-white">
                    <img src={Right} alt="" className="w-12" />
                  </div>
                </div>
          </div>
  </div>
  <div className="w-full pl-2 pr-4">
      <div className="tableback">
      <div className="w-full h-full flex justify-between items-end pl-4 pr-4 pb-4">
                  <div className="pb-1">
                    <h5 className="font-semibold text-white text-xl">
                      Naran Kagan
                    </h5>
                  </div>
                  <div className="rounded-xl bg-white">
                    <img src={Right} alt="" className="w-12" />
                  </div>
                </div>
          </div>
  </div>
  <div className="w-full pl-2 pr-4">
      <div className="womenback">
      <div className="w-full h-full flex justify-between items-end pl-4 pr-4 pb-4">
                  <div className="pb-1">
                    <h5 className="font-semibold text-white text-xl">
                      Any Tour place Name
                    </h5>
                  </div>
                  <div className="rounded-xl bg-white">
                    <img src={Right} alt="" className="w-12" />
                  </div>
                </div>
          </div>
  </div>
  <div className="w-full pl-2 pr-4">
      <div className="tableback">
      <div className="w-full h-full flex justify-between items-end pl-4 pr-4 pb-4">
                  <div className="pb-1">
                    <h5 className="font-semibold text-white text-xl">
                      Naran Kagan
                    </h5>
                  </div>
                  <div className="rounded-xl bg-white">
                    <img src={Right} alt="" className="w-12" />
                  </div>
                </div>
          </div>
  </div>
</Carousel>;
          </div>
          <div className="flex justify-start lg:justify-center w-full text-justify pt-11 pl-1 pr-2 lg:pr-0">
            <div className="w-full lg:w-9/12"> 
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos
            </p>
            </div>
          </div>
          {/* /////// */}
        </div>
      </div>
    </div>
  );
};
export default Sectiontwo;
