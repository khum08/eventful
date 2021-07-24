# Intro
Simple、Lightful、Efficient event library. only 966 bytes.


# Quick start
## 1、install
```
npm install yzk-eventful
```


## 2、usage example
```
class A extends Event.Eventful {
    constructor() {
        super();
        this.test();
    }

    test() {
        setInterval(() => {
            this.dispatchEvent('click', 1);
        }, 3000);
    }

}

const instance = new A();
let func = (event) => {
    console.log(event);
};

instance.addEventListener('click', func);

let exist = instance.hasEventListener('click', func);

let success = instance.removeEventListener('click', func);

```