"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";
import CreateUserBtn from "./CreateUserBtn";
import { toast } from "react-toastify";

function Form() {
    const [formState, action] = useFormState(actions.createUser, {
        successMessage: "",
        errorMessage: "",
    });

    return (
        <form action={action} className={formStyle}>
            <h2 className={formHeaderStyle}>create user</h2>
            <input
                className={formInputStyle}
                type="text"
                name="firstName"
                defaultValue="peter"
            />
            <input
                className={formInputStyle}
                type="text"
                name="lastName"
                defaultValue="smith"
            />

            <CreateUserBtn />

            {formState.successMessage
                ? toast.success(formState.successMessage)
                : // <div className="my-2 p-2 bg-green-200 border rounded text-center">
                  //     {formState.successMessage}
                  // </div>
                  null}

            {formState.errorMessage ? (
                <div className="my-2 p-2 bg-red-200 border rounded text-center">
                    {formState.errorMessage}
                </div>
            ) : null}
        </form>
    );
}

const formStyle = "max-w-lg flex flex-col gap-y-4 rounded shadow p-8";
const formHeaderStyle = "text-xl capitalize text-center mb-4";
const formInputStyle = "p-2 border rounded text-gray-700";

export default Form;
