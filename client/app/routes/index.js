import Ember from 'ember';

export default Ember.Route.extend({
	authentication: Ember.inject.service(),
	beforeModel() {
		var auth = this.get('authentication');
		if (!auth.authenticated) {
			this.transitionTo('login');
		}
	},
	model() {
		return Ember.RSVP.hash({
			docs: this.get('store').findAll('doc')
		});
	}
});
