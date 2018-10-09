export interface TableHeader {
    [index: number]: {
        label: String,
        id: String,
        mappingKey: String,
        widthpx?: Number,
        sortable?: boolean
    }
}

export interface TableRows {
    [index: number]: {
        [key: string]: string
    }
}