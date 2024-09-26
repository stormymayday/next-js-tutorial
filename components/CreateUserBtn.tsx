"use client";

import { useFormStatus } from "react-dom";

function CreateUserBtn() {
    const result = useFormStatus();

    const { pending } = result;

    return (
        <button className={formBtnStyle} type="submit" disabled={pending}>
            {pending ? "submitting..." : "submit"}
        </button>
    );
}

const formBtnStyle =
    "bg-blue-500 hover:bg-blue-700 p-2 rounded text-white font-bold capitalize";

export default CreateUserBtn;
