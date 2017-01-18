(function()
{
	var theImages = document.querySelectorAll(".image-holder");
	var theHeading = document.querySelector(".heading");
	var theSubhead = document.querySelector(".main-copy h2");
	var theSeasonText = document.querySelector(".main-copy p");
	var appliedClass;

	function changeElements()
	{
		theHeading.classList.remove(appliedClass);
		theSubhead.classList.remove(appliedClass);

		appliedClass = this.id;


		theHeading.classList.add(this.id);
		theSubhead.classList.add(this.id);
		
		theSubhead.firstChild.nodeValue = dynamicContent[this.id].headline;
		theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text;
	}

	[].forEach.call(theImages, function(image)
	{
		image.addEventListener('click', changeElements, true);
	});

		theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
		theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
		theHeading.classList.add('spring');
})();