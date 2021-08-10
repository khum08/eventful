# Intro
Simple、Lightful、Efficient event library. only 966 bytes.


# Quick start
## 1、install
```
npm install yzk-eventful
```


## 2、usage example
```javascript
import { Eventful } from 'yzk-eventful';


class A extends Eventful {
    constructor() {
        super();
        this.test();
    }

    test() {
        setInterval(() => {
            // dispatchEvent
            this.dispatchEvent('click', 1);
        }, 3000);
    }

}

const instance = new A();
let func = (event) => {
    console.log(event);
};
// addEventListener
instance.addEventListener('click', func);

// hasEventListener
let exist = instance.hasEventListener('click', func);

// removeEventListener
let success = instance.removeEventListener('click', func);

```