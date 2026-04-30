export type NavRoutesType = {
  name: string;
  path: string;
  adminOnly: boolean;
  freePlanFeature?: boolean;
};

export const navRoutes: NavRoutesType[] = [
  {
    name: 'home',
    path: '/taskeye/home',
    adminOnly: false,
    freePlanFeature: true,
  },
  {
    name: 'projects',
    path: '/taskeye/projects',
    adminOnly: false,
    freePlanFeature: true,
  },
  // {
  //   name: 'schedule',
  //   path: '/taskeye/schedule',
  //   adminOnly: true,
  //   freePlanFeature: false,
  // },
  {
    name: 'reporting',
    path: '/taskeye/reporting/overview',
    adminOnly: true,
    freePlanFeature: false,
  },
];
