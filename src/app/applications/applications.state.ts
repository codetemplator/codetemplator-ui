export const applicationState: ApplicationsState = {
  isFetchingApps: false,
  showSideNav: true,
  apps: []
};

export interface ApplicationsState {
  isFetchingApps: boolean;
  showSideNav: boolean;
  apps: Application[];
}

export interface Application {
  createdAt: string;
  name: string;
}
