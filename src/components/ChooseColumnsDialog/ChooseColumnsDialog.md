Interactive ChooseColumnsDialog example:

```jsx
import React, { useState } from 'react'
import { Button, Box, Chip } from '@mui/material'
import { ChooseColumnsDialog } from './ChooseColumnsDialog'

const ALL_COLUMNS = [
  { key: 'name', primaryText: 'Name' },
  { key: 'age', primaryText: 'Age', secondaryText: 'Age in years' },
  { key: 'address', primaryText: 'Address', secondaryText: 'Address (if given)' },
  { key: 'since', primaryText: 'Member since', secondaryText: 'Date of joining site' },
  { key: 'favouriteColour', primaryText: 'Favourite colour', secondaryText: 'Preferred colour of bikeshed' },
]

// Create a map between column key and the column
const columnMap = new Map(ALL_COLUMNS.map(column => [column.key, column]))

// Maintain state for dialog and selected columns
const [isOpen, setIsOpen] = useState(false)
const [selectedKeys, setSelectedKeys] = useState(['age', 'since'])
const fixedKeys = ['name']

<>
  <Box py={1}>
    {[...fixedKeys, ...selectedKeys].map((key, index) => (
      <Box key={index} px={1} display="inline">
        <Chip label={columnMap.get(key)?.primaryText || key} />
      </Box>
    ))}
  </Box>
  <Button onClick={() => setIsOpen(true)}>Customise columns</Button>
  <ChooseColumnsDialog
    open={isOpen}
    onClose={() => setIsOpen(false)}
    onCancel={() => setIsOpen(false)}
    onSetColumns={(newKeys) => { 
      setSelectedKeys(newKeys) 
      setIsOpen(false) 
    }}
    columns={ALL_COLUMNS}
    fixedColumnKeys={fixedKeys}
    initialSelectedColumnKeys={selectedKeys}
    DialogProps={{
      fullWidth: true,
      maxWidth: 'sm',
    }}
  />
</>
```