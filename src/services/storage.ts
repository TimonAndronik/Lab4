export class Storage {
  private static instance: Storage;

  private constructor() {}

  save<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  clear(): void {
    localStorage.clear();
  }

  static getInstance(): Storage {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }

    return Storage.instance;
  }
}
