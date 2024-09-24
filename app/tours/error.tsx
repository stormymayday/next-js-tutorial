"use client";

function ToursErrorPage({ error }: { error: Error }) {
    return (
        <div className="h-[80vh] flex flex-col gap-2 items-center justify-center">
            <h1 className="text-4xl">Oops! There was an error!</h1>
            <p>{error.message}</p>
        </div>
    );
}
export default ToursErrorPage;
