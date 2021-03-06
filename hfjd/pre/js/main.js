function bindFilterEvent() {
	// get the action filter option item on page load
	var $filterType = $('#filterOptions li.active a').attr('class');

	// get and assign the ourHolder element to the
	// $holder varible for use later
	var $holder = $('ul.ourHolder');

	// clone all items within the pre-assigned $holder element
	var $data = $holder.clone();

	// attempt to call Quicksand when a filter option
	// item is clicked
	$('#filterOptions li a').click(function(e) {
		// reset the active class on all the buttons
		$('#filterOptions li').removeClass('active');

		// assign the class of the clicked filter option
		// element to our $filterType variable
		var $filterType = $(this).attr('data-type');
		$(this).parent().addClass('active');
		var $filteredData;
		if ($filterType == 'all') {
			// assign all li items to the $filteredData var when
			// the 'All' filter option is clicked
			$filteredData = $data.find('li');
		} else {
			// find all li elements that have our required
			// $filterType
			// values for the data-type element
			$filteredData = $data.find('li[data-type=' + $filterType + ']');
		}

		// call quicksand and assign transition parameters
		$holder.quicksand($filteredData, {
			duration : 800,
			attribute: 'id', 
			easing : 'easeInOutQuad'
		});

		$('.ourHolder li').trigger('mouseenter');
	});
}
