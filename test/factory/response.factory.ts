import { Factory } from 'rosie';

export const RecordResponseFactory = Factory.define<Record<string, string>>(
  'Record<string, string>',
).attr('statusCode', '200');
