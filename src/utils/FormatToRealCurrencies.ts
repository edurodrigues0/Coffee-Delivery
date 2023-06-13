export function formatToRealCurrencies(coffeePrice: number) {
  const price = coffeePrice.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })

  return price
}
