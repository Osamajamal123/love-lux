import Tick from "../../assets/images/greentick.png"
const Sectiontwelve = () => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-6/12">
          <div className=" packageimg">
            <div className="w-full h-full flex items-center justify-center">
              <h5 className="font-semibold text-xl">Package</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pb-5 pt-3">
        <div className="w-full lg:w-9/12 flex flex-col lg:flex-row ">
          <div className="w-full lg:w-5/12">
              <div className="pb-6 pl-6 lg:pl-8">
              <h6 className="text-black text-medium font-semibold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h6>
              </div>
              <div className="flex pb-4 pl-6 lg:pl-8 ">
                <img src={Tick} alt="" className="h-5 pr-2" />
                <div >
                  <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  </p>
                </div>
              </div>
              <div className="flex pb-4 pl-6 lg:pl-8">
                <img src={Tick} alt="" className="h-5 pr-2" />
                <div >
                  <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  </p>
                </div>
              </div>
              <div className="flex pb-4 pl-6 lg:pl-8">
                <img src={Tick} alt="" className="h-5 pr-2" />
                <div >
                  <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  </p>
                </div>
              </div>
              <div className="flex pb-8 pl-6 lg:pl-8">
                <img src={Tick} alt="" className="h-5 pr-2" />
                <div >
                  <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  </p>
                </div>
              </div>
          </div>
          <div className="w-full lg:w-7/12  flex justify-end pl-6 pr-6 lg:pl-10">
<div className="bg-black w-full lg:w-10/12 flex flex-col items-center justify-center py-3">
<div>
    <del className="text-white text-xl">4,000,000 Tours</del>
</div>
<div className="pt-4">
    <h2 className="text-white text-3xl">2,300,000</h2>
</div>
<div className="pt-4 ">
    <h6 className="text-white text-md text-center">Possibility to pay periodic installment fee.</h6>
</div>
<div className="pt-6">
    <button className="bg-red px-5 py-1 text-white">Buy Now</button>
</div>
</div>
        </div>
        </div>
       
      </div>
    </div>
  );
};
export default Sectiontwelve;
