export const promise = async (time = 5000, value = null, triggerError = false) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            try {
                if (triggerError) throw `Error in promise for value ${value}, using the ${time} ms timer`
                resolve(value);
            }
            catch (error) {
                resolve({ error: true, msg: error });
            }
        }, time);
    });
};