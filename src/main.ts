import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Title CURD')
    .setDescription('CURD description')
    .setVersion('1.0')
    .addTag('CURD')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // ✅ Export swagger-spec.json
  writeFileSync(join(process.cwd(), 'swagger-spec.json'), JSON.stringify(document, null, 2));
  console.log('✅ Swagger JSON written to swagger-spec.json');

  // Swagger UI available at /api
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
