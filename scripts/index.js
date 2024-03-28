function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) == false || typeof livingCost !== "number") {
      return "invalid input";
    }
  
    let totalIncome = 0;
    let IncreaseIncome = 0;
    for (const value of arr) {
      totalIncome += value;
      if (value >= 3000) {
        IncreaseIncome += value;
      }
    }
    const taxvalue = (IncreaseIncome * 20) / 100;
    const totalCost = livingCost + taxvalue;
    const savingMoney = totalIncome - totalCost;
  
    if (savingMoney < 0) {
      return "earn more";
    } else {
      return savingMoney;
    }
  }
  