import Database from '../db/db.js'
import crypto from "crypto"

export default class Shorts {
    static tableName = `tableurl`;
    short;
    fullurl;

    constructor(raw) {
        if (raw) {
            this.short = raw.short
            this.fullurl = raw.fullurl
        } else {
            this.short = Shorts.generateShort()
        }
    }

    static async get(short) {
            let result = await Database.query(`SELECT fullurl FROM ${Shorts.tableName} WHERE short = "${short}";`);
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
        //return this.query(`INSERT INTO ${Shorts.tableName} (short, fullurl) VALUES (${Shorts.short}, ${Shorts.fullurl});`);
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
        let result = crypto.randomBytes(4).toString('hex');
        return (result);
    }
}