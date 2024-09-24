import type { Tour } from "@/types";

const url = "https://www.course-api.com/react-tours-project";

export const fetchTours = async () => {
    // delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(url);
    const data: Tour[] = await response.json();

    return data;
};
