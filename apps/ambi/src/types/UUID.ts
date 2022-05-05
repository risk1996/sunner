import { refine, string } from 'superstruct'
import type { Opaque } from 'type-fest'

export type UUIDv4 = Opaque<string, 'UUIDv4'>

export const UUIDv4 = refine(
  string(),
  'UUIDv4',
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test,
)
