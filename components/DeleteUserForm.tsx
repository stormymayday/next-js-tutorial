"use client";

import { deleteUser } from "@/actions";
import DeleteUserBtn from "./DeleteUserBtn";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

interface DeleteUserBtnProps {
    id: string;
}

function DeleteUserForm(props: DeleteUserBtnProps) {
    const deleteUserAction = deleteUser.bind(null, { message: "" }, props.id);

    const [deleteUserFormState, action] = useFormState(deleteUserAction, {
        message: "",
    });

    if (deleteUserFormState.message) {
        toast.success(deleteUserFormState.message);
    }

    return (
        <form action={action}>
            <DeleteUserBtn />
        </form>
    );
}
export default DeleteUserForm;
