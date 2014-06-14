(function (root) {

	var App = root.App;

	App.Model.Contact = Backbone.Model.extend({
		defaults: {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			address1: '',
			address2: null,
			city: '',
			state: '',
			postalCode: ''
		}
	});

})(this);
