import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(
        private SongsService: SongsService
    ) { }
    @Get()
    findAll() {
        try {
            return this.SongsService.findAll()
        } catch (error) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN); //  {  "statusCode": 403,"message": "Forbidden"}  النتيجة

        }                                                              
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        return this.SongsService.findOne(id)
    }

    @Post()
    create(@Body() createSongDto: CreateSongDto) {
        return this.SongsService.create(createSongDto)
    }


    @Put(':id')
    update(@Param('id') id, @Body() songDto: any) {
        return this.SongsService.update(id, songDto.name)
    }
    @Delete(':id')
    delete(@Param('id') id) {
        return this.SongsService.delete(id)
    }
}
