function filterByTerm(input, searchTerm) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error ("inputArr cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    })
}