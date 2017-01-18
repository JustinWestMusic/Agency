(function()
{
	//var theImages = document.querySelectorAll(".image-holder");
	//var theHeading = document.querySelector(".heading");
	//var theSubhead = document.querySelector(".main-copy h2");
	//var theSeasonText = document.querySelector(".main-copy p");
	//var appliedClass;
	var $theImages = $('.image-holder'),
		$theHeading = $('.heading'),
		$theSubhead = $('.main-copy h2'),
		$theSeasonText = $('.main-copy p'),
		appliedClass;


	function changeElements()
	{
		$theHeading.removeClass(appliedClass);
		$theSubhead.removeClass(appliedClass);

		appliedClass = event.currentTarget.id;


		$theHeading.addClass(appliedClass);
		$theSubhead.addClass(appliedClass);
		
		$theSubhead.text(dynamicContent[event.currentTarget.id].headline);
		$theSeasonText.text(dynamicContent[event.currentTarget.id].text);
	}

	$theImages.click(function()
	{
		changeElements();
	});

	/*[].forEach.call(theImages, function(image)
	{
		image.addEventListener('click', changeElements, true);
	});*/

		$theSubhead.text(dynamicContent['spring'].headline);
		$theSeasonText.text(dynamicContent['spring'].text);
		$theHeading.addClass('spring');
})();