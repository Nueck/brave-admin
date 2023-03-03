<script setup lang="ts">
import { ref } from 'vue'
import type { DataTableColumns, DataTableRowKey } from 'naive-ui'

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

const columns: DataTableColumns<RowData> = [
  {
    type: 'selection',
  },
  {
    title: 'Name',
    key: 'name',
    defaultSortOrder: 'ascend',
    sorter: 'default',

  },
  {
    title: 'Age',
    key: 'age',
    sorter: (row1: { age: number }, row2: { age: number }) => row1.age - row2.age,
  },
  {
    title: 'Address',
    key: 'address',
    defaultFilterOptionValues: ['London', 'New York'],
    filterOptions: [
      {
        label: 'London',
        value: 'London',
      },
      {
        label: 'New York',
        value: 'New York',
      },
    ],
    filter(value, row) {
      return !!~row.address.indexOf(String(value))
    },
  },
]

const data: RowData[] = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: 3,
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: 3,
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]
const pagination = ref({ pageSize: 3 })
</script>

<template>
  <n-space vertical :size="12">
    <n-space>
      <!-- <n-button @click="sortName">
        Sort By Name (Ascend)
      </n-button>
      <n-button @click="filterAddress">
        Filter Address (London)
      </n-button>
      <n-button @click="clearFilters">
        Clear Filters
      </n-button>
      <n-button @click="clearSorter">
        Clear Sorter
      </n-button> -->
    </n-space>
    <n-data-table
      pagination-behavior-on-filter="first"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
  </n-space>
</template>
