const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function () {
  const query = this.value.trim();
  if (query !== "") {
    fetchResults(query);
  } else {
    clearResults();
  }
});

function fetchResults(query) {
  fetch("backend.php?query=" + encodeURIComponent(query))
    .then((response) => response.json())
    .then((data) => {
      displayResults(data);
    })
    .catch((error) => console.error("Error fetching search results:", error));
}

function displayResults(results) {
  searchResults.innerHTML = "";
  if (results.length > 0) {
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result.title;
      searchResults.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No results found";
    searchResults.appendChild(li);
  }
}

function clearResults() {
  searchResults.innerHTML = "";
}
