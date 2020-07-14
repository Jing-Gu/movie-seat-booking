const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

const isClicked = (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
};

const movieIsChanged = (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
};

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .selected");
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

//better than seats.forEach with click listener, the click event only happens in the container
container.addEventListener("click", isClicked);

movieSelect.addEventListener("change", movieIsChanged);
