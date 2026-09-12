export function isPlausibleReg(reg: string): boolean {
  const clean = reg.replace(/\s+/g, "").toUpperCase();
  return /^[A-Z]{2}[0-9]{2}[A-Z]{3}$/.test(clean) || (clean.length >= 4 && clean.length <= 8 && /[A-Z]/.test(clean) && /[0-9]/.test(clean));
}
