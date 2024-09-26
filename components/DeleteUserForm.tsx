"use client";

import { deleteUser } from "@/actions";
import DeleteUserBtn from "./DeleteUserBtn";
import { useFormState } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DeleteUserBtnProps {
    id: string;
}

function DeleteUserForm(props: DeleteUserBtnProps) {
    const deleteUserAction = deleteUser.bind(null, { message: "" }, props.id);

    const [formState, action] = useFormState(deleteUserAction, {
        message: "",
    });

    if (formState.message) {
        toast.success(formState.message);
    }

    return (
        <form action={action}>
            <ToastContainer />
            <DeleteUserBtn />
            {/* {formState.message ? toast.success("user deleted") : null} */}
        </form>
    );
}
export default DeleteUserForm;
