export enum Screens {
  HOME = 'Home',
  AUTH = 'Auth',
}

export enum LocalStorageKeys {
  PRIVY_ID = 'privyId',
}

export interface IPrivyIdContext {
  privyId: string | null;
  setPrivyId: (privyId: string) => void;
}

export interface IRouterContext {
  currentScreen: Screens;
  setCurrentScreen: (screen: Screens) => void;
}
