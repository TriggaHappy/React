import Chef from '../../assets/3_section_three/chef_claude.svg';

export default function Navbar_three() {
  return (
    <>
      <main className="flex justify-center items-center h-1/6 pt-3 pb-3 shadow-lg mb-2">
        <img src={Chef} className="h-15 w-15" />
        <span className="pl-2 text-3xl">Chef Claude</span>
      </main>
    </>
  );
}
