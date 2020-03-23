
var subjectsPromise = d3.json("data/weightLoss.json");



console.log(subjectsPromise);

d3.select("body")
    .selectAll("p")
    .data(subjectsPromise)
    .enter()
    .append("p")
    .text(function(subject)
    {
        return subject.income;
    });