import React from 'react'

export default function CourseCard({ id, title, description, price }) {
    return (
        <a href={`course/${id}`}>
            <div className="service-card group m-4 flex h-[300px] w-[300px] shrink-0 cursor-pointer snap-start flex-col items-start gap-3 bg-white px-6 py-8 shadow-xl transition-all duration-300 hover:bg-[#202127]">
                <svg
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth={2}
                    stroke="#000000"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-12 w-12 stroke-gray-800 text-5xl group-hover:stroke-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect ry={2} rx={2} height={14} width={20} y={3} x={2} />
                    <line y2={21} x2={16} y1={21} x1={8} />
                    <line y2={21} x2={12} y1={17} x1={12} />
                </svg>
                <p className="text-2xl font-bold text-black/80 group-hover:text-white">
                    {title}
                </p>
                <p className="text-sm text-gray-400">{description}</p>
                <p
                    style={{
                        WebkitTextStroke: '1px gray',
                        WebkitTextFillColor: 'transparent',
                    }}
                    className="self-end text-5xl font-bold"
                >
                    ₹ {price}
                </p>
            </div>
        </a>
    )
}
