import Image from 'next/image';

import logo from '../public/images/logo.svg';
import userIcon from '../public/icons/user.svg';

export default function Home() {
  return (
    <>
      <header className="container relative w-full px-3 pt-8 pb-12 mx-auto overflow-hidden">
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
    </>
  );
}
