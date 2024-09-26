import { db } from "@/db";

async function UsersList() {
    const users = await db.user.findMany();

    return (
        <section className="max-w-lg">
            <h3 className="text-xl my-5">Users</h3>
            {users.length ? (
                users.map((user) => (
                    <div key={user.id} className="flex justify-between">
                        <p>
                            {user.firstName} {user.lastName}
                        </p>
                        <div>
                            <form>
                                <button>delete</button>
                            </form>
                        </div>
                    </div>
                ))
            ) : (
                <p>No Users Found</p>
            )}
        </section>
    );
}
export default UsersList;
