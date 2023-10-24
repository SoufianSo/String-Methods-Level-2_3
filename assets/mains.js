console.log("its works");

function findIt() {
  const articleElement = document.querySelector("article");
  let articleText = articleElement.textContent;

  const searchWord = document.getElementById("search-input").value;
  const regex = new RegExp(searchWord, "gi");
  const highlightedText = articleText.replaceAll(regex, (match) => {
    return `<span style="background-color: yellow;">${match}</span>`;
  });

  articleElement.innerHTML = highlightedText;
}
