import Link from 'next/link';

import ArrowIcon from './ui/ArrowIcon';
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
            <ArrowIcon /> <span>Zuruck</span>
          </a>
        </Link>

        <Logo />
      </div>

      <div className="container px-5 mx-auto mt-6">{children}</div>
    </>
  );
};
export default Template;
