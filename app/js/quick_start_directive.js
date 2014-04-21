// Simple directive for showing a cost bar based on amount
myApp.directive("costBar", [
  function() {
    return {
      // The directive can be used as an attribute only.
      // Example <div cost-bar="value"> </div>
      restrict: "A",

      // The function that gets executed after Angular has compiled the html
      link: function(scope, element, attrs) {
        var value = parseInt(attrs.costBar);
        var cssClass = "bar";
        value = Math.floor(value); // 10.99 becomes 10.

        element.append("<div class='bar' style='width: " + value + "%'>$" + attrs.costBar + "</div>");
      }
    };
  }
]);