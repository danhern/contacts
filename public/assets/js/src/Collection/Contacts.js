(function (root) {

	var App = root.App;

	App.Collection.Contacts = Backbone.Collection.extend({
		model: App.Model.Contact
	});

})(this);
