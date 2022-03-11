import Template from '../components/Template';
import Text from '../components/ui/Text';
import { RadoiInput, SelectInput } from '../components/ui/inputs';

const radioItems = [
  { id: 1, text: 'Alle 2 Wochen' },
  { id: 2, text: 'Monatlich' },
  { id: 3, text: 'Vierteljährlich' },
  { id: 4, text: 'Halbjährlich' },
];

const selectInputOptions = {
  id: 'selectId',
  label: 'Wie lange schätzen die die Dauer der Reinigung ein?',
  options: [
    { id: 1, value: '', text: 'Dauer auswählen' },
    { id: 2, value: 'auswählen_1', text: 'Auswählen 1' },
    { id: 3, value: 'auswählen_2', text: 'Auswählen 2' },
    { id: 4, value: 'auswählen_3', text: 'Auswählen 3' },
  ],
};

export default function Services() {
  return (
    <Template goBackHref="/offers">
      <Text>Wie oft Wünschen Sie eine Reiningung</Text>
      <div>
        <form action="">
          {radioItems.map((item) => (
            <RadoiInput key={item.id} id={item.id} name="name">
              {item.text}
            </RadoiInput>
          ))}
          <div className="mt-8">
            <SelectInput {...selectInputOptions} />
          </div>
          <div className="flex items-center justify-center mt-8">
            <button
              type="submit"
              className="text-gray-100 bg-primary hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-800 font-medium rounded-lg text-sm px-16 py-2.5 text-center mr-2 my-2"
              href="/"
            >
              Weiter zu Terminmöglichkeiten
            </button>
          </div>
        </form>
      </div>
    </Template>
  );
}
