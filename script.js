function getFormvalue() {
    //Write your code here
	let fname = document.getElementById("fn").value;
	let lname = document.getElementById("ln").value;

	alert(`${fname} ${lname}`);

}
document.getElementById('submit').addEventListener('click', getFormvalue);
