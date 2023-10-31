import { CheckCircle } from "lucide-react";

type Props = {};

const PriceBenefits = (props: Props) => {
  return (
    <div className="rounded-[20px] border-[#EAECF0] border dark:border-0 z-0 relative cursor-pointer group  md:p-12 md:pb-10 py-9 px-4">
      <span
        className="absolute -inset-[2px] -z-20 rounded-[21px] duration-200 "
        style={{
          background:
            "linear-gradient(121.52deg, rgba(255, 255, 255, 0.25) -2.26%, rgba(234, 236, 240, 0) 100%)",
        }}></span>
      <span className="absolute duration-200 inset-0 -z-10 rounded-[20px]  bg-transparent dark:bg-dark-1000 "></span>
      <div className="flex md:flex-row flex-col">
        <h3 className="font-semibold text-3xl md:mb-0 mb-9 md:text-left text-center lg:pr-12">
          What's included
        </h3>
        <div className="md:border-l-2 border-[#DEDEDE] dark:md:border-dark-800 md:pl-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-6 md:gap-y-10 mb-12 md:mb-14">
            <div className="flex items-center gap-6">
              <CheckCircle />
              <p className="text-lg text-slate-700 leading-7 dark:text-dark-300">
                Premium support by email
              </p>
            </div>
            <div className="flex items-center gap-6">
              <CheckCircle />
              <p className="text-lg text-slate-700 leading-7 dark:text-dark-300">
                Ability to request features
              </p>
            </div>
            <div className="flex items-center gap-6">
              <CheckCircle />
              <p className="text-lg text-slate-700 leading-7 dark:text-dark-300">
                Commercial usage of photos
              </p>
            </div>
            <div className="flex items-center gap-6">
              <CheckCircle />
              <p className="text-lg text-slate-700 leading-7 dark:text-dark-300">
                Early access to new features
              </p>
            </div>
            <div className="flex items-center gap-6">
              <CheckCircle />
              <p className="text-lg text-slate-700 leading-7 dark:text-dark-300">
                Save your rooms in a dashboard
              </p>
            </div>
            <div className="flex items-center gap-6">
              <CheckCircle />
              <p className="text-lg text-slate-700 leading-7 dark:text-dark-300">
                Premium room types and styles
              </p>
            </div>
          </div>
          {/* <p className="text-lg  md:text-left text-center">
            Interested in team or bulk pricing? Email{" "}
            <a href="mailto:hassan@roomgpt.io" className="font-bold">
              hassan@roomgpt.io
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default PriceBenefits;
