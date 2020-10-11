import { Options } from '@mikro-orm/core';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';

const options: Options = {
  type: 'mongo',
  dbName: 'test',
  highlighter: new MongoHighlighter(),
  clientUrl: 'mongodb://srv1.poneyhost.eu:27017', 
  debug: true,
};

export default options;
