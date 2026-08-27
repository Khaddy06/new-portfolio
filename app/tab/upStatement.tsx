import { MdOutlinePlayArrow } from "react-icons/md";

function UpStatement() {
  return (
    <div>
      <h2 className="md:text-xl text-lg text-[#ccd6f6] font-semibold  pb-2">
        Frontend Developer <span className="text-[#64ffda] mx-1">@</span>
        <span className="text-[#64ffda] hover:underline">Personal Project</span>
      </h2>
      <p className="text-[#ccd6f6] text-sm font-light">2025 - Present</p>
      <div className="flex mt-5 ">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 flex-1 min-w-0 max-w-[100%] sm:max-w-md md:max-w-lg break-words">
          Developed responsive and user-friendly web applications 
          using React, Next.js, and Tailwind CSS.
        </p>
      </div>
      <div className="flex mt-2 ">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 flex-1 min-w-0 max-w-[100%] sm:max-w-md md:max-w-lg break-words">
          Built reusable UI components and maintained clean, 
          scalable frontend code across multiple projects.
        </p>
      </div>
      <div className="flex mt-2">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 flex-1 min-w-0 max-w-[90%] sm:max-w-md md:max-w-lg break-words">
           Integrated APIs and Firebase services to support real-time data and application functionality.
        </p>
      </div>
      <div className="flex mt-2">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 flex-1 min-w-0 max-w-[90%] sm:max-w-md md:max-w-lg break-words">
         Developed a real-time chat application with messaging features using Firebase and Firestore.
        </p>
      </div>
        <div className="flex mt-2">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 flex-1 min-w-0 max-w-[90%] sm:max-w-md md:max-w-lg break-words">
         Built an e-commerce application with React and Vite, focusing on responsive design and smooth user experience.
        </p>
      </div>


    </div>
  );
}

export default UpStatement;
