import TalentLayerContext from '../../context/talentLayer';
import SideLink from './SideLink';
import { navigation, navigationAdmin } from './navigation';
import { useContext } from 'react';
import { useRouter } from 'next/router';

function SideMenu() {
  const { user } = useContext(TalentLayerContext);
  const router = useRouter();

  return (
    <nav className='space-y-1 px-3'>
      {navigation.map(item => (
        <SideLink key={item.name} href={item.href}>
          <item.icon
            className={`mr-3 h-5 w-5 flex-shrink-0 text-black \
              ${router.asPath.endsWith(item.href)
                ? 'bg-[#FFAE00] text-black'
                : 'text-white'}`}
            aria-hidden='true' />
          {item.name}
        </SideLink>
      ))}
      {user?.isAdmin && (
        <div className='pt-4'>
          <div className='border-gray-700 my-3 h-px border-t mx-3'></div>
          <h2 className='text-gray-400 ml-3 mt-6'>My platform</h2>
          <nav className='space-y-1 mt-6'>
            {navigationAdmin.map(item => (
              <SideLink key={item.name} href={item.href}>
                <item.icon
                  className='mr-3 h-5 w-5 flex-shrink-0 text-white'
                  aria-hidden='true'
                />
                {item.name}
              </SideLink>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}

export default SideMenu;
