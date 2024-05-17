import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pet Shelter 🐾",
  description: "A pet shelter for all your pet needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="ml-5 mt-5">
          <h1 className="text-3xl font-bold">Pet Shelter</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
