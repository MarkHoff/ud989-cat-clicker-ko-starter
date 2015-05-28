var Cat = function() {
	var self = this;
	self.clickCount = ko.observable(0);
	self.name = ko.observable('Tabby');
	self.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	self.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
	
	
	self.findCatType = ko.computed(function() {
		
		if(self.clickCount() < 10) {
			return "Newborn";
		} else if (self.clickCount() >= 10 && self.clickCount() < 20) {
			return "Infant";
		} else {
			return "Teen";
		}	
	});
	
    self.catNames = ko.observableArray([
        { name: 'Kookla' },
        { name: 'Fran' },
        { name: 'Ollie' },
        { name: 'Oscar'}
    ]);
}

var ViewModel = function() {
	self.currentCat = ko.observable(new Cat() );
	self.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());
