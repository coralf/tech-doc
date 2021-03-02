(() => {
    //1、数字转千分号
    function numToPermil(num) {
        const numstr = num.toString();
        const [a, b] = numstr.split('.');
        const lastDoIdx = a.length;
        let result = '';
        const differ = lastDoIdx % 3;
        for (let i = 0; i < lastDoIdx; i++) {
            result += numstr[i];
            if (i === lastDoIdx - 1) break;
            if ((i + 1) === differ || (i + 1 - differ) % 3 === 0) {
                result += ',';
            }
        }
        return result + '.' + b;
    }
    // console.log(numToPermil(1234567899.1234));
})();


(() => {
    //2、实现Promise
    const STATE = {
        PENDING: 'pending',
        FULFILLED: 'fulfilled',
        REJECTED: 'rejected'
    };

    class MyPromise {
        constructor(excutor) {
            this.state = STATE.PENDING;
            this.excutor = excutor;
            this.value = null;
            this.reason = null;
            try {
                this.excutor(this.resolve.bind(this), this.reject.bind(this));
            } catch (e) {
                this.reject(e);
            }
        }

        resolve(value) {
            if (this.state === STATE.PENDING) {
                this.state = STATE.FULFILLED;
                this.value = value;
            }
        }

        reject(reason) {
            if (this.state === STATE.PENDING) {
                this.state = STATE.REJECTED;
                this.reason = reason;
            }
        }

        then(resolveExcutor, rejectExcutor) {
            if (this.state === STATE.FULFILLED) {
                resolveExcutor(this.value);
            }
            if (this.state === STATE.REJECTED) {
                rejectExcutor(this.reason);
            }
        }
    }

    /*    new MyPromise((resolve, reject) => {
                resolve(0);
                reject(1);
            })
            .then((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            });*/

})();



(() => {
    //3、实现Promise.all();
    //要么全部成功，要么全部失败
    function promiseAll(arg) {
        return new Promise((resolve, reject) => {
            if (!Array.isArray(arg)) {
                throw Error('arguments must be an Array!');
            }
            const resolvedResult = [];
            let resolvedCounter = 0;
            const len = arg.length;
            for (let i = 0; i < len; i++) {
                Promise
                    .resolve(arg[i])
                    .then(value => {
                        resolvedCounter++;
                        resolvedResult.push(value);
                        if (resolvedCounter === len) {
                            resolve(resolvedResult);
                        }
                    }, err => {
                        reject(err);
                    })
            }
        })
    }

    /*    promiseAll([
                new Promise((resolve, reject) => {
                    console.log(1);
                    resolve(1);
                }),
                new Promise((resolve, reject) => {
                    console.log(2);
                    resolve(2);
                }),
                new Promise((resolve, reject) => {
                    console.log(3);
                    resolve(3);
                })
            ])
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log('err', err);
            });*/
})();


(() => {
    /*4、数组扁平化*/
    function flat(arr) {

        if (!Array.isArray(arr)) {
            throw Error('arr muse be an Array!');
        }

        return arr.reduce((acc, curr) => {
            if (Array.isArray(curr)) {
                const subArr = flat(curr);
                return [...acc, ...subArr];
            }
            return [...acc, curr];
        }, []);
    }

    function flat_v1(arr, result = []) {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            const item = arr[i];
            if (Array.isArray(item)) {
                flat_v1(item, result);
            } else {
                result.push(item);
            }
        }
        return result;
    }


    function flat_v2(arr) {
        return arr.flat(Infinity);
    }


   /* const arr = [1, 2, 3, 4, [1, 2, [545, 53, [2]]],
        [1],
        [121, 21, [323, 121]]
    ];

    const result = flat_v1(arr);
    console.log(result, arr.flat(Infinity));*/


})();

































































