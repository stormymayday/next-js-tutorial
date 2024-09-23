import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main className="max-w-3xl mx-auto py-10">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
