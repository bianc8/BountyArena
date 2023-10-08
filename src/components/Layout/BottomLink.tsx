import { useRouter } from 'next/router';

function BottomLink({ children, href }: { children: React.ReactNode; href: string }) {
  const router = useRouter();
  const isDashboard = href == '/dashboard';
  let className = isDashboard
    ? router.asPath === href
      ? 'bg-[#FFAE00]'
      : ''
    : router.asPath.includes(href)
      ? 'bg-[#FFAE00]'
      : '';

  className +=
    ' inline-flex font-light text-white flex-col items-center justify-center px-2 hover:bg-[#FFAE00] group m-2 rounded-xl';

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={`${className} p-2`}>
      {children}
    </a>
  );
}

export default BottomLink;
