export function isTemplateStringsArray(
  value: unknown
): value is TemplateStringsArray {
  const val = value as TemplateStringsArray;
  return Boolean(val.length && val.raw && val.raw.length);
}
