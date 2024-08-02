import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col gap-4 p-24">
      <h1>Next JS Crash Course</h1>
      <Link href={"/products"}>Go to products page</Link>
    </main>
  );
};

export default Home;
