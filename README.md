# angularAnimationFlipbook

by Mark Dally

https://github.com/mdally/angularAnimationFlipbook

================================================

Angular directive for a slider-controlled animation flipbook

Check out an demo at http://mrkdll.com/#/Article/Voronoi

###Usage:
To use, simply link the directive file in your project, along with the css files.

Then create a folder on your web server that will contain all the slides of the animation. Name them by their frame number (i.e. 1.png - 50.png), with no leading zeros.

Lastly, instatiate the directive:
```
<x-animation-flipbook 
	data-title="YourAnimationTitle" 
	data-folder-url="path/to/folder/containing/animation/frames/" 
	data-n-slides="number_of_slides_to_load"
/>
```

###Notes:
 * Requires jQuery
 * Looks best with Bootstrap
 * You can customize the range input css by changing AnimationFlipbook_RangeInput.css. I recommend using http://danielstern.ca/range.css/
 * I have included a loading gif which is shown while the animation frames are being downloaded. You can change what gif to use in AnimationFlipbook.html