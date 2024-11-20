import ejs from "ejs";

export default class Templater {
    static renderTemplate(templateName, data, options) {
        return new Promise((resolve, reject) => {
            ejs.renderFile(
                `${process.cwd()}/templates/${templateName}.ejs`,
                data,
                options,
                (err, str) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        resolve(str);
                    }
                }
            )
        });
    }
}