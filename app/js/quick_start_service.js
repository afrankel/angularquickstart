// Create a single resource for calling itunes
myApp.factory('QuickStartITunes', function($resource){
  return $resource('https://itunes.apple.com/:action',
      {action: "search", callback: 'JSON_CALLBACK'},
      {get:  {method: 'JSONP'}
      });
});