(function (root) {

	var contact = new App.Model.Contact({
		firstName: 'John',
		lastName: 'Nickell',
		email: 'johnnickell@live.com',
		phone: '210-255-8795',
		address1: '2111 Shady Cliff Street',
		city: 'San Antonio',
		state: 'TX',
		postalCode: '78232'
	});

	var detailView = new App.View.ContactDetailView({ model: contact });

	$('#main').append(detailView.render().el);

})(this);
