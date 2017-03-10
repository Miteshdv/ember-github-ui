import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let orgId = Ember.get(this.modelFor('org'), 'login');
    let repoId = Ember.get(this.modelFor('org.repo'), 'name');
    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors?access_token=5578037581514b520ea5155ad4a103a6adbc2b83`).then(rawContributors => {
      return rawContributors.map(rawContributor => {
        rawContributor.oldId = rawContributor.id;
        rawContributor.id = rawContributor.name;
        return rawContributor;
      });
    });
  }
});