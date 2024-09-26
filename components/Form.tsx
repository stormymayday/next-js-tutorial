"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";
import CreateUserBtn from "./CreateUserBtn";
import { toast } from "react-toastify";
import { useEffect } from "react";

function Form() {
    const [createUserFormState, action] = useFormState(actions.createUser, {
        successMessage: "",
        errorMessage: "",
    });

    useEffect(() => {
        if (createUserFormState.successMessage) {
            toast.success(createUserFormState.successMessage);
        }

        // if (createUserFormState.errorMessage) {
        //     toast.error(createUserFormState.errorMessage);
        // }
    }, [createUserFormState.successMessage]);

    return (
        <form action={action} className={formStyle}>
            <h2 className={formHeaderStyle}>create user</h2>
            <input
                className={formInputStyle}
                type="text"
                name="firstName"
                // defaultValue="peter"
                placeholder="peter"
            />
            <input
                className={formInputStyle}
                type="text"
                name="lastName"
                // defaultValue="smith"
                placeholder="smith"
            />

            <CreateUserBtn />

            {/* {createUserFormState.successMessage ? (
                <div className="my-2 p-2 bg-green-200 border rounded text-center">
                    {createUserFormState.successMessage}
                </div>
            ) : null} */}

            {createUserFormState.errorMessage ? (
                <div className="my-2 p-2 bg-red-200 border rounded text-center">
                    {createUserFormState.errorMessage}
                </div>
            ) : null}
        </form>
    );
}

const formStyle = "max-w-lg flex flex-col gap-y-4 rounded shadow p-8";
const formHeaderStyle = "text-xl capitalize text-center mb-4";
const formInputStyle = "p-2 border rounded text-gray-700";

export default Form;
