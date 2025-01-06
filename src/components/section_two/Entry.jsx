import Fuji from '../../assets/section_two/mt_fuji.jpg';
import Marker from '../../assets/section_two/marker.svg';

export default function Entry(props) {
  return (
    <>
      <section className="flex text-black h-60 pt-10 pl-10 justify-center items-center">
        <img
          className="rounded h-4/5 w-40"
          src={props.img.src}
          alt={props.img.alt}
        />
        <div className="pl-3 pt-2 w-1/4">
          <header className="flex">
            <img src={Marker} />
            <div className="pl-2">
              {props.location}
              <a className="pl-2 text-blue-600" href={props.googleMapsUrl}>
                View on Google Maps
              </a>
            </div>
          </header>
          <h1 className="font-extrabold text-2xl pt-2 pb-3">{props.title}</h1>
          <h3 className="font-bold">
            {props.startDate} - {props.endDate}
          </h3>
          <div className="text-xs">{props.description}</div>
        </div>
      </section>
    </>
  );
}
