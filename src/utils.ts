import { useContext } from 'react';
import { PrivyIdContext, RouterContext } from '@/components';
import { LocalStorageKeys } from './types';

export function usePrivyId() {
  return useContext(PrivyIdContext);
}

export function useRouter() {
  const context = useContext(RouterContext);

  if (context === null) {
    throw new Error('useRouter must be used within a Router');
  }

  return context;
}

export function getFromLocalStorage(key: LocalStorageKeys) {
  return localStorage.getItem(key);
}

export function setInLocalStorage(key: LocalStorageKeys, value: string) {
  localStorage.setItem(key, value);
}

export function removeFromLocalStorage(key: LocalStorageKeys) {
  localStorage.removeItem(key);
}

export function clearLocalStorage() {
  localStorage.clear();
}

export function getStoredPrivyId() {
  return getFromLocalStorage(LocalStorageKeys.PRIVY_ID);
}

export function storePrivyId(privyId: string) {
  setInLocalStorage(LocalStorageKeys.PRIVY_ID, privyId);
}

export function removePrivyId() {
  removeFromLocalStorage(LocalStorageKeys.PRIVY_ID);
}
