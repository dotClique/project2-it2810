import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

type StorageObject = typeof window.localStorage | typeof window.sessionStorage;
// useStorage, useLocalStorage and useSessionStorage is taken from:
// https://github.com/WebDevSimplified/useful-custom-react-hooks/blob/main/src/8-useStorage/useStorage.js
/**
 * Hook to handle operations with localStorage
 * @param key The key of the object in the storageObject
 * @param defaultValue The default value of the item in the storageObject
 * @param storageObject Either localStorage or sessionStorage
 * @returns An array of [value, setValue, remove]
 */
function useStorage<ValueType>(
  key: string,
  defaultValue: ValueType,
  storageObject: StorageObject,
): [ValueType | undefined, Dispatch<SetStateAction<ValueType | undefined>>, () => void] {
  const [value, setValue] = useState<ValueType | undefined>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}

/**
 * Handling operations with localStorage
 * @param key The key of the object in localStorage
 * @param defaultValue The default value of the item in localStorage.
 * @returns An array of [value, setValue, remove]
 */
export function useLocalStorage<ValueType>(key: string, defaultValue: ValueType) {
  return useStorage(key, defaultValue, window.localStorage);
}

/**
 * Handling operations with sessionStorage
 * @param key The key of the object in sessionStorage
 * @param defaultValue The default value of the item in sessionStorage.
 * @returns An array of [value, setValue, remove]
 */
export function useSessionStorage<ValueType>(key: string, defaultValue: ValueType) {
  return useStorage(key, defaultValue, window.sessionStorage);
}
