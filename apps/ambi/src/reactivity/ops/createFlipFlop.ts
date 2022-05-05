import type { Accessor } from 'solid-js'
import { createSignal } from 'solid-js'

export type CreateFlipFlopResult = [
  accessor: Accessor<boolean>,
  flip: () => boolean,
  flop: () => boolean,
  toggle: (next?: ((prev: boolean) => boolean) | Maybe<boolean>) => boolean,
]

export function createFlipFlop(init?: Maybe<boolean>): CreateFlipFlopResult {
  const [state, setState] = createSignal<boolean>(init ?? false)

  return [
    state,
    (): boolean => setState(true),
    (): boolean => setState(false),
    (next?: ((prev: boolean) => boolean) | Maybe<boolean>): boolean =>
      setState((prev: boolean) => {
        if (typeof next === 'function') return next(prev)
        else if (typeof next === 'boolean') return next
        else return !prev
      }),
  ]
}
