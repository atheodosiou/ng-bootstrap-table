import { Subject } from 'rxjs';
export declare class BTableService {
    constructor();
    private $onRowSelectSubject;
    private $onRowUnselectSubject;
    readonly onRowSelectSubject: Subject<any>;
    readonly onRowUnselectSubject: Subject<any>;
}
