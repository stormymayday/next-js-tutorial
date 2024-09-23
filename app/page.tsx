import Link from "next/link";

function Home() {
    return (
        <div>
            <h1 className="text-7xl">Home Page</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/info">Info</Link>
        </div>
    );
}
export default Home;
