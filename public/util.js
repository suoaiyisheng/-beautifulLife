const baseUrl = 'http://127.0.0.1:8000/'
const request = (url, data, method)=> {
        return new Promise((resolve, reject) => {
            if (url.startsWith('/')) url = baseUrl + url
            let req = new XMLHttpRequest();
            req.open(method,)
            req.onload = function () {
                if (req.status === 200) {
                     resolve(req.responseText);
                } else {
                    reject(new Error(req.statusText));
                };
            };
            req.onerror = function () {
                reject(new Error(req.statusText));
            };
            req.send();
        })
    }