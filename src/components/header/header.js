import "../../components/backgroundimage.css";
import Logo from "../../assets/images/logo1.png";
import Search from "../../assets/images/search.png";
import Profile from "../../assets/images/profile.png";
import Hamburger from "../../assets/images/hamburger.png";
import Lovelux from "../../assets/images/lovelux.png";
import Car from "../../assets/images/car.png";

const Header = () => {
  return (
    <div>
      <div className="backgroundImage pt-4 pl-4 pr-4 w-full">
        <div className=" w-full roundedsides shadow-md pt-14 pl-11 pr-8 ">
          <div className="w-full flex justify-between pb-9">
            {/* logo */}

            <div className="w-3/12 ">
              <img src={Logo} alt="" className="w-30 lg:w-40" />
            </div>

            {/* //////// */}
            {/* centerLIS */}
            <div className="w-6/12  hidden lg:block responsivenone">
              <div className="w-full flex items-center">
                <ul className="w-full flex justify-around mr-12">
                  <li className="backgroundwhite py-1 px-5 border-white border-2 text-lg font-semibold text-gray-500 rounded-full shadow-xl">
                    SUBCATEGORY
                  </li>
                  <li className="backgroundwhite py-1 px-5 border-white border-2 text-lg ml-20 font-semibold text-gray-500 rounded-full shadow-xl">
                    SUBCATEGORY
                  </li>
                  <li className="backgroundwhite py-1 px-5 border-white border-2 text-lg ml-20 font-semibold text-gray-500 rounded-full shadow-xl">
                    SUBCATEGORY
                  </li>
                </ul>
              </div>
            </div>

            {/* ///////// */}
            {/* headerimg */}
            <div className="w-3/12 flex justify-end pt-1">
              <div className="pr-7">
                <img src={Search} alt="" className="w-10" />
              </div>
              <div className="pr-7">
                <img src={Profile} alt="" className="w-10" />
              </div>
              <div className="pt-2 block lg:hidden xl:hidden">
                <img src={Hamburger} alt="" className="w-7" />
              </div>
            </div>
            {/* //////////// */}
          </div>
          {/* logodowndata */}
          <div className="w-full flex pb-16">
            {/* leftsidedata */}
            <div className="w-full lg:w-6/12">
              <div className="pt-16 pl-5">
                <h1 className="text-4xl text-red-500 font-medium">
                  For a Better Life
                </h1>
              </div>
              <div className="pl-5 w-10/12">
                <img src={Lovelux} alt="" className="w-11/12" />
              </div>
              <div className="w-full lg:w-8/12 pl-5 pt-5">
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
              <div className="w-full block lg:hidden pt-5">
                <img src={Car} alt="" />
              </div>
              <div className="flex justify-center lg:justify-start pt-16">
                <button className="backgroundwhite py-4 px-8 border-white border-2 text-lg font-semibold text-gray-500 rounded-full shadow-xl">
                  SUBCATEGORY
                </button>
              </div>
            </div>
            {/* rightside */}
           
              <div className="lg:w-6/12 hidden lg:block pt-56">
                <img src={Car} alt="" />
              </div>
            

            {/* //////// */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
