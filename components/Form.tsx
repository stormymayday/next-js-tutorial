import { createUser } from "@/actions";

function Form() {
    return (
        <form action={createUser} className={formStyle}>
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
            <button className={formBtnStyle} type="submit">
                submit
            </button>
        </form>
    );
}

const formStyle = "max-w-lg flex flex-col gap-y-4 rounded shadow p-8";
const formHeaderStyle = "text-xl capitalize text-center mb-4";
const formInputStyle = "p-2 border rounded text-gray-700";
const formBtnStyle =
    "bg-blue-500 hover:bg-blue-700 p-2 rounded text-white font-bold capitalize";

export default Form;
