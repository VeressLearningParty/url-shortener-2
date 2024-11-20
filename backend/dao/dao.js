import Database from '../db/db.js'
import crypto from "crypto"

export default class Shorts {
    static tableName = `tableurl`;
    short;
    url;

    constructor(raw) {
        if (raw) {
            this.short = raw.short
            this.url = raw.url
        } else {
            this.short = Shorts.generateShort()
        }
    }

    static async get(short) {
            let result = await Database.query(`SELECT url FROM ${Shorts.tableName} WHERE short = "${short}";`);
                return (await result);
    }

    static async getAll() { 
        let result = await Database.query(`SELECT * FROM ${Shorts.tableName};`);
            return (await result);
    }

    insert() {
        return new Promise((resolve,reject) => {
            Database.insert(Shorts.tableName,this)
                .then(results => resolve(this))
                .catch(error => reject(error))
        })
        //return this.query(`INSERT INTO ${Shorts.tableName} (short, url) VALUES (${Shorts.short}, ${Shorts.url});`);
    }

    update() {
        return new Promise((resolve,reject) => {
            Database.update(tableName,this)
                .then(results => resolve(this))
                .catch(error => reject(error))
        })
    }

    delete() {
        return new Promise((resolve,reject) => {
            Database.delete(tableName,this)
                .then(results => resolve(this))
                .catch(error => reject(error))
        })
    }

    static generateShort() {
        return crypto.randomBytes(4).toString('hex');
    }
}