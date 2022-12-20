export const helper = {
    methods: {
        /**
         * @param {string[]|string} param
         */
        tryGet(obj, param) {
            if (obj === undefined) return undefined;

            let error = false;
            let result = undefined;

            if (typeof param === "string") {
                result = obj[param];
            } else if (param instanceof Array) {
                result = obj;
                for (const key of param) {
                    if (typeof key === "string") {
                        result = result[key];
                    } else {
                        error = true;
                        result = undefined;
                    }

                    if (error) break;
                }
            } else {
                error = true;
            }

            if (error) {
                console.error(`传入的参数${param}类型错误`);
            }
            return result;
        }
    }
}