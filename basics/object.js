// bind
Function.prototype.customBind = function (context, ...args) {
    const fn = this;
    return () => {
        fn.call(context, args);
    }
}

let a = {
    x:1,
    y:2
}

function fn() {
    console.log(this.x);
}

let b = fn.customBind(a);

b();
