import Link from 'next/link';

function Logo({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <div className={`text-1xl font-bold ${theme == 'light' ? 'text-white' : 'text-redpraha'}`}>
      <Link href='/' className='flex items-center'>
        <p className='-ml-2 sm:ml-0'>
          Buidl Arena
        </p>
      </Link>
    </div>
  );
}

export default Logo;
