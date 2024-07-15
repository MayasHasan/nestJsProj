import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(
        private SongsService: SongsService
    ) { }
    @Get()
    findAll() {
        return this.SongsService.findAll()
    }

    @Get(':id')
    findOne() {
        return this.SongsService.findOne("id")
    }

    @Post()
    create() {
        return this.SongsService.create({ id: 1, name: "Hello" })
    }


    @Put(':id')
    update(@Query('id') id) {
        return this.SongsService.update("id")
    }
    @Delete(':id')
    delete() {
        return "Delete songs by id"
    }
}
