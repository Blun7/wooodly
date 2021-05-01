function ProjectFooter() {
    return (
        <div className="flex flex-row mt-5 justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bg-red-100 h-12 w-12 p-3 rounded-l-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
            </svg>
            <div className="bg-gray-200 pt-3 pb-3 pl-5 pr-5 font-semibold">
                $49
            </div>
            <button className="bg-blue-200 hover:bg-blue-400 rounded-r-lg p-3">
                Interested
            </button>
        </div>
    );
}

export default ProjectFooter;
