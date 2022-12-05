
const fileSelector = document.getElementById('file-selector');

fileSelector.addEventListener('change', (event) => {
    const files = event.target.files;
    readFile(files[0]);
});

 window.addEventListener('resize', function(event){
    setFillerHeights()
 });

function readFile(file){
    
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        txt = event.target.result;
        names = txt.split("\n");
        alert(names.length + " names loaded.")
        populateScroller(names);

    });
    reader.readAsText(file);
}

function populateScroller(names){
    namesDiv = document.getElementById('names');
    
    namesDiv.innerHTML = "<ul>\n\t";
    names.forEach( person => {
        namesDiv.innerHTML = namesDiv.innerHTML + '<li>' + person + "</li>\n";
    });
    namesDiv.innerHTML += "</ul>\n";

    setFillerHeights();

    // clear and re-insert node to restart the animation
    const names_clone = namesDiv.cloneNode(true);
    namesDiv.parentNode.replaceChild(names_clone, namesDiv);

    namesDiv.style.animation = 'none';
    namesDiv.style.animation = 'my-animation 30s linear infinite';
    console.log(namesDiv.style);

}

function setFillerHeights(){
    container = document.getElementById('scroll-container')
    containerStyle = getComputedStyle(container)

    filler = document.getElementById('filler');
    filler.style.height = containerStyle.height;
    
    namesDiv = document.getElementById('names');
    containerHeightFloat = Number(containerStyle.height.substr(0,containerStyle.height.length - 2));
    namesDiv.style.paddingBottom = containerHeightFloat >= 500 ? containerStyle.height : '500px';
}