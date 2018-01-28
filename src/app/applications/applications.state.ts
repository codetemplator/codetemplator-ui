export const applicationState: ApplicationsState = {
  isFetchingApps: false,
  showSideNav: true,
  isAddingApplication: false,
  apps: [],
  addForm: {
    name: ''
  }
};

export interface ApplicationsState {
  isFetchingApps: boolean;
  showSideNav: boolean;
  isAddingApplication: boolean;
  apps: Application[];
  addForm: AddForm
}

export interface Application {
  is: string;
  createdAt: string;
  name: string;
  userId: string;
}

export interface AddForm {
  name: string;
}
