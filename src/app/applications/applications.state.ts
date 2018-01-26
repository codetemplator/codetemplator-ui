export const applicationState: ApplicationsState = {
  isFetchingApps: false,
  apps: []
};

export interface ApplicationsState {
  isFetchingApps: boolean;
  apps: Application[];
}

export interface Application {
  createdAt: string;
  name: string;
}
