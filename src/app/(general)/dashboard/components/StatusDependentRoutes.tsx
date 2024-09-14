import FancyLink from '@/components/FancyLink';
import { Route } from '@/constants/routes';
import { makeStatusDependent } from '@/utils/other/makeStatusDependent';
import { Fragment } from 'react';

type StatusDependentRoutesProps = {
  routes: Route[];
};

const StatusDependentRoutes = ({ routes }: StatusDependentRoutesProps) => {
  return (
    <div className='col-span-3 items-center justify-between gap-2 sm:flex'>
      {routes.map((route, i) => (
        <Fragment key={i}>
          {makeStatusDependent(<FancyLink route={{ ...route, href: '/user' + route.href }} />, route.status)}
        </Fragment>
      ))}
    </div>
  );
};

export default StatusDependentRoutes;
