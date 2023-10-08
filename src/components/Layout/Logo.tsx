import Link from 'next/link';

function Logo({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <div className={`text-xl sm:text-2xl font-bold ${theme == 'light' ? 'text-white' : 'text-[#FFAE00]'}`}>
      <Link href='/' className='flex items-center'>
        <p className='-ml-2 sm:ml-0'>
          BountyArena
        </p>
      </Link>
    </div>
  );
}

export default Logo;
