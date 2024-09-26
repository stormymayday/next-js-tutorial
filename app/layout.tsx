import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Next JS Tutorial",
    description: "Next JS Tutorial",
    keywords: "nextjs, next.js, next js, tutorial",
};

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
                    <ToastContainer />
                </main>
            </body>
        </html>
    );
}
