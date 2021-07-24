type LISTENER_CONTAINER = {
    [key: string]: Function[]
}

export class Eventful {

    private listeners: LISTENER_CONTAINER = {};


    addEventListener(eventName: string, listener: Function): void {
        const listenerArr = this.listeners[eventName] || (this.listeners[eventName] = []);
        listenerArr.push(listener);
    }

    removeEventListener(eventName: string, listener: Function): boolean {
        const listenerArr: Function[] = this.listeners[eventName];
        if (listenerArr) {
            const index = listenerArr.findIndex(item => item === listener);
            if (index !== -1) {
                listenerArr.splice(index, 1);
                return true;
            }
        }
        return false;
    }
    
    hasEventListener(eventName: string, listener: Function) : boolean {
        const listenerArr: Function[] = this.listeners[eventName];
        if (listenerArr) {
            const index = listenerArr.findIndex(item => item === listener);
            return index !== -1;
        }
        return false;
    }

    dispatchEvent(eventName: string, data: any) : void {
        const listenerArr: Function[] = this.listeners[eventName];
        if (listenerArr) {
            listenerArr.forEach(listener => {
                listener.call(this, data);
            });
        }
    }

    dispose() {
        this.listeners = {};
    }

}