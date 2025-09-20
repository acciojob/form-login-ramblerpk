function getFormvalue(event) {
	event.preventDefault();
    //Write your code here
	const form = document.getElementById('form1');
  const firstName = form.fname.value.trim(); // Get the first name and trim spaces
  const lastName = form.lname.value.trim(); // Get the last name and trim spaces
  
  // Display the full name
  alert(`${firstName} ${lastName}`);

}

