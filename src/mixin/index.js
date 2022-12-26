export const helper = {
    methods: {
        /**
         * 尝试获取从obj中根据param获取数据
         * @param {any} obj
         * @param {string[]|string} param
         * @returns {any}
         */
        tryGet(obj, param) {
            if (!obj) return undefined;

            let error = undefined;
            let result = undefined;

            if (typeof param === "string") {
                param = [param];
            }

            if (param instanceof Array) {
                result = obj;

                let preKey = "根对象";
                for (const key of param) {
                    if (typeof key === "string") {
                        const regRet = key.match(/(.*)\((.*)\)/);

                        if (regRet !== null) { // key是个方法
                            if (!result[regRet[1]]) {
                                console.warn(`通过'${preKey}'获取的对象中找不到'${regRet[1]}'方法`);
                                return undefined;
                            }
                        } else { // key是个属性
                            if (!result[key]) {
                                console.warn(`通过'${preKey}'获取的对象中找不到'${key}'属性`);
                                return undefined;
                            }
                        }

                        result = eval(`result.${key}`);
                    } else {
                        error = key;
                        result = undefined;
                    }

                    if (error) break;

                    preKey = key;
                }
            } else {
                error = param;
            }

            if (error) {
                console.error(`传入的参数类型只能是字符串或字符串数组，${error}不是字符串`);
            }
            return result;
        },
        /**
         * 以interval毫秒的频率检测condition，直到condition返回的值为真
         * @param {()=>bool} condition
         * @param {number} interval
         * @returns {Promise<void>}
         */
        waitUntil(condition, interval = 100) {
            return new Promise(resolve => {
                const timer = setInterval(() => {
                    if (condition()) {
                        clearInterval(timer);
                        resolve();
                    }
                }, interval);
            })
        }
    }
}