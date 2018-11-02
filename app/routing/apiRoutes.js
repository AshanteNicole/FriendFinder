var friends = require("../data/friends");

var myValues = [
  1,
  3,
  3,
  3,
  2,
  1,
  3,
  3,
  2,
  5
]



module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
//need to add parameter in order to push to json
        var myValues = req.body.scores


function compare(num1, num2){
  return Math.abs(num1 - num2)
}


var difference = []

// compares all friends to your values and makes one big array of differences
for (var i = 0; i < myValues.length; i++) {
  for (var j = 0; j < friends.length; j++) {
    var result = compare(myValues[i], friends[j].scores[i])
    // console.log(result);
    difference.push(result)
02  }
}


// this breaks the big array back down into individual friends
var differnceSmallerArray = []

var size = 10
for (var i = 0; i < difference.length; i += size) {
  var smallarray = difference.slice(i,i+size);
  differnceSmallerArray.push(smallarray)
}


// console.log(differnceSmallerArray);


var sumDiffs = []
    // Sum each of the smaller arrays for a total difference for each person and push into sumDiffs
    for (var i = 0; i < differnceSmallerArray.length; i++) {
      function getSum(total, num) {
          return total + num;
      }
      sumDiffs.push(differnceSmallerArray[i].reduce(getSum))
    }

    // console.log(sumDiffs);


    // which array has the smallest difference?
        var index = 0;
        var value = sumDiffs[0];
        for (var i = 1; i < sumDiffs.length; i++) {
          if (sumDiffs[i] < value) {
            value = sumDiffs[i];
            index = i;
          }
        }
        // Empty array for next loop
        var chosenFriend = friends[index]
        //loop through friends (array) and push friend that mathes index from last step


        res.send(chosenFriend);


    });
};