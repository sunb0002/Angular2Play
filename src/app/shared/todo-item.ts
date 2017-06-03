export interface TodoItem {
    id?: number;
    value?: string;
    done?: boolean;
}

export class Serializable {
    fromJSON(json) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    }
}

export class TodoItemClass extends Serializable implements TodoItem {

    constructor(public id?: number, public value?: string, public done?: boolean) {
        super();
        this.id = id;
        this.value = value;
        this.done = done;
    }

    getID(): number {
        return this.id;
    }
}


export class SerializationHelper {

    // Using pure Javascript
    static toInstance<T>(obj: T, json: string): T {
        var jsonObj = JSON.parse(json);

        if (typeof obj["fromJSON"] === "function") {
            obj["fromJSON"](jsonObj);
        }
        else {
            for (var propName in jsonObj) {
                obj[propName] = jsonObj[propName]
            }
        }

        return obj;
    }

    // Using Object.assign ES6
    // However, it doesn't support Array neither. Need 3rd party help to parse Array. 
    static toInstance2<T>(obj: T, json: string): T {
        var jsonObj = JSON.parse(json);

        if (typeof obj["fromJSON"] === "function") {
            obj["fromJSON"](jsonObj);
        }
        else {
            obj = Object.assign(obj, json);
        }

        return obj;
    }



}


