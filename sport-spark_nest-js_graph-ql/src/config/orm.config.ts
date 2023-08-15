import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/modules/user/user';
import { Event } from 'src/modules/event/event';
import { EventType } from 'src/modules/eventType/eventType';
import { EventRepeatType } from 'src/modules/eventRepeatType/eventRepeatType';
import { Friendship } from 'src/modules/friendship/friendship';
import { Document } from 'src/modules/document/document';

// export default registerAs(
//   'orm.config',
//   (): TypeOrmModuleOptions => ({
//     type: 'mssql',
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT),
//     database: process.env.DB_NAME,
//     entities: [User, Event, EventType, EventRepeatType, Friendship, Document],
//     synchronize: true,
//     extra: {
//       trustedConnection: true,
//     },
//   }),
// );

const connectionOptions: TypeOrmModuleOptions = {
  type: 'mssql',
  url: 'mssql://admin:password@localhost:1433/SportSpark_NestJS',
  database: 'SportSpark_NestJS',
  entities: [User, Event, EventType, EventRepeatType, Friendship, Document],
  synchronize: true,
  options: {
    trustServerCertificate: true,
  },
};

export default connectionOptions;
