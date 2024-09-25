"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export const createUser = async (formData: FormData) => {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;

    // console.log(formData.get("firstName"));
    await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });

    revalidatePath("/actions");
};
