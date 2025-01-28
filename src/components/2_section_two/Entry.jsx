import Fuji from '../../assets/2_section_two/mt_fuji.jpg';
import Marker from '../../assets/2_section_two/marker.svg';

export default function Entry(props) {
  const entryData = props.entry;

  return (
    <>
      <section className="flex text-black h-60 pt-10 pl-10 justify-center items-center">
        <img
          className="rounded h-4/5 w-40"
          src={entryData.img.src}
          alt={entryData.img.alt}
        />
        <div className="pl-3 w-1/4">
          <header className="flex">
            <img src={Marker} />
            <div className="pl-2">
              {entryData.location}
              <span>{entryData.country}</span>
              <a className="pl-2 text-blue-600" href={entryData.googleMapsUrl}>
                View on Google Maps
              </a>
            </div>
          </header>
          <h1 className="font-extrabold text-2xl pt-2 pb-3">
            {entryData.title}
          </h1>
          <h3 className="font-bold">{entryData.dates}</h3>
          <div className="text-xs">{entryData.text}</div>
        </div>
      </section>
    </>
  );
}
