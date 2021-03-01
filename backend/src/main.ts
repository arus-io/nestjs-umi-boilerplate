import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';
import * as morgan from 'morgan';

import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import * as helmet from 'helmet';
import {HttpExceptionFilter} from "./filters/bad-request.filter";
import {QueryFailedFilter} from "./filters/query-failed.filter";
import {SharedModule} from "./shared/shared.module";
import {ConfigService} from "./shared/services/config.service";

async function bootstrap() {
  initializeTransactionalContext();
  patchTypeORMRepositoryWithBaseRepository();

  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
      new ExpressAdapter(),
      { cors: true },
  );
  app.enable('trust proxy'); // only if you're behind a reverse proxy
  app.use(helmet());
  app.use(morgan('dev'));

  const reflector = app.get(Reflector);
  app.useGlobalFilters(
      new HttpExceptionFilter(reflector),
      new QueryFailedFilter(reflector),
  );

  const configService = app.select(SharedModule).get(ConfigService);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: configService.getNumber('TRANSPORT_PORT'),
      retryAttempts: 5,
      retryDelay: 3000,
    },
  });

  await app.startAllMicroservicesAsync();

  if (! configService.isProduction) {
    const config = new DocumentBuilder()
        .setTitle('ARUS Boilerplate API')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
  const port = configService.getNumber('PORT');
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
