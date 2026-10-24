import { use } from "react";
import type { Technology } from "../Types/technology";

interface TechnologyCardsProps {
    technologiesPromise: Promise<Technology[]>;
}

const TechnologyCards = ({ technologiesPromise }: TechnologyCardsProps) => {
    const technologies = use(technologiesPromise);

    return (
        <div className="container mx-auto mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-4">Explore the <span className="brand-gradient-text">Technologies</span></h1>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-gray-200 bg-white p-5 shadow-sm">
                {technologies.map((technology) => (
                    <div
                        key={technology.id}
                        className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
                    >
                        {/* Icon and Badge */}
                        <div className="mb-5 flex items-center justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 p-3">
                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                                {technology.badge}
                            </span>
                        </div>

                        {/* Technology Name */}
                        <h2 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-violet-700">
                            {technology.name}
                        </h2>

                        {/* Description */}
                        <p className="mb-5 min-h-12 text-sm leading-6 text-gray-600">
                            {technology.description}
                        </p>

                        {/* Category and Difficulty */}
                        <div className="mb-5 flex items-center justify-between gap-2">
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                                {technology.category}
                            </span>

                            <span className="text-xs font-medium text-gray-500">
                                {technology.difficulty}
                            </span>

                        {/* Rating */}
                        <div>
                            <span className="text-lg text-amber-400">★</span>
                            <span className="text-sm font-semibold text-gray-800">
                                {technology.rating}
                            </span>
                        </div>
                        </div>

                        {/* Add to Stack Button */}
                        <button
                            type="button"
                            className="bg-black w-full rounded-xl px-4 py-3 font-semibold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-1 active:scale-95"
                        >
                            Add to Stack
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologyCards;