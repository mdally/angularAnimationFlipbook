app.directive('animationFlipbook', function($resource, $q) {
	return {
        restrict: 'E',
        replace: true,
        scope: {
        	title: '@',
        	nSlides: '@',
        	folderUrl: '@'
        },
        templateUrl: 'js/directives/AnimationFlipbook.html',
        link: function(scope, elem, attrs) {
			scope.nSlides = parseInt(scope.nSlides);
			scope.animationSlides = [];
			scope.currentSlide = 0;
			scope.allSlidesLoaded = false;
			scope.showLoadingGif = false;

			scope.slideLoaded = function(slideIdx){
				scope.animationSlides[slideIdx].loaded = true;

				var allLoaded = true;
				for(var j = 0; j < scope.nSlides; ++j){
					if(!scope.animationSlides[j].loaded){
						allLoaded = false;
						break;
					}
				}
				if(allLoaded){
					scope.allSlidesLoaded = true;
				}

				if(slideIdx == 0){
					scope.centerLoadingGif(scope.title);
				}
			}

			scope.centerLoadingGif = function(title){
				var elt = $(".animationLoadingGif#"+title);
				var img = $("."+title+"_img.firstFrame");

				elt.css("top", ((img.offset().top - img.parent().offset().top) + (img.height()-elt.width())/2.0).toString()+'px');
				elt.css("left", ((img.offset().left - img.parent().offset().left) + (img.width()-elt.width())/2.0).toString()+'px');
				
				scope.showLoadingGif = true;
			}

			for(var i = 0; i < scope.nSlides; ++i){
				scope.animationSlides[i] = {
					src: scope.folderUrl+(i+1)+'.png',
					loaded: false
				};
			}
        }
    };
});

app.directive('onloadFunction', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.onloadFunction);
            });
        }
    };
});