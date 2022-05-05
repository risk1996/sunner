import {
  Button,
  HStack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@hope-ui/solid'
import { useI18n } from '@solid-primitives/i18n'
import { Check, X } from 'phosphor-solid'
import type { JSX } from 'solid-js'
import { For, Show, from } from 'solid-js'

import Layout from '@sunner/ambi/components/Layout'
import type { VendorDocument } from '@sunner/ambi/db/vendor'
import { useRxDB } from '@sunner/ambi/reactivity/rxdb/RxDBProvider'

export default function DashboardPage(): JSX.Element {
  const [t] = useI18n()
  const db = useRxDB()
  const vendors = from<VendorDocument[] | undefined>(db.vendors.find().$)

  const handleAddVendor = (): void =>
    void db.vendors.insert({
      _id: 'V' + ((vendors()?.length ?? 0) + 1).toString().padStart(3, '0'),
      address: 'Jakarta',
      isActive: Math.random() > 0.5,
      name: 'PT ABC',
    })

  const handleClearVendor = (): void => void db.vendors.remove()

  return (
    <Layout
      footer={
        <HStack w="100%" p="$3" justifyContent="flex-end">
          <Button onClick={handleAddVendor}>{'Add Vendor'}</Button>
          <Button ml="$2" onClick={handleClearVendor}>
            {'Remove Vendor'}
          </Button>
        </HStack>
      }
    >
      <Table>
        <Thead>
          <Th>{t('common.terms.id')}</Th>
          <Th>{t('common.terms.name')}</Th>
          <Th>{t('common.terms.active')}</Th>
          <Th>{t('common.terms.address')}</Th>
        </Thead>
        <Tbody>
          <For each={vendors()}>
            {(vendor): JSX.Element => (
              <Tr>
                <Td>{vendor._id}</Td>
                <Td>{vendor.name}</Td>
                <Td color={vendor.isActive ? '$success11' : '$danger11'}>
                  <Show when={vendor.isActive} fallback={<X />}>
                    {<Check />}
                  </Show>
                </Td>
                <Td>{vendor.address}</Td>
              </Tr>
            )}
          </For>
        </Tbody>
        <TableCaption>{`Vendor count: ${vendors()?.length ?? 0}`}</TableCaption>
      </Table>
    </Layout>
  )
}
