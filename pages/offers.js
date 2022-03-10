import Link from 'next/link';
import ArrowIcon from '../components/ui/ArrowIcon';
import Template from '../components/Template';

export default function Offers() {
  return (
    <Template goBackHref="/">
      <h1 className="text-2xl text-gray-500">Wir sind Fans von Spandau!</h1>
      <p className="mt-2 text-gray-500">Tolle Nachrichten warten auf Sie:</p>
      <div className="relative p-4 mt-6 bg-white rounded-lg shadow-md">
        <div className="absolute flex items-center justify-center w-12 h-12 text-xs font-medium text-white rounded-full -top-4 -right-4 bg-primary">
          NEU
        </div>
        <h3 className="font-semibold">Willkommenspacket im Dezember</h3>
        <ul className="mt-5">
          <li className="ml-6 before:absolute before:content-['\2014'] before:-ml-6">
            Housreiningung
          </li>
        </ul>
        <hr className="bottom-0 my-4 border-purple-300" />
        <p className="mb-2">Im Wertvon €295,90</p>
        <h5 className="font-medium">
          Bie Pflegegrad 2 ubenimmt die Kasse 100% der Kosten.
        </h5>
        <div className="flex items-center justify-center mt-3">
          <Link href="/offers">
            <a
              className="text-gray-100 bg-primary hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-800 font-medium rounded-lg text-sm px-16 py-2.5 text-center mr-2 my-2"
              href="/offers"
            >
              Unverbindlich Anfragen
            </a>
          </Link>
        </div>
        <p className="flex justify-center mt-3 text-xs text-primary">
          Prufen ob Pflegezuschuss ouf mich zutrifft
        </p>
      </div>
      <div>
        <p className="mt-2 text-gray-500">Was wir in Spandau anbieten:</p>
        <ul className="mt-3">
          <li className="mt-3 text-gray-500 bg-white rounded-lg shadow-md hover:shadow-lg">
            <Link href="/">
              <a
                className="flex justify-between px-6 py-2 hover:text-gray-700"
                href="/"
              >
                Fenster Reinigung <ArrowIcon classes="rotate-180" />
              </a>
            </Link>
          </li>
          <li className="mt-3 text-gray-500 bg-white rounded-lg shadow-md hover:shadow-lg">
            <Link href="/">
              <a
                className="flex justify-between px-6 py-2 hover:text-gray-700"
                href="/"
              >
                Wohnungs Reinigung <ArrowIcon classes="rotate-180" />
              </a>
            </Link>
          </li>
          <li className="mt-3 text-gray-500 bg-white rounded-lg shadow-md hover:shadow-lg">
            <Link href="/">
              <a
                className="flex justify-between px-6 py-2 hover:text-gray-700"
                href="/"
              >
                Garten Service
                <ArrowIcon classes="rotate-180" />
              </a>
            </Link>
          </li>
          <li className="mt-3 text-gray-500 bg-white rounded-lg shadow-md hover:shadow-lg">
            <Link href="/">
              <a
                className="flex justify-between px-6 py-2 hover:text-gray-700"
                href="/"
              >
                Hausmeister Service <ArrowIcon classes="rotate-180" />
              </a>
            </Link>
          </li>
          <li className="mt-3 text-gray-500 bg-white rounded-lg shadow-md hover:shadow-lg">
            <Link href="/">
              <a
                className="flex justify-between px-6 py-2 hover:text-gray-700"
                href="/"
              >
                Fahrdienst
                <ArrowIcon classes="rotate-180" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Template>
    // <>
    //   <div className="container flex p-4 mx-auto">
    //     <div className="flex flex-col items-center mr-8 text-gray-500">
    //       <ArrowIcon />
    //       <span>Zuruck</span>
    //     </div>
    //     <Logo />
    //   </div>

    //   <div className="container px-5 mx-auto mt-6">

    //   </div>
    // </>
  );
}
