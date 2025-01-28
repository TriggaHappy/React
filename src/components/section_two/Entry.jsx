import Fuji from '../../assets/section_two/mt_fuji.jpg';
import Marker from '../../assets/section_two/marker.svg';

export default function Entry() {
  return (
    <>
      <section className="flex text-black h-60 pt-10 pl-10 justify-center items-center">
        <img className="rounded h-4/5 w-40" src={Fuji} />
        <div className="pl-3 pt-2 w-1/4">
          <header className="flex">
            <img src={Marker} />
            <div className="pl-2">
              JAPAN
              <a
                className="pl-2 text-blue-600"
                href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
              >
                View on Google Maps
              </a>
            </div>
          </header>
          <h1 className="font-extrabold text-2xl pt-2 pb-3">Mount Fuji</h1>
          <h3 className="font-bold">12 Jan, 2021 - 24 Jan, 2021</h3>
          <div className="text-xs">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </div>
        </div>
      </section>
    </>
  );
}
