import Link from 'next/link';

import ChevronIcon from './ui/icons/ChevronIcon';
import Logo from './ui/Logo';
import ThemeToggler from './ui/ThemeToggler';

const Template = ({ goBackHref, children }) => {
  return (
    <div className="container max-w-xl mx-auto">
      <div className="flex p-4">
        <Link href={goBackHref}>
          <a
            className="flex flex-col items-center mr-8 text-gray-500 dark:text-gray-300"
            href={goBackHref}
          >
            <ChevronIcon /> <span>Zurück</span>
          </a>
        </Link>

        <Logo />

        <div className="ml-auto">
          <ThemeToggler />
        </div>
      </div>

      <div className="px-5 mt-6">{children}</div>
    </div>
  );
};
export default Template;
