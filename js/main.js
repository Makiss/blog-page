//Operating the value of the search input on focus and blur

var searchField = document.querySelector(".form-block .search-field");

searchField.addEventListener("focus", function() {
	this.value = "";
});

searchField.addEventListener("blur", function() {
	this.value = "Поиск";
});