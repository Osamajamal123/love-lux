import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Client from "../../assets/images/client.png";

const Sectioneight = () => {
  const responsiveslide = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div className="hidden lg:block">
      <div className="sectioneight pt-6 pb-14">
        <div className="w-full flex justify-start lg:justify-end">
          <div className="w-full lg:w-9/12 flex flex-col lg:flex-row">
            <div className="w-full lg:w-6/12 py-3">
              <h2 className="text-black text-4xl font-medium">
                For a Better Life With LOVE&LUX
              </h2>
            </div>
            <div className="w-full lg:w-6/12  ">
              <div className="w-10/12 sectioneightbackimg">
                <div className="bg-black bg-opacity-50 hover:bg-transparent w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pl-4 pr-4">
          <h2 className="text-black text-3xl pl-3 font-semibold">
            Our Clients
          </h2>
          <div className="rounded pt-4 pb-10">
            <div className="bg-black py-1 rounded w-full"></div>
          </div>
        </div>
        <div className="carouseldots">
          <Carousel responsive={responsiveslide} arrows={false} showDots={true}>
            <div className="flex   px-7 lg:px-10">
              <div className="bg-white  flex flex-col lg:flex-row justify-center lg:justify-start pl-0 lg:pl-14 py-4">
                <div className="flex justify-center lg:justify-inherit">
                  <div>
                    <img
                      src={Client}
                      alt=""
                      className="lg:h-10 lg:w-28 "
                    />
                  </div>
                </div>
                <div className="pl-0 lg:pl-10">
                  <h5 className="text-black text-medium font-semibold text-center lg:text-left">
                    Secure Payments
                  </h5>
                  <h6 className="text-gray-500 text-sm  font-semibold text-center lg:text-left">
                    Business owner at co.chart
                  </h6>
                  <div className="w-11/12">
                    <p className="text-xs  pt-1 text-center lg:text-left text-justify pl-2 lg:pl-0">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex   px-7 lg:px-10">
              <div className="bg-white  flex flex-col lg:flex-row justify-center lg:justify-start pl-0 lg:pl-14 py-4">
                <div className="flex justify-center lg:justify-inherit">
                  <div>
                    <img
                      src={Client}
                      alt=""
                      className="lg:h-10 lg:w-28 "
                    />
                  </div>
                </div>
                <div className="pl-0 lg:pl-10">
                  <h5 className="text-black text-medium font-semibold text-center lg:text-left">
                    Secure Payments
                  </h5>
                  <h6 className="text-gray-500 text-sm  font-semibold text-center lg:text-left">
                    Business owner at co.chart
                  </h6>
                  <div className="w-11/12">
                    <p className="text-xs  pt-1 text-center lg:text-left text-justify pl-2 lg:pl-0">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex   px-7 lg:px-10">
              <div className="bg-white  flex flex-col lg:flex-row justify-center lg:justify-start pl-0 lg:pl-14 py-4">
                <div className="flex justify-center lg:justify-inherit">
                  <div>
                    <img
                      src={Client}
                      alt=""
                      className="lg:h-10 lg:w-28 "
                    />
                  </div>
                </div>
                <div className="pl-0 lg:pl-10">
                  <h5 className="text-black text-medium font-semibold text-center lg:text-left">
                    Secure Payments
                  </h5>
                  <h6 className="text-gray-500 text-sm  font-semibold text-center lg:text-left">
                    Business owner at co.chart
                  </h6>
                  <div className="w-11/12">
                    <p className="text-xs  pt-1 text-center lg:text-left text-justify pl-2 lg:pl-0">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex   px-7 lg:px-10">
              <div className="bg-white  flex flex-col lg:flex-row justify-center lg:justify-start pl-0 lg:pl-14 py-4">
                <div className="flex justify-center lg:justify-inherit">
                  <div>
                    <img
                      src={Client}
                      alt=""
                      className="lg:h-10 lg:w-28 "
                    />
                  </div>
                </div>
                <div className="pl-0 lg:pl-10">
                  <h5 className="text-black text-medium font-semibold text-center lg:text-left">
                    Secure Payments
                  </h5>
                  <h6 className="text-gray-500 text-sm  font-semibold text-center lg:text-left">
                    Business owner at co.chart
                  </h6>
                  <div className="w-11/12">
                    <p className="text-xs  pt-1 text-center lg:text-left text-justify pl-2 lg:pl-0">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <div className="lg:pr-12 lg:pt-5 pr-0 pt-10">
            <button className="bg-white text-gray-600 text-medium font-semibold px-3 py-1">
              View Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sectioneight;
