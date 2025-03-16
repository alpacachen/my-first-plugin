import { FC } from "react";

export const ResizeButton: FC<{
    setWidth: (width: number) => void
}> = ({ setWidth }) => {
    return (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center z-10">
            <div className="flex gap-1 bg-white rounded-lg shadow-md p-1 border border-gray-200">
                <button
                    onClick={() => setWidth(150)}
                    className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="7" y="4" width="10" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
                        <line x1="7" y1="20" x2="17" y2="20" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    Small
                </button>
                <button
                    onClick={() => setWidth(250)}
                    className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="6" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
                        <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    Medium
                </button>
                <button
                    onClick={() => setWidth(490)}
                    className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="5" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
                        <line x1="8" y1="19" x2="16" y2="19" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    Large
                </button>
            </div>
        </div>
    );
}