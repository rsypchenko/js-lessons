class CustomPromise {
    constructor(callback) {
        this.status = 'pending';
        this.onFullfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = value => {
            if (this.status === 'pending') {
                this.status = 'fullfilled';
                this.value = value;
                this.onFullfilledCallbacks.forEach(fn => fn(value));
            }
        }

        const reject = value => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.value = value;
                this.onRejectedCallbacks.forEach(fn => fn(value));
            }
        }

        try {
            callback(resolve, reject);
        } catch(err) {
            reject(err);
        }
    }

    then(onFullfilled, onRejected) {
        return new CustomPromise((resolve, reject) => {
            if (this.status === 'pending') {
                this.onFullfilledCallbacks.push(() => {
                    try {
                        const fullfilledFromLastPromise = onFullfilled(this.value);
                        if (fullfilledFromLastPromise instanceof CustomPromise) {
                            fullfilledFromLastPromise.then(resolve, reject);
                        } else {
                            resolve(fullfilledFromLastPromise);
                        }
                    } catch(err) {
                        reject(err);
                    }
                });
                this.onRejectedCallbacks.push(() => {
                    try {
                        const rejectFromLastPromise = onRejected(this.value);
                        if (rejectFromLastPromise instanceof CustomPromise) {
                            rejectFromLastPromise.then(resolve, reject);
                        } else {
                            reject(rejectFromLastPromise);
                        }
                    } catch (err) {
                        reject(err);
                    }
                });
            }

            if (this.status === 'fullfilled') {
                try {
                    const fullfilledFromLastPromise = onFullfilled(this.value);
                    if (fullfilledFromLastPromise instanceof CustomPromise) {
                        fullfilledFromLastPromise.then(resolve, reject);
                    } else {
                        resolve(fullfilledFromLastPromise);
                    }
                } catch(err) {
                    reject(err);
                }
            }

            if (this.status === 'rejected') {
                try {
                    const rejectFromLastPromise = onRejected(this.value);
                    if (rejectFromLastPromise instanceof CustomPromise) {
                        rejectFromLastPromise.then(resolve, reject);
                    } else {
                        reject(rejectFromLastPromise);
                    }
                } catch (err) {
                    reject(err);
                }
            }
        });
    }
}

const response = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved");
    }, 300);
});

response.then((res) => {
    console.log(res);
    return res + '1';
}).then(res => {
    console.log(res);
})