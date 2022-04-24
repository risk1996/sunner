import type { Accessor } from 'solid-js'
import { createSignal } from 'solid-js'

export type CreateFlipFlopResult = [
  accessor: Accessor<boolean>,
  flip: () => boolean,
  flop: () => boolean,
  toggle: (
    next?: ((prev: boolean) => boolean) | boolean | undefined | null,
  ) => boolean,
]

export function createFlipFlop(
  init?: boolean | undefined | null,
): CreateFlipFlopResult {
  const [state, setState] = createSignal<boolean>(init ?? false)

  return [
    state,
    (): boolean => setState(true),
    (): boolean => setState(false),
    (
      next?: ((prev: boolean) => boolean) | boolean | undefined | null,
    ): boolean =>
      setState((prev: boolean) => {
        if (typeof next === 'function') return next(prev)
        else if (typeof next === 'boolean') return next
        else return !prev
      }),
  ]
}
