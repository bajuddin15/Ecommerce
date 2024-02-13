import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { ReactNode } from "react";

interface IProps {
  title: string;
  subTitle: string;
  children: ReactNode;
}

const TitleWrapper: React.FC<IProps> = ({ title, subTitle, children }) => {
  return (
    <div className="container flex flex-col gap-4 my-20">
      <div className="flex items-center gap-3">
        <div className="w-3 h-7 bg-red-500 rounded-sm"></div>
        <h2 className="text-base font-semibold text-red-500">{title}</h2>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{subTitle}</h2>
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 inline-block p-2 cursor-pointer">
            <ArrowLeft size={20} color="gray" />
          </div>
          <div className="bg-gray-100 inline-block p-2 cursor-pointer">
            <ArrowRight size={20} color="gray" />
          </div>
        </div>
      </div>

      {/* children */}
      <div>{children}</div>
    </div>
  );
};

export default TitleWrapper;
