import { useDispatch, useSelector } from "react-redux";
import { SetActivetabs } from "../Store/Features/SearchSlice";
import { Image, Video, FileVideo } from "lucide-react";

const Activetabs = () => {
  const dispatch = useDispatch();
  const activetab = useSelector((state) => state.search.Activetabs);

  const tabs = [
    { name: "Photos", icon: <Image size={18} /> },
    { name: "Videos", icon: <Video size={18} /> },
    { name: "Gifs", icon: <FileVideo size={18} /> },
  ];

  return (
    <div className="flex justify-center mt-8 mb-10">
      <div className="bg-white p-2 rounded-2xl shadow-md border border-slate-200 flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => dispatch(SetActivetabs(tab.name))}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer
              ${
                activetab === tab.name
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
          >
            {tab.icon}
            {tab.name}
            
          </button>
        ))}
      </div>
    </div>
  );
};

export default Activetabs;