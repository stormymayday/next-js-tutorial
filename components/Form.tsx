import * as actions from "@/actions";
import CreateUserBtn from "./CreateUserBtn";

function Form() {
    return (
        <form action={actions.createUser} className={formStyle}>
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
        </form>
    );
}

const formStyle = "max-w-lg flex flex-col gap-y-4 rounded shadow p-8";
const formHeaderStyle = "text-xl capitalize text-center mb-4";
const formInputStyle = "p-2 border rounded text-gray-700";

export default Form;
