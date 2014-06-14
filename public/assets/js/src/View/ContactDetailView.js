(function (root) {

	var App = root.App;

	App.View.ContactDetailView = Backbone.View.extend({

		className: 'contact',

		template: _.template('<h3><%= firstName %> <%= lastName %></h3><ul><li>Email: <%= email %></li><li>Phone: <%= phone %></li><li>Address Line 1: <%= address1 %></li><li>Address Line 2: <%= address2 %></li><li>City: <%= city %></li><li>State: <%= state %></li><li>Postal Code: <%= postalCode %></li></ul>'),

		render: function () {
			var html = this.template(this.model.toJSON());
			this.$el.html(html);

			return this;
		}

	});

})(this);
