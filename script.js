const my_input = document.getElementById("myinput")
let current_value = 1

function add(x) {
	current_value += Number(x)
	my_input.value = current_value
}