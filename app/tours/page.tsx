import Link from "next/link";
import { fetchTours } from "@/utils";
import Image from "next/image";

async function ToursPage() {
    const data = await fetchTours();

    return (
        <section>
            <div className="grid md:grid-cols-2 gap-8">
                {data.map((tour) => {
                    return (
                        <Link
                            key={tour.id}
                            href={`/tours/${tour.id}`}
                            className="hover:text-blue-500"
                        >
                            <div className="relative h-48 mb-2">
                                <Image
                                    src={tour.image}
                                    alt={tour.name}
                                    fill
                                    sizes="33vw"
                                    priority
                                    className="object-cover rounded"
                                />
                            </div>

                            <div>{tour.name}</div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
export default ToursPage;
