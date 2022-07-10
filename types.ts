/** Types for JSON.
 */
export type json =
  | string
  | number
  | boolean
  | null
  | { [k: string]: json }
  | json[];
