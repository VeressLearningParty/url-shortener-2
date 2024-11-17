import mysql from "mysql2/promise";

export default class Database {
    static conn;

    static {
        mysql.createConnection({
            host: 'url-shortener-2-db',
            port: 3306,
            user: 'root',
            database: 'database',
            password: 'test',
        }).then((result) => {
            this.conn = result;
          })
          .catch((error) => {
            console.error(error)
          })
    }

    static async query(query) {
            try {
                const [results,fields] = await this.conn.query(query);
                return results
        }   catch(error) {
                console.error(error)
        }
    }
        

    static getAll(){
        return this.query(`SELECT * FROM ${tableName}`);
    };
    
    static get(tableName, filterField, filterValue) {
        return this.query(`SELECT * FROM ${tableName} WHERE ${filterField} = '${this.renderValueForSQL(filterValue)}';`);
    }
    
    static insert(tableName, values) {
        let columns = Object.keys(values).join(',');
        let renderedValues = Object
            .keys(values)
            .map(columnName => 
                this.renderValueForSQL(values[columnName])
            )
            .join(',');
        return this.query(`INSERT INTO ${tableName} (${columns}) VALUES (${renderedValues});`);
    }

    static update(tableName, idField, idValue, values) {
        let updatedFields = Object
            .keys(values)
            .map(columnName => `${columnName} = ${this.renderValueForSQL(values[columnName])}`)
            .join(',');
        return this.query(`UPDATE ${tableName} SET ${updatedFields} WHERE ${idField} = ${this.renderValueForSQL(idValue)};`);
    }

    static delete(tableName, idField, idValue) {
        return this.query(`DELETE FROM ${tableName} WHERE ${idField} = '${this.renderValueForSQL(idValue)}';`);
    }

    static renderValueForSQL(value) {
        return value ? `'${value}'` : `NULL`;
    }
}