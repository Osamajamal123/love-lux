import Tick from "../../assets/images/tick.png";
import Email from "../../assets/images/email2.png";
const sectionTen = () => {
  return (
    <div>
      <div className="bg-black w-full py-16 lg:pl-20 pl-0">
        <div className="w-full flex flex-col lg:flex-row justify-start  justify-around ">
          <div className="w-full lg:w-6/12 pl-0 lg:pl-8 ">
            <div>
              <div className="pb-3 pl-2">
                <h5 className="text-white text-xl font-semibold">
                  Request a list of headings
                </h5>
              </div>
              <div className="pb-4 pl-2">
                <p className="text-white text-gray-500 ">
                  Please enter your email address to receive course titles, the
                  topics will be emailed to you.
                </p>
              </div>
              <div className="pb-5 pl-2">
                <input
                  type="text"
                  placeholder="anuthing @gmail.com"
                  className="w-10/12 py-1 bg-gray-800 rounded-md py-2 px-2"
                />
              </div>
              <div className="flex pl-2">
                <img src={Tick} alt="" className="h-7" />
                <p className="text-white pt-1 pl-2 text-gray-600">
                  Please enter your email address to receive course titles, the
                  topics will be emailed to you.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-6/12 flex justify-center pt-16 lg:pt-0">
          <div className=" w-full pl-32">
            <div className="w-5/12">
              <div className="imageemail">
                <div className="h-full flex items-center justify-center w-full">
                  <img src={Email} alt=""  className="h-24"/>
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
export default sectionTen;
