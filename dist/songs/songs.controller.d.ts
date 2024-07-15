import { SongsService } from './songs.service';
export declare class SongsController {
    private SongsService;
    constructor(SongsService: SongsService);
    findAll(): any[];
    findOne(): void;
    create(): any;
    update(id: any): any;
    delete(): string;
}
