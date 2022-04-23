import { Box, Button, Text } from '@hope-ui/solid'
import type { JSX } from 'solid-js'
import { createEffect, createResource, createSignal } from 'solid-js'

import { createAppDatabase } from '@sunner/ambi/db'
import type { VendorDocument } from '@sunner/ambi/db/vendor'

export default function DashboardPage(): JSX.Element {
  const [database] = createResource(createAppDatabase)
  const [vendors, setVendors] = createSignal<VendorDocument[]>([])

  createEffect(() => {
    const subscription = database()?.vendors.find().$.subscribe(setVendors)

    return () => subscription?.unsubscribe()
  })

  const handleAddVendor = (): void =>
    void database()?.vendors.insert({
      _id: 'V001' + Date.now(),
      address: 'Jakarta',
      isActive: true,
      name: 'PT ABC',
    })

  const handleClearVendor = (): void => void database()?.vendors.remove()

  return (
    <Box>
      <Text>{'Dashboard'}</Text>
      <Text>
        {'Vendor Count: '}
        {vendors().length}
      </Text>

      <Button onClick={handleAddVendor}>{'Add Vendor'}</Button>
      <Button onClick={handleClearVendor}>{'Remove Vendor'}</Button>
    </Box>
  )
}
