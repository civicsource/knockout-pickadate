(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(["jquery", "knockout", "picker.date", "picker.time",
		"pickadate/themes/classic",
		"pickadate/themes/classic.date",
		"pickadate/themes/classic.time"], factory);
	} else {
		// Browser globals
		factory($, ko);
	}
}(this, function ($, ko) {
	ko.bindingHandlers.pickadate = {
		init: function (element, valueAccessor, allBindingsAccessor) {
			var options = ko.utils.unwrapObservable(valueAccessor()) || {};
			var valueBinding = allBindingsAccessor.get("value");
			$(element).pickadate(Object.assign({}, options, {
				onSet: function() {
					if (valueBinding) {
						valueBinding(element.value);
					}
				}
			}));
		}
	};
	ko.bindingHandlers.pickatime = {
		init: function (element, valueAccessor, allBindingsAccessor) {
			var options = ko.utils.unwrapObservable(valueAccessor()) || {};
			$(element).pickatime(options);
		}
	};
}));
