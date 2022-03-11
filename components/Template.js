import Link from 'next/link';

import ChevronIcon from './ui/icons/ChevronIcon';
import Logo from './ui/Logo';

const Template = ({ goBackHref, children }) => {
  return (
    <>
      <div className="container flex p-4 mx-auto">
        <Link href={goBackHref}>
          <a
            className="flex flex-col items-center mr-8 text-gray-500"
            href={goBackHref}
          >
            <ChevronIcon /> <span>Zurück</span>
          </a>
        </Link>

        <Logo />
      </div>

      <div className="container px-5 mx-auto mt-6">{children}</div>
    </>
  );
};
export default Template;
