export type HeaderItem = { menuLink: string; menuDescription: string };

export const HeaderMap = [];

export class HeaderDataProcess<T> {
    table: T[];

    constructor(table: T[], data: T) {
        this.table = table;
        this.set(data);
    }

    set(data: T): void {
        this.table.push(data);
    }

    get(): T[] {
        return this.table;
    }
}
 


