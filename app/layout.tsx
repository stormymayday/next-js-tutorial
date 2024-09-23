import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <main className="max-w-3xl mx-auto py-10">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
