import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
    async model(params) {
    const response = await fetch("https://swapi.dev/api/people/");
    const _people = await response.json();
    _people.results.forEach((p,index) => p.id = ++index);
    const people = _people.results;
    return { people };
  }
}
