import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForQueryRecord(query, modelName) {
    switch(modelName) {
      case 'repo':
        return `https://api.github.com/repos/${query.orgId}/${query.repoId}?access_token=5578037581514b520ea5155ad4a103a6adbc2b83`;
      default:
        return this._super(...arguments);
    }
  },

  urlForQuery (query, modelName) {
    switch(modelName) {
      case 'repo':
        return `${this.get('host')}/orgs/${query.orgId}/repos`;
      default:
        return this._super(...arguments);
    }
  }

});
