"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// export const createUser = async (
//     formState: { message: string },
//     formData: FormData
// ) => {
//     try {
//         const firstName = formData.get("firstName");
//         const lastName = formData.get("lastName");

//         if (typeof firstName !== "string" || firstName.length <= 0) {
//             return {
//                 message: "firstname must be longer!",
//             };
//         }

//         if (typeof lastName !== "string" || lastName.length <= 0) {
//             return {
//                 message: "lastname must be longer!",
//             };
//         }

//         await db.user.create({
//             data: {
//                 firstName: firstName,
//                 lastName: lastName,
//             },
//         });

//         revalidatePath("/actions");
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             return {
//                 message: error.message,
//             };
//         } else {
//             return {
//                 message: "Something went wrong...",
//             };
//         }
//     }
// };

export async function createUser(
    formState: { successMessage: string; errorMessage: string },
    formData: FormData
) {
    try {
        // Check the user's inputs and sure they are valid
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");

        if (typeof firstName !== "string" || firstName.length <= 0) {
            return {
                successMessage: "",
                errorMessage: "first name must be longer",
            };
        }

        if (typeof lastName !== "string" || lastName.length <= 0) {
            return {
                successMessage: "",
                errorMessage: "last name must be longer",
            };
        }

        // Create a new record in the database
        await db.user.create({
            data: {
                firstName,
                lastName,
            },
        });

        revalidatePath("/actions");

        return {
            successMessage: "user created",
            errorMessage: "",
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                successMessage: "",
                errorMessage: error.message,
            };
        } else {
            return {
                successMessage: "",
                errorMessage: "Something went wrong...",
            };
        }
    }
}

export const deleteUser = async (id: string) => {
    await db.user.delete({
        where: {
            id,
        },
    });

    revalidatePath("/actions");
};
