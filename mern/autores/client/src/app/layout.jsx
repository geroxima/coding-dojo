import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Authors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className="mt-5 ml-5">
          <h1 className="text-3xl font-bold" >Favorite Authors</h1>
          {children}
       </div>
      </body>
    </html>
  );
}
