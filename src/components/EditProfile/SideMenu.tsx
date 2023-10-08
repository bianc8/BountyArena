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
            className={`mr-3 h-5 w-5 flex-shrink-0 \
            ${item.href == '/dashboard/profile/edit' ?
              router.asPath === item.href
                ? 'text-black bg-[#FFAE00]'
                : ''
              : router.asPath.includes(item.href)
                ? 'text-black bg-[#FFAE00]'
                : ''}`}
          />
          <span className='grow'>{item.name}</span>
        </SideLink>
      ))}
    </ul>
  );
}

export default SideMenu;
