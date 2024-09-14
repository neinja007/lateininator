import FancyLink from '@/components/FancyLink';
import { Route } from '@/constants/routes';

type FancyLinkContainerProps = { route: Route };

const FancyLinkContainer = ({ route }: FancyLinkContainerProps) => {
  return (
    <div key={route.label} className='mb-5 grid-cols-4 items-center md:mb-2 md:grid'>
      <div className='flex items-center gap-x-2 font-bold text-gray-600 dark:text-gray-400'>
        <route.icon className='w-5' /> {route.label.replace('{name}', 'Profil')}
      </div>
      <div className='col-span-3 items-center justify-between gap-x-2 sm:flex'>
        {route.children &&
          route.children
            .map((childRoute) => ({ ...childRoute, href: route.href + childRoute.href }))
            .map((route, i) => {
              return <FancyLink key={i} route={route} />;
            })}
      </div>
    </div>
  );
};

export default FancyLinkContainer;
