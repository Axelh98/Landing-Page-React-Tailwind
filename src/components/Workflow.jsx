import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/img/code.jpg";
import { checklistItems } from "../assets/constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-pink-800 bg-clip-text text-transparent">
          coding workflow
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={ codeImg } alt="Code" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounder-full">
                <CheckCircle2 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
