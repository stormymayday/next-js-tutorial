import { db } from "@/db";
import DeleteUserForm from "./DeleteUserForm";

async function UsersList() {
    const users = await db.user.findMany();

    return (
        <section className="max-w-lg mt-4">
            {users.length ? (
                <div className="flex flex-col gap-y-3">
                    {users.map((user) => (
                        <div key={user.id} className="flex justify-between">
                            <p>
                                {user.firstName} {user.lastName}
                            </p>
                            <div>
                                <DeleteUserForm id={user.id} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No Users Found</p>
            )}
        </section>
    );
}
export default UsersList;
