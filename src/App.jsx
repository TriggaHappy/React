import './index_section_one/section_one_index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar_two from './components/section_two/Navbar_two.jsx';
import Entry from './components/section_two/Entry.jsx';

export default function App() {
  const travelData = [
    {
      title: 'Mount Fuji',
      location: 'Japan',
      googleMapsUrl:
        'https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu',
      startDate: '12 Jan, 2021',
      endDate: '24 Jan, 2021',
      description:
        'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
      imageUrl: 'https://scrimba.com/links/travel-journal-japan-image-url',
    },
  ];
  return (
    <>
      <Navbar_two />
      {travelData.map((data, index) => (
        <Entry
          key={index}
          title={data.title}
          location={data.location}
          googleMapsUrl={data.googleMapsUrl}
          startDate={data.startDate}
          endDate={data.endDate}
          description={data.description}
          img={{ src: data.imageUrl, alt: 'Mount Fuji' }}
        />
      ))}
    </>
  );
}
