import number8Logo from 'assets/number8.png';
export function Header() {
  return (
    <div className="mt-2 flex size-36 flex-col items-center justify-center rounded-full bg-black">
      <figure>
        <img src={number8Logo} alt="number8" aria-label="number 8" height={100} width={100} />
      </figure>
    </div>
  );
}

export default Header;
