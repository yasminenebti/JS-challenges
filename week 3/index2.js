
function bushChecker(bushBerryColours) {
    const berries = function(arr) {
        for(let i=0; i< arr.length ; i++ ){
        return (arr[i] ==="pink");
    }
      };
      let pinkBerries = bushBerryColours.every(berries);
      if (pinkBerries) {
        return "Bush is safe to eat from";
      } else {
        return "Toxic! Leave bush alone!";
      }
}

/* ======= TESTS - DO NOT MODIFY ===== */

let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("bushChecker funtion works - case 1", bushChecker(bushBerryColours1) === "Toxic! Leave bush alone!")
test("bushChecker funtion works - case 1", bushChecker(bushBerryColours2) === "Bush is safe to eat from")