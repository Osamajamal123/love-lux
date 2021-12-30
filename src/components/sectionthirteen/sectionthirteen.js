import { useState } from "react";
import Plus from "../../assets/images/plus.png";
const Sectionthirteen = () => {
  const [openpara, Setopenpara] = useState(0);
  const openparaHandler = (value) => {
    if (openpara === value) {
      Setopenpara(0);
    } else {
      Setopenpara(value);
    }
  };
  return (
    <div>
      <div className="w-full flex justify-center pt-20">
        <div className="w-full lg:w-6/12">
          <div className=" faqsback">
            <div className="w-full h-full flex items-center justify-center">
              <h5 className="font-semibold text-xl">
                Frequently Asked Questions
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-center pb-2">
          <div className="w-11/12 lg:w-9/12 ">
            <div className="w-full flex justify-between bg-white rounded-md shadow-md border-white">
              <div className="py-4 px-4">
                <p onClick={() => openparaHandler(1)}>
                  Lorem ipsum dolor sit amet, consetetur
                </p>
              </div>
              <div className="py-4 px-4" onClick={() => openparaHandler(1)}>
                <img src={Plus} alt="" className="h-5" />
              </div>
            </div>
            {openpara === 1 && (
              <div className="pt-6">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet Lorem
                  ipsum dolor sit amet. consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren
                  gubergren.
                </p>
              </div>
            )}
          </div>
        </div>
        {/* 2 */}
        <div className="w-full flex justify-center pb-2 pt-4">
          <div className="w-11/12 lg:w-9/12 ">
            <div className="w-full flex justify-between bg-white rounded-md shadow-md border-white">
              <div className="py-4 px-4">
                <p onClick={() => openparaHandler(2)}>
                  Lorem ipsum dolor sit amet, consetetur
                </p>
              </div>
              <div className="py-4 px-4" onClick={() => openparaHandler(2)}>
                <img src={Plus} alt="" className="h-5" />
              </div>
            </div>
            {openpara === 2 && (
              <div className="pt-6">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet Lorem
                  ipsum dolor sit amet. consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren
                  gubergren.
                </p>
              </div>
            )}
          </div>
        </div>
        {/* ///////// */}
        {/* 3 */}
        <div className="w-full flex justify-center pb-2 pt-4">
          <div className="w-11/12 lg:w-9/12 ">
            <div className="w-full flex justify-between bg-white rounded-md shadow-md border-white">
              <div className="py-4 px-4">
                <p onClick={() => openparaHandler(3)}>
                  Lorem ipsum dolor sit amet, consetetur
                </p>
              </div>
              <div className="py-4 px-4" onClick={() => openparaHandler(3)}>
                <img src={Plus} alt="" className="h-5" />
              </div>
            </div>
            {openpara === 3 && (
              <div className="pt-6">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet Lorem
                  ipsum dolor sit amet. consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren
                  gubergren.
                </p>
              </div>
            )}
          </div>
        </div>
        {/* ///////// */}
        {/* 4 */}
        <div className="w-full flex justify-center pb-2 pt-4">
          <div className="w-11/12 lg:w-9/12 ">
            <div className="w-full flex justify-between bg-white rounded-md shadow-md border-white">
              <div className="py-4 px-4">
                <p onClick={() => openparaHandler(4)}>
                  Lorem ipsum dolor sit amet, consetetur
                </p>
              </div>
              <div className="py-4 px-4" onClick={() => openparaHandler(4)}>
                <img src={Plus} alt="" className="h-5" />
              </div>
            </div>
            {openpara === 4 && (
              <div className="pt-6">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet Lorem
                  ipsum dolor sit amet. consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren
                  gubergren.
                </p>
              </div>
            )}
          </div>
        </div>
        {/* /////////// */}
      </div>
    </div>
  );
};
export default Sectionthirteen;
