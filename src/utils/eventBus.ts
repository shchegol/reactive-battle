export default class EventBus {
  private listeners: Map<string, Array<() => void>>;

  constructor() {
    this.listeners = new Map();
  }

  on(event: string, callback: any): void {
    if (!this.listeners.get(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event)?.push(callback);
  }

  off(event: string, callback: any): void {
    if (!this.listeners.get(event)) {
      return;
    }

    const newListeners = this.listeners.get(event)?.filter(
      (listener) => listener !== callback,
    );

    this.listeners.set(event, newListeners ?? []);
  }

  emit(event: string, ...args: unknown[]): void {
    if (!this.listeners.get(event)) return;

    this.listeners.get(event)?.forEach((listener: any) => {
      listener(...args);
    });
  }
}
