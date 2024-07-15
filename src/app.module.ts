import { MiddlewareConsumer, NestModule, RequestMethod, Module, Controller } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes('songs');                                        //  1-  for all metods post -put - get - delete
      // .forRoutes({ path: 'songs', method: RequestMethod.POST });  //  2-  only for POST
      .forRoutes(SongsController)                                    //  3- for Controller
  }
}
