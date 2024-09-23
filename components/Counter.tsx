"use client";

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col gap-6 items-center justify-center">
            <p className="text-4xl">Count: {count}</p>
            <div className="flex gap-4">
                <button
                    className="bg-blue-500 text-white capitalize text-xs px-4 py-2 rounded"
                    onClick={() => setCount(count + 1)}
                >
                    increase
                </button>
                <button
                    className="bg-red-500 text-white text-xs capitalize px-4 py-2 rounded"
                    onClick={() => setCount(count - 1)}
                >
                    decrease
                </button>
            </div>
        </div>
    );
}
export default Counter;
