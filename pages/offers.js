import Link from 'next/link';
import ServiceList from '../components/ServiceList';
import Template from '../components/Template';
import Text from '../components/ui/Text';

const services = [
  { id: 1, href: '/', text: 'Fenster Reinigung' },
  { id: 2, href: '/', text: 'Wohnungs Reinigung' },
  { id: 3, href: '/', text: 'Garten Service' },
  { id: 4, href: '/', text: 'Hausmeister Service' },
  { id: 5, href: '/', text: 'Fahrdienst' },
];

export default function Offers() {
  return (
    <Template goBackHref="/">
      <h1 className="text-2xl text-gray-500">Wir sind Fans von Spandau!</h1>
      <Text>Tolle Nachrichten warten auf Sie:</Text>
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
          Bie Pflegegrad 2 übenimmt die Kasse 100% der Kosten.
        </h5>
        <div className="flex items-center justify-center mt-3">
          <Link href="/services">
            <a
              className="text-gray-100 bg-primary hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-800 font-medium rounded-lg text-sm px-16 py-2.5 text-center mr-2 my-2"
              href="/services"
            >
              Unverbindlich Anfragen
            </a>
          </Link>
        </div>
        <p className="flex justify-center mt-3 text-xs text-primary">
          Prüfen ob Pflegezuschuss ouf mich zutrifft
        </p>
      </div>
      <div>
        <Text>Was wir in Spandau anbieten:</Text>
        <div className="mt-3">
          <ServiceList services={services} />
        </div>
      </div>
    </Template>
  );
}
