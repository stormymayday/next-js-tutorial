"use client";

import { useFormStatus } from "react-dom";

function DeleteUserBtn() {
    const { pending } = useFormStatus();

    return (
        <button
            className="bg-red-500 text-white text-xs rounded p-2"
            type="submit"
            disabled={pending}
        >
            {pending ? "deleting..." : "delete"}
        </button>
    );
}
export default DeleteUserBtn;
