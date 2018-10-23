export interface TableHeader {
    [index: number]: {
        label?: String,
        id: String,
        mappingKey: String,
        widthpx?: Number,
        sortable?: boolean,
        input?: any
    }
}

interface TableRow {
        [key: string]: any
}

export interface TableRows extends Array<TableRow>{}