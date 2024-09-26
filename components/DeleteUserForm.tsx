"use client";

import { deleteUser } from "@/actions";
import DeleteUserBtn from "./DeleteUserBtn";
import { useFormState } from "react-dom";
// import { toast } from "react-toastify";

interface DeleteUserBtnProps {
    id: string;
}

function DeleteUserForm(props: DeleteUserBtnProps) {
    const deleteUserAction = deleteUser.bind(null, { message: "" }, props.id);
    const [deleteUserFormState, action] = useFormState(deleteUserAction, {
        message: "",
    });

    console.log(deleteUserFormState.message);

    return (
        <form action={action}>
            {/* <input type="hidden" name="id" value={props.id} /> */}
            <DeleteUserBtn />
        </form>
    );
}
export default DeleteUserForm;
