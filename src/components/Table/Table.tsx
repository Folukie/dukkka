'use client'

import React from 'react'
import DataTable from 'react-data-table-component'

const rowTheme = {
  headRow: {
    style: {
      backgroundColor: '#F5F5F5',
    },
  },
  header: {
    borderColor: 'transparent',
    backgroundColor: '#F5F5F5',
    fontSize: '0.825rem',
    fontColor: 'white',
    fontColorActive: 'rgba(255, 255, 255, 0.85)',
  },
  rows: {
    spacing: 'spaced',
    spacingBorderRadius: '0.25rem',
    spacingMargin: '.5rem',
    fontColor: '#1C065A',
    borderColor: 'rgba(0,0,0,0)',
    backgroundColor: 'white',
    height: '52px',
    fontSize: '0.825rem',
    stripedColor: ' #F5F4F7',
  },
  cells: {
    cellPadding: '48px',
  },
  footer: {
    separatorStyle: 'none',
  },
  headCells: {
    pointerEvent: 'none',
  },
}

const Table = (props: any) => {
  return (
    <DataTable
      {...props}
      customTheme={{ ...rowTheme, ...(props.customTheme || {}) }}
      noHeader
      responsive
      pagination
      pointerOnHover
    />
  )
}

export default Table
