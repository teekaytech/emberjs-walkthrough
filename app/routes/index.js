import Route from '@ember/routing/route';
import { service } from '@ember/service'; //import the service decorator from the @ember/service package

export default class IndexRoute extends Route {
  @service store; //injects the store service into the rental route
  async model(params) {
    return this.store.findAll('rental', params.rental_id);
  }
}
