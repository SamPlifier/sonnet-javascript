// console.log(fullSonnet);

debugger;
var fullSonnet = document.getElementsByTagName("p")[0].textContent;
var noSpaceSonnet = fullSonnet.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\r?\n|\r/g, "").split(" ");
console.log(noSpaceSonnet);
var words = {};
var index = 0;
while (index < noSpaceSonnet.length) {
    if (noSpaceSonnet[index].length > 1) {
        if (noSpaceSonnet[index] in words) {
            words[noSpaceSonnet[index]]++;
        } else {
            words[noSpaceSonnet[index]] = 1;
        }
    }
    index++;
}
console.log(words);
