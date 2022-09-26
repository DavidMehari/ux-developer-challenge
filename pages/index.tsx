import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="text-primary mt-24 h-24 flex items-center">Home</h1>
      <div>
        <Link href="/contacts">
          <a className="btn btn-primary">Contacts</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
