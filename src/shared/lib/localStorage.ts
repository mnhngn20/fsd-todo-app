export function localStorageGetItem<T, TFallback = T>(
  key: string,
  fallback?: TFallback
) {
  const object = localStorage.getItem(key);

  if (!object) {
    return fallback;
  }

  const convertedItem = JSON.parse(object);

  return convertedItem;
}

export function localStorageSetItem(key: string, value: unknown) {
  return localStorage.setItem(key, JSON.stringify(value));
}
