import type { Technology } from "../Types/technology";
import { toast } from "react-toastify";

interface YourStackProps {
    selectedTechnologies: Technology[];
    setSelectedTechnologies: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const YourStack = ({ selectedTechnologies, setSelectedTechnologies }: YourStackProps) => {
    const handleRemove = (selected: Technology) => {
        setSelectedTechnologies(selectedTechnologies.filter((technology) => technology.id !== selected.id));
        toast.success(`${selected.name} removed from your stack!`);
    };
    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.success("All technologies removed from your stack!");
    }
    return (
        <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 lg:mt-39">
            <div>
                <h2 className="text-xl font-bold">Your Stack</h2>
                <p className="mt-2 text-sm">
                    {selectedTechnologies.length > 0 ? `${selectedTechnologies.length} technologies selected` : "No technologies selected yet."}
                </p>
            </div>
            <div>
                {selectedTechnologies.length === 0 ? (
                    <div className="mt-4 rounded-xl border border-dashed border-gray-200 px-4 py-6 text-center text-sm text-gray-400">
                        Your Stack is empty.
                    </div>
                ) : null}
                {selectedTechnologies.map((selected) => (
                    <div key={selected.id} className="mt-2 flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2">
                        <div className="h-14 w-14 p-3">
                            <img src={selected.icon} alt="" />
                        </div>
                        <div>
                            <h1 className="font-bold">{selected.name}</h1>
                            <p className="text-sm">{selected.category}</p>
                        </div>
                        <button
                            onClick={() => handleRemove(selected)}
                            className="ml-auto rounded-lg px-3 py-2 text-red-500 transition-colors hover:bg-red-50 hover:text-red-700"
                        >
                            ✕
                        </button>
                    </div>
                ))}
                {selectedTechnologies.length > 0 ?
                    <button
                        onClick={handleRemoveAll}
                        className="mt-4 w-full rounded-xl border px-4 py-3 font-semibold text-red-600 transition-colors hover:bg-red-100"
                    >
                        Remove All
                    </button>
                    : ""}
            </div>
        </div>
    );
};

export default YourStack;