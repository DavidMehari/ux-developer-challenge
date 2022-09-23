import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <div>
        <Link href="/contacts">
          <a>Contacts</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
