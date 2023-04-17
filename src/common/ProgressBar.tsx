import React, { useState, useEffect } from "react";

interface ProgressBarProps {
  message: string;
  duration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ message, duration }) : JSX.Element => {
     const [progress, setProgress] = useState(0);

     useEffect(() => {
          let startTime = Date.now();
          let timerId = setInterval(() => {
               let elapsedTime = Date.now() - startTime;
               let newProgress = (elapsedTime / duration) * 100;
               if (newProgress >= 100) {
                    clearInterval(timerId);
                    setProgress(100);
               } else {
                    setProgress(newProgress);
               }
          }, 20);
         return () => clearInterval(timerId);
     }, [duration]);

  return (
     <div className="mt-4 w-full flex flex-col overflow-hidden bg-green-100 border-2 border-green-300 rounded-md">
          <div className="w-full px-2 py-3 flex gap-x-2">
               <svg className="w-5 h-5 text-green-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
               </svg>
               <p className="font-iranyekan-medium text-sm text-green-800">ثبت نام شما با موفقیت انجام شد</p>
          </div>
           <div className="bg-green-300 h-1 overflow-hidden">
               <div className="bg-green-500 h-full duration-150" style={{width: `${progress}%`}}/>
          </div>
     </div>
  );
};

export default ProgressBar;