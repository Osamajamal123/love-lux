import Facebook from "../../assets/images/facebook1.png";
import Instagram from "../../assets/images/instagram1.png";
import Twitter from "../../assets/images/twitter1.png";
import Right from "../../assets/images/right.png";

const Sectionthree =()=>{
    return(
        <div>
 <div className="backgroundImage pl-4 pr-4 w-full pt-12 pb-16">
        <div className="backgroundwhite w-full lg:w-10/12 sectiontworounded shadow-md mt-10 pt-5 pl-4 pb-10">
          {/* topdata */}
          <div className="w-full flex justify-end">
            <div className="healthback">
              <div className="flex justify-center items-center h-full font-semibold text-xl">
                <h5>Better Health</h5>
              </div>
            </div>
            <div className="pl-3 pr-6">
              <img src={Facebook} alt="" className="w-12 pb-4" />
              <img src={Twitter} alt="" className="w-12 pb-4" />
              <img src={Instagram} alt="" className="w-12 " />
            </div>
          </div>
          {/* //////// */}
          {/* imagesDiv */}
          <div className="w-full flex flex-col lg:flex-row pt-3">
            {/* imageone */}
            <div className="w-full lg:w-5/12 ">
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
            {/* /// */}
            <div className="w-full lg:w-5/12 lg:pl-5 pt-5 lg:pt-0">
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
          </div>
          {/* //////////// */}
          {/* paragraph */}
          <div className="flex justify-start lg:justify-center w-full text-justify pt-11 pl-1 pr-2 lg:pr-0 ">
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
    )
}
export default Sectionthree;