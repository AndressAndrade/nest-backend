import { Factory } from 'rosie';

export const RecordRouteFactory = Factory.define<Record<string, any>>(
  'Record<string, string>',
)
  .attr('path', '/any/url')
  .attr('methods', { get: true });

export const RecordRequestFactory = Factory.define<Record<string, any>>(
  'Record<string, string>',
)
  .attr('url', '/any/url')
  .attr('headers', 'headers')
  .attr('body', 'body')
  .attr('route', ['url'], (url) => RecordRouteFactory.build({ path: url }));
