//STARTING OF DYNAMIC RESPONSIVE CSS CHANGING JAVASCRIPT
window.addEventListener('DOMContentLoaded',
	// On document load function below
	function () {
		// Initialize the global vars --- DATATYPE: array
	    var TARGETED_DOMS, TARGETED_ATTRIBUTES = [];
		
	    // Get the width of the device --- DATATYPE: float
	    var DEVICE_WIDTH = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		
		// Get all the targeted TARGETED_DOMS --- DATATYPE: nodelist
		TARGETED_DOMS = document.querySelectorAll("[-laptop],[-tablet],[-phone],[laptop],[tablet],[phone]");
		
		// Add attributes in 'TARGETED_ATTRIBUTES' according to 'DEVICE_WIDTH'
		if(DEVICE_WIDTH >= 1025){
			TARGETED_ATTRIBUTES.push("laptop");
			TARGETED_ATTRIBUTES.push("-tablet");
			TARGETED_ATTRIBUTES.push("-phone");
		}else if(DEVICE_WIDTH >=768){
			TARGETED_ATTRIBUTES.push("-laptop");
			TARGETED_ATTRIBUTES.push("tablet");
			TARGETED_ATTRIBUTES.push("-phone");
		}else{
			TARGETED_ATTRIBUTES.push("-laptop");
			TARGETED_ATTRIBUTES.push("-tablet");
			TARGETED_ATTRIBUTES.push("phone");
		}
		
		// Loop in all 'TARGETED_DOMS' nodelist
	    TARGETED_DOMS.forEach(function(DOM) {
			// Loop in all 'TARGETED_ATTRIBUTES' array
			TARGETED_ATTRIBUTES.forEach(function(attribute){
				// Condition to checks if the element has attribute
				if(DOM.hasAttribute(attribute)){
					// Make the list of classes to be added
					var TARGETED_CLASSES = DOM.getAttribute(attribute).replace(/  +/g, ' ').split(" ");

					// Create classlist object of selected element
					var elementClassList = DOM.classList;

					// Loop to add all the classes in the element
					TARGETED_CLASSES.forEach(function(targeted_class) {
						if(targeted_class.charAt(0) === '-')
						{
							elementClassList.remove(targeted_class.substr(1));
						}else{
							elementClassList.add(targeted_class);
						} // End of if else conditon
					}); // End of foreach loop
				} // End of if condition
			}); //End of foreach loop
	    }); // End of foreach loop
	}
);

window.addEventListener('resize', function() {
	"use strict"; 
    var NEW_DEVICE_WIDTH =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if( typeof DEVICE_WIDTH != 'undefined' ){
		if(DEVICE_WIDTH > NEW_DEVICE_WIDTH){
			window.location.reload();
		}
	} 
});

//ENDING OF DYNAMIC RESPONSIVE CSS CHANGING JAVASCRIPT