import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AddIcon from '../asset/icons/Add.svg';

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <h1 className="text-primary my-5">Home</h1>
      <div>
        <Link href="/contacts">
          <a className="btn btn-primary">Contacts</a>
        </Link>
        {/* <Link href="/contacts">
          <a className="btn btn-secondary">Contacts</a>
        </Link> */}
      </div>
      {/* <div className="btn btn-primary btn-icon">
        <Image src={AddIcon} alt="icon" />
      </div>
      <div className="btn btn-secondary btn-icon">
        <Image src={AddIcon} alt="icon" />
      </div>

      <div className="btn btn-primary btn-icon-text">
        <Image src={AddIcon} alt="icon" />
        <span>Add new</span>
      </div>
      <div className="btn btn-secondary btn-icon-text">
        <Image src={AddIcon} alt="icon" />
        <span>Add new</span>
      </div>
      <div>
        <div className="btn btn-special btn-icon-text">
          <Image src={AddIcon} alt="icon" />
          <span>Add new</span>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
