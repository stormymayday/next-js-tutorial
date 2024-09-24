import { notFound } from "next/navigation";
import { fetchTours } from "@/utils";
import type { Tour } from "@/types";
import Image from "next/image";

interface TourDetailsPageProps {
    params: {
        id: string;
    };
}

async function TourDetailsPage(props: TourDetailsPageProps) {
    const tours = await fetchTours();

    const tour: Tour | undefined = tours.find(
        (tour) => tour.id === props.params.id
    );

    if (!tour) {
        return notFound();
    }

    return (
        <div>
            <h1 className="text-4xl">Tour: {tour.name}</h1>
            {/* <p>{tour.image}</p> */}
            <section className="flex gap-x-4 mt-4">
                <div>
                    <Image
                        src={tour.image}
                        alt={tour.name}
                        width={192}
                        height={192}
                        className="w-48 h-48 object-cover rounded"
                    />
                </div>
            </section>
        </div>
    );
}

export default TourDetailsPage;

export async function generateStaticParams() {
    const tours = await fetchTours();

    return tours.map((tour) => {
        return {
            id: tour.id,
        };
    });
}
