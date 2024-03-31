import number8Logo from 'assets/number8.png';
import { Link } from 'react-router-dom';
export function Header() {
  return (
    <div className="flex items-center justify-center p-5 md:justify-start md:pl-0">
      <div className="mt-2 flex size-36 flex-col items-center justify-center rounded-full bg-black">
        <figure>
          <Link to="/">
            <img src={number8Logo} alt="number8" aria-label="number 8" height={100} width={100} />
          </Link>
        </figure>
      </div>
    </div>
  );
}

export default Header;
