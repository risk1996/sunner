import { Button, Text } from '@hope-ui/solid'
import type { JSX } from 'solid-js'
import { createEffect, createResource, createSignal } from 'solid-js'

import Layout from '@sunner/ambi/components/Layout'
import { useDexie } from '@sunner/ambi/reactivity/db'

export default function DashboardPage(): JSX.Element {
  const db = useDexie()

  db?.vendors.toArray()

  return (
    <Layout>
      <Text>{'Dashboard'}</Text>
      <Text>
        {'Vendor Count: '}
        {/* {vendors().length} */}
      </Text>

      {/* <Button onClick={handleAddVendor}>{'Add Vendor'}</Button>
      <Button onClick={handleClearVendor}>{'Remove Vendor'}</Button> */}
    </Layout>
  )
}
