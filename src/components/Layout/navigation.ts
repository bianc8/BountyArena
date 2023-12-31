import {
  BriefcaseIcon,
  ChatBubbleBottomCenterIcon,
  UserGroupIcon,
  CheckIcon,
  UserIcon,
  PresentationChartLineIcon,
  ExclamationCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: UserIcon, current: false },
  { name: 'Chat', href: '/dashboard/messaging', icon: ChatBubbleBottomCenterIcon, current: false },
  { name: 'Bounties', href: '/dashboard/bounties', icon: BriefcaseIcon, current: false },
  { name: 'Hackers', href: '/dashboard/talents', icon: UserGroupIcon, current: false },
  { name: 'Validator', href: '/dashboard/validator', icon: CheckIcon, current: false },
];

export const navigationAdmin = [
  {
    name: 'Presentation',
    href: `/admin/presentation`,
    icon: PresentationChartLineIcon,
    current: false,
  },
  {
    name: 'Fees strategies',
    href: `/admin/fees`,
    icon: ShieldCheckIcon,
    current: false,
  },
  {
    name: 'Dispute',
    href: `/admin/dispute`,
    icon: ExclamationCircleIcon,
    current: false,
  },
];
