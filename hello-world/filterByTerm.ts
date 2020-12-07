function filterByTermOpt1(input: string[], searchTerm: string) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error ("inputArr cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    })
}

function filterByTermOpt2(input: Array<string>, searchTerm: string) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error ("inputArr cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    })
}

// filterByTermOpt1("input string", "java")
// filterByTermOpt2("input string", "java")

filterByTermOpt1(["input string"], "java")
filterByTermOpt2(["input string"], "java")
