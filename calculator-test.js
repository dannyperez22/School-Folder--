describe("Loan Calculator", function() {
  it("should correctly calculate the monthly payment", function() {
    const testValues = { amount: 58000, years: 7, rate: 3.3 };
    expect(calculateMonthlyPayment(testValues)).toBe("799.96");
  });

  it("should update the monthly payment UI", function() {
    document.body.innerHTML = '<div id="monthly-payment"></div>';
    updateMonthly("500.00");
    const monthlyUI = document.getElementById("monthly-payment");
    expect(monthlyUI.innerText).toBe("$500.00");
  });

  it("should get current UI values", function() {
    document.body.innerHTML =
      '<input id="loan-amount" value="10000">' +
      '<input id="loan-years" value="5">' +
      '<input id="loan-rate" value="2.5">';
    const values = getCurrentUIValues();
    expect(values.amount).toBe(10000);
    expect(values.years).toBe(5);
    expect(values.rate).toBe(2.5);
  });

  it("should correctly handle form submission", function() {
    document.body.innerHTML =
      '<form id="calc-form">' +
      '<input id="loan-amount" value="10000">' +
      '<input id="loan-years" value="5">' +
      '<input id="loan-rate" value="2.5">' +
      '<input type="submit" value="Calculate">' +
      "</form>";
    setupIntialValues();
    const form = document.getElementById("calc-form");
    form.dispatchEvent(new Event("submit"));
    const monthlyUI = document.getElementById("monthly-payment");
    expect(monthlyUI.innerText).toBe("$188.71");
  });
});

