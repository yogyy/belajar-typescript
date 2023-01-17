function calculateTax(income: number, taxYear = 2000): number {
  if (taxYear < 2023) return income * 1.2;
  return income * 2;
}

calculateTax(10_000);
