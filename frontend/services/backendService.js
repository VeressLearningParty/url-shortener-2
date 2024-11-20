export default class BackendService {
    static backendDomain = 'url-shortener-2-backend'
    static backendPort = 3000

    static short(url) {
        return new Promise((resolve, reject) => {
            fetch(`http://${this.backendDomain}:${this.backendPort}/api/short`, {
                method: "POST",
                body: JSON.stringify({url: url}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(async(result) => {
                    let response = await result.json();
                    resolve(response)
                })
                .catch(error => {
                    console.log(error)
                    reject(error) 
                })
        })
    }


    static get(short) {
        return new Promise((resolve, reject) => {
            fetch(`http://${this.backendDomain}:${this.backendPort}/api/get/${short}`, {
                method: "GET"
            })
                .then(async (result) => {
                    let response = await result.json();
                    resolve(response.url)
                })
                .catch(error => reject(error))
        })
    }
}