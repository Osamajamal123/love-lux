import Logo from "../../assets/images/logo.png";
import Fly from "../../assets/images/fly.png";
import Call from "../../assets/images/call.png";
import Bluefacebook from "../../assets/images/bluefacebook.png";
import Twitter from "../../assets/images/twitterfooter.png";
import Instagram from "../../assets/images/insta.png";
import Bell from "../../assets/images/bell.png";
const Footer = () => {
  return (
    <div className="pt-16 ">
      <div className="w-full footerback">
        <div className="bg-black opacity-50">
          <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-around pl-4">
            <div className="w-full flex flex-col lg:flex-row ">
              <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
                <img src={Logo} alt="" className="h-60" />
              </div>
              <div className="w-full lg:w-3/12 pt-5 lg:pt-16">
                <h5 className="text-white text-lg font-semibold opacity-100">
                  Popular Searches
                </h5>
                <p className="text-gray-400 pt-3 ">Better Tours</p>
                <p className="text-gray-400 pt-2">Better Health</p>
                <p className="text-gray-400 pt-2">Better Life</p>
                <p className="text-gray-400 pt-2">For a Better Life</p>
              </div>
              <div className="w-full lg:w-3/12 pt-5 lg:pt-16">
                <h5 className="text-white text-lg font-semibold">
                  Popular Searches
                </h5>
                <p className=" text-gray-400 pt-3">Better Tours</p>
                <p className="text-gray-400 pt-2">Better Health</p>
                <p className="text-gray-400 pt-2">Better Life</p>
                <p className="text-gray-400 pt-2">For a Better Life</p>
              </div>
              <div className="w-full lg:w-2/12 pt-5 lg:pt-16">
                <h5 className="text-white text-lg font-semibold">
                  Popular Searches
                </h5>
                <p className="text-gray-400 pt-3">Better Tours</p>
                <p className="text-gray-400 pt-2">Better Health</p>
                <p className="text-gray-400 pt-2">Better Life</p>
                <p className="text-gray-400 pt-2">For a Better Life</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/12 pl-4 lg:pl-10 ">
            <p className="text-gray-400 ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
          <div className="w-full w-4/12 flex pl-3 lg:pl-6 pt-8">
            <div>
              <img src={Fly} alt="" className="h-6" />
            </div>
            <p className="pl-2 text-gray-400">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="w-full w-4/12 lg:pl-6 flex pl-3 pt-4">
            <div>
              <img src={Call} alt="" className="h-6" />
            </div>
            <p className="pl-2 text-gray-400">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="w-full lg:w-4/12 flex pl-6 lg:pl-9 pt-4 pb-6">
            <div>
              <img src={Bluefacebook} alt="" className="h-10" />
            </div>
            <div className="pl-3">
              <img src={Twitter} alt="" className="h-10" />
            </div>
            <div className="pl-3">
              <img src={Instagram} alt="" className="h-10" />
            </div>
            <div className="pl-3">
              <img src={Bell} alt="" className="h-10" />
            </div>
          </div>
          <div className="bg-gray-400 h-1 w-full"></div>
          <div className="w-full flex justify-center py-5 ">
            <div className="w-11/12 flex justify-between">
              <div className="w-6/12 flex flex-col">
                <h6 className="text-gray-400 font-semibold text-lg">
                  Facebook
                </h6>
                <h6 className="text-gray-400  font-semibold text-lg">
                  Instagram
                </h6>
                <h6 className="text-gray-400  font-semibold text-lg">
                  Twitter
                </h6>
                <h6 className="text-gray-400  font-semibold text-lg">
                  Snapshot
                </h6>
              </div>
              <div className="">
                <h6 className="text-gray-400">Copyright © 2020 <span className="text-white">Love&LUX</span></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
