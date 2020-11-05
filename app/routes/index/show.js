import Route from '@ember/routing/route';

export default class IndexShowRoute extends Route {

  async model(params) {
    const response = await fetch(`https://swapi.dev/api/people/${params.id}`);
    const person = await response.json();
    return { person };
  }
}
