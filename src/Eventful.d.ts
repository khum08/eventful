export declare class Eventful {
    private listeners;
    addEventListener(eventName: string, listener: Function): void;
    removeEventListener(eventName: string, listener: Function): boolean;
    hasEventListener(eventName: string, listener: Function): boolean;
    dispatchEvent(eventName: string, data: any): void;
    dispose(): void;
}
