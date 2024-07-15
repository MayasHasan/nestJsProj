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

        return this.songs.find(x => x.id == id)
    }
    update(id, name) {
        const a = this.songs.find(x => x.id == id)
        a.name = name;
        return a
    }
    delete(id) {
        return this.songs.filter(x => x.id != id)
    }
}
