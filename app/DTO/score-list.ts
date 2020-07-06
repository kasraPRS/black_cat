export class ScoreList {
    // id: number;
    // title: string;
    // provinces: any[] = [];
    // rank: number;

    // constructor (
    //     id: number,
    //     title: string,
    //     provinces: any[] = [],
    //     rank: number
    // )
    // {
    //     this.id = id;
    //     this.title = title;
    //     this.provinces = provinces;
    //     this.rank = rank;
    // }

    list: any[] = [];
    constructor (list:any) {
        this.list = list;
    }
}
