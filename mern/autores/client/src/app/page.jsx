import Link from "next/link";
import AuthorTable from "./components/AuthorsTable";

export default function Home() {
  return (
    <div>
      <Link href="/new" className="underline text-blue-500 font-semibold">
        Add authors
      </Link>
      <h3>We have quotes from</h3>
      <AuthorTable/>
    </div>
  );
}
