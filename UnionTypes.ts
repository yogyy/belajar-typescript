function kgtoLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') return weight * 2;
  else return parseInt(weight) * 3;
}

kgtoLbs(10);
kgtoLbs('10');
