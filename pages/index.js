import Image from 'next/image';
import Link from 'next/link';

import logo from '../public/images/logo.svg';
import userIcon from '../public/icons/user.svg';

export default function Home() {
  return (
    <>
      <header className="container relative w-full px-5 pt-8 pb-12 mx-auto overflow-hidden">
        <div className="w-56">
          <Image src={logo} alt="Binchonda logo" />
        </div>

        <div className="absolute w-40 h-40 border-2 rounded-full shadow-md -top-10 -right-14">
          <div className="absolute flex flex-col items-center justify-center text-sm font-semibold text-gray-500 uppercase bottom-6 left-6">
            <Image src={userIcon} alt="user icon" height={36} width={36} />
            <span>kunden</span>
            <span>bereich</span>
          </div>
        </div>
      </header>
      <main className="container px-5 mx-auto text-2xl text-gray-500">
        <h1>Der Berliner Pflegedienst mit Durchblick und Expertise</h1>

        <div className="flex flex-col items-center mt-6">
          <Link href="/">
            <a
              className="text-gray-500 focus:ring-4 focus:ring-gray-300 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-md bg-white w-full"
              href="/"
            >
              Postleitzahel eingeben
            </a>
          </Link>
          <Link href="/">
            <a
              className="w-2/3 text-gray-100 bg-primary hover:bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2"
              href="/"
            >
              Angebote ansehen
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
