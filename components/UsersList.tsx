import { db } from "@/db";

async function UsersList() {
    const users = await db.user.findMany();

    return (
        <>
            <h3 className="text-xl">Users</h3>
            {users ? (
                users.map((user) => (
                    <p key={user.id}>
                        {user.firstName} {user.lastName}
                    </p>
                ))
            ) : (
                <p>No users found</p>
            )}
        </>
    );
}
export default UsersList;
