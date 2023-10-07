import { useContext } from 'react';
import SideLink from './SideLink';
import { navigation } from './navigation';
import TalentLayerContext from '../../context/talentLayer';
import { ICompletionScores } from '../../utils/profile';
import { useRouter } from 'next/router';

function SideMenu() {
  const { completionScores } = useContext(TalentLayerContext);
  const router = useRouter();

  return (
    <ul className='space-y-1 font-sans text-sm'>
      {navigation().map(item => (
        <SideLink
          key={item.name}
          href={item.href}
          isCompleted={
            completionScores &&
            completionScores[item.completitonKey as keyof ICompletionScores]?.percentage == 100
              ? true
              : false
          }>
          <item.icon
            width={20} height={20}
            className={`mr-3 h-5 w-5 flex-shrink-0 text-black \
            ${router.asPath === item.href || router.asPath.endsWith(item.href)
              ? 'bg-[#FFAE00] text-black'
              : 'text-white'}`}
          />
          <span className='grow'>{item.name}</span>
        </SideLink>
      ))}
    </ul>
  );
}

export default SideMenu;
