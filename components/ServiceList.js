import Link from 'next/link';
import ChevronIcon from './ui/icons/ChevronIcon';

const ServiceList = ({ services }) => {
  return (
    <ul>
      {services.map((service) => (
        <li
          key={service.id}
          className="mt-3 text-gray-500 bg-white rounded-lg shadow-md dark:bg-slate-300 dark:text-gray-800 hover:shadow-lg"
        >
          <Link href={service.href}>
            <a
              className="flex justify-between px-6 py-2 hover:text-gray-700 dark:hover:text-gray-900"
              href={service.href}
            >
              {service.text}
              <ChevronIcon classes="text-gray-800 rotate-180" />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
