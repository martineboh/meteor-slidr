Package.describe({
	name: "krstffr:slidr",
  summary: "A simple slideshow (with support for multiple views).",
	version: "1.0.2",
	git: "https://github.com/krstffr/meteor-slidr.git"
});

Package.onUse(function (api) {

	api.versionsFrom("METEOR@0.9.0");

	api.use(['jquery', 'underscore', 'reactive-var@1.0.4'], 'client');

  api.addFiles('slidr.js', 'client');

  // The main object.
  api.export('Slidr', 'client');

});
