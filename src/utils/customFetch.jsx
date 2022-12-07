let is_ok = true;

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task);
            }else{
                reject("error in the customFetch")
            }
        }, time)
    })
}

export default customFetch;