

function calculateSalesTax(tax) {
  return (tax*120)/100 ;
}

function formatCurrency(number) {
  return "£"+calculateSalesTax(number).toFixed(2);
}

function test(test_name, expr) {
  let status;
  if (expr) {
      status = "PASSED"
  } else {
      status = "FAILED"
  }

  console.log(`${test_name}: ${status}`)
}

test("calculateSalesTax function - case 1 works", calculateSalesTax(15) === 18)
test("calculateSalesTax function - case 2 works", calculateSalesTax(17.5) === 21)
test("calculateSalesTax function - case 3 works", calculateSalesTax(34) === 40.8)

test("formatCurrency function - case 1 works", formatCurrency(15) === "£18.00")
test("formatCurrency function - case 2 works", formatCurrency(17.5) === "£21.00")
test("formatCurrency function - case 3 works", formatCurrency(34) === "£40.80")