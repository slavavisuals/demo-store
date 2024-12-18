export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

//TODO:
// export const formatCurrency = (amount: number | null, currency: string = 'CAD') => {
//     const value = amount ?? 0;
//     return new Intl.NumberFormat('en-CA', {
//       style: 'currency',
//       currency,
//     }).format(value);
//   };
