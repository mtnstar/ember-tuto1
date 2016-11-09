import Publisher from './publisher';
import DS from 'ember-data';

export default Publisher.extend({
  books: DS.hasMany('book', { async: true })
});
