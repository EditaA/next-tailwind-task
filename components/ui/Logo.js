import Image from 'next/image';
import logo from '../../public/images/logo.svg';

export default function Logo() {
  return (
    <div className="w-56">
      <Image src={logo} alt="Binchonda logo" />
    </div>
  );
}
