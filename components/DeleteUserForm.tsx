"use client";

import { deleteUser } from "@/actions";
import DeleteUserBtn from "./DeleteUserBtn";
import { useFormState } from "react-dom";

interface DeleteUserBtnProps {
    id: string;
}

function DeleteUserForm(props: DeleteUserBtnProps) {
    const deleteUserAction = deleteUser.bind(null, { message: "" }, props.id);

    const [formState, action] = useFormState(deleteUserAction, {
        message: "",
    });

    return (
        <form action={action}>
            <DeleteUserBtn />
        </form>
    );
}
export default DeleteUserForm;
