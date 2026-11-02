const euro = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

/** Formats an integer amount in cents, e.g. 5900 -> "59,00 €". */
export const formatPrice = (cents: number): string => euro.format(cents / 100);
