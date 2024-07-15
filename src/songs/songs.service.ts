import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    private readonly songs = [];
    create(song) {
        this.songs.push(song)
        return song
    }
    findAll() {
        return this.songs
    }
    findOne(id) {
        this.songs.find(x => x.id == id)
    }
    update(id) {
        console.log(id, "IIDD")
        const a = this.songs.find(x => x.id == id)
        a.id = id;
        return a
    }
    delete() {
        return "Delete songs by id"
    }
}
