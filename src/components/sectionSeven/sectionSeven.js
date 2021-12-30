import Arrow from "../../assets/images/rightarrow.png";

const Sectionseven = () => {
  return (
    <div>
      <div className="sectionseven w-full py-10">
        <div className="w-full flex justify-none lg:justify-center flex-col lg:flex-row">
          <div className="w-full lg:w-10/12 flex flex-col lg:flex-row">
            {/* one */}
            <div className="w-full lg:w-3/12  border-b-2 lg:border-b-0 border-gray-500 lg:border-r-2 lg:border-gray-500 ">
              <div className="pt-2">
                <h6 className="text-black text-base font-medium pl-2 lg:pl-0 ">
                  Today is a good day
                </h6>
              </div>
              <div className="flex justify-between lg:pb-4 pb-7">
                <div className="pt-1">
                  <h6 className="text-black text-base pl-2 lg:pl-0 ">nice news</h6>
                </div>
                <div className="">
                  <img src={Arrow} alt="" className="h-5 pr-5" />
                </div>
              </div>
            </div>
            {/* //////// */}
            {/* two */}
            <div className="w-full lg:w-3/12 pl-0 lg:pl-6 border-b-2 lg:border-b-0 border-gray-500 lg:border-r-2 lg:border-gray-500">
              <div className="pt-2">
                <h6 className="text-black text-base font-medium pl-2 lg:pl-0 ">
                  Today is a good day
                </h6>
              </div>
              <div className="flex justify-between lg:pb-4 pb-7">
                <div className="pt-1">
                  <h6 className="text-black text-base pl-2 lg:pl-0 ">nice news</h6>
                </div>
                <div className="">
                  <img src={Arrow} alt="" className="h-5 pr-5" />
                </div>
              </div>
            </div>
            {/* /////////// */}
            {/* three */}
            <div className="w-full lg:w-3/12 pl-0 lg:pl-6 border-b-2 lg:border-b-0 border-gray-500 lg:border-r-2 lg:border-gray-500">
              <div className="pt-2">
                <h6 className="text-black text-base font-medium pl-2 lg:pl-0 ">
                  Today is a good day
                </h6>
              </div>
              <div className="flex justify-between lg:pb-4 pb-7">
                <div className="pt-1">
                  <h6 className="text-black text-base pl-2 lg:pl-0 ">nice news</h6>
                </div>
                <div className="">
                  <img src={Arrow} alt="" className="h-5 pr-5" />
                </div>
              </div>
            </div>
            {/* //////// */}
            {/* four */}
            <div className="w-full lg:w-3/12  pl-0 lg:pl-6">
              <div className="pt-2">
                <h6 className="text-black text-base font-medium pl-2 lg:pl-0 ">
                  Today is a good day
                </h6>
              </div>
              <div className="flex justify-between pb-4">
                <div className="pt-1">
                  <h6 className="text-black text-base pl-2 lg:pl-0 ">nice news</h6>
                </div>
                <div className="">
                  <img src={Arrow} alt="" className="h-5 pr-5" />
                </div>
              </div>
            </div>
            {/* ///////////// */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sectionseven;
