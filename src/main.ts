import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 4000;
// tslint:disable-next-line: no-var-requires
const cors = require('cors');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(port);
}
bootstrap();
