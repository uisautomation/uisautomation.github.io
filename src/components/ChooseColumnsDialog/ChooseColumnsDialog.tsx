import React, { useState, useEffect, useMemo, useRef } from 'react'
import {
  Dialog,
  DialogProps,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  Box,
  styled,
  SelectChangeEvent,
} from '@mui/material'
import {
  DragIndicator as DragIndicatorIcon,
  Delete as DeleteIcon,
  Lock as LockIcon,
} from '@mui/icons-material'
import { IColumn } from '@/types'

const DragHandle = styled(ListItemIcon)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.text.primary,
    cursor: 'grab',
  },
}))

const Container = styled(Box)({
  minHeight: 0,
})

const DialogContentStyled = styled(DialogContent)({
  scrollBehavior: 'smooth',
})

const AddColumnContainer = styled(Box)(({ theme }) => ({
  minHeight: 30,
  overflowY: 'hidden',
  paddingLeft: theme.spacing(4.5),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(1),
}))

const SelectedColumnsList = styled(List)({
  paddingBottom: 0,
  paddingTop: 0,
})

export interface ChooseColumnsDialogProps {
  /** Flag indicating if the dialog is shown to the user. Set on the underlying Dialog component. */
  open: boolean
  /** Additional props passed to the underlying Dialog component. */
  DialogProps?: Omit<DialogProps, 'open'>
  /** Function called when the user closes the dialog by some other means (e.g. by clicking away). */
  onClose?: DialogProps['onClose']
  /** Function called when the user explicitly cancels the dialog box via the "Cancel" button. */
  onCancel?: () => void
  /** Function called when the user selects a new column layout. */
  onSetColumns?: (selectedKeys: string[]) => void
  /** Array of column descriptions. */
  columns?: IColumn[]
  /** Initial list of selected column keys. */
  initialSelectedColumnKeys?: string[]
  /** Keys of columns which are fixed and cannot be de-selected or moved. */
  fixedColumnKeys?: string[]
}

/**
 * A dialog for customizing table column selection and ordering.
 */
export const ChooseColumnsDialog: React.FC<ChooseColumnsDialogProps> = ({
  open,
  DialogProps = {},
  onClose = () => null,
  onCancel = () => null,
  onSetColumns = () => null,
  columns = [],
  initialSelectedColumnKeys = [],
  fixedColumnKeys = [],
}) => {
  const [selectedColumnKeys, setSelectedColumnKeys] = useState<string[]>([])
  const contentRef = useRef<HTMLDivElement>(null)
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(false)

  // Create a map for quick column lookup
  const columnMap = useMemo(() => {
    const map = new Map<string, IColumn>()
    columns.forEach((column) => map.set(column.key, column))
    return map
  }, [columns])

  // Reset selected columns when initialSelectedColumnKeys changes
  useEffect(() => {
    setSelectedColumnKeys(initialSelectedColumnKeys)
  }, [initialSelectedColumnKeys])

  // Auto-scroll to bottom when new columns are added
  useEffect(() => {
    if (shouldScrollToBottom && contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight
      setShouldScrollToBottom(false)
    }
  }, [shouldScrollToBottom])

  // Calculate available columns (not fixed, not selected)
  const availableColumnKeys = useMemo(() => {
    const usedKeys = new Set([...fixedColumnKeys, ...selectedColumnKeys])
    return columns
      .filter((column) => !usedKeys.has(column.key))
      .map((column) => column.key)
  }, [fixedColumnKeys, selectedColumnKeys, columns])

  const handleAddColumn = (columnKey: string) => {
    setSelectedColumnKeys([...selectedColumnKeys, columnKey])
    setShouldScrollToBottom(true)
  }

  const handleRemoveColumn = (columnKey: string) => {
    setSelectedColumnKeys(selectedColumnKeys.filter((key) => key !== columnKey))
  }

  const handleReset = () => {
    setSelectedColumnKeys(initialSelectedColumnKeys)
  }

  const handleSetColumns = () => {
    onSetColumns(selectedColumnKeys)
  }

  const handleAddColumnChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value
    if (value) {
      handleAddColumn(value)
    }
  }

  // Note: moveColumn function available for future drag-and-drop implementation
  // const moveColumn = (fromIndex: number, toIndex: number) => {
  //   const newSelectedKeys = [...selectedColumnKeys]
  //   const [movedItem] = newSelectedKeys.splice(fromIndex, 1)
  //   newSelectedKeys.splice(toIndex, 0, movedItem)
  //   setSelectedColumnKeys(newSelectedKeys)
  // }

  return (
    <Dialog
      {...DialogProps}
      open={open}
      onClose={onClose}
      onTransitionExited={handleReset}
      aria-labelledby="choose-columns-dialog-title"
      id="choose-columns-dialog"
    >
      <DialogTitle id="choose-columns-dialog-title">
        Customise Table Columns
      </DialogTitle>
      <DialogContentStyled ref={contentRef} dividers>
        <Container>
          {/* Fixed columns */}
          {fixedColumnKeys.map((key, index) => {
            const column = columnMap.get(key)
            if (!column) return null
            return (
              <ListItem key={index} id={`fixed-column-${index}`}>
                <ListItemIcon>
                  <LockIcon color="disabled" />
                </ListItemIcon>
                <ListItemText
                  primary={column.primaryText}
                  secondary={column.secondaryText}
                />
              </ListItem>
            )
          })}

          {/* Selected columns (draggable) */}
          <SelectedColumnsList>
            {selectedColumnKeys.map((key, index) => {
              const column = columnMap.get(key)
              if (!column) return null
              return (
                <ListItem key={index} id="selected-column">
                  <DragHandle>
                    <DragIndicatorIcon />
                  </DragHandle>
                  <ListItemText
                    primary={column.primaryText}
                    secondary={column.secondaryText}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => handleRemoveColumn(column.key)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })}
          </SelectedColumnsList>
        </Container>

        {/* Add column dropdown */}
        {availableColumnKeys.length > 0 && (
          <AddColumnContainer>
            <FormControl fullWidth>
              <Select
                displayEmpty
                value=""
                onChange={handleAddColumnChange}
                id="add-column-select"
              >
                <MenuItem value="" disabled>
                  Add column
                </MenuItem>
                {availableColumnKeys.map((key, index) => {
                  const column = columnMap.get(key)
                  if (!column) return null
                  return (
                    <MenuItem
                      key={index}
                      value={column.key}
                      id={`unselected-column-${index}`}
                    >
                      {column.primaryText}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </AddColumnContainer>
        )}
      </DialogContentStyled>
      <DialogActions>
        <Button id="cancel-button" onClick={onCancel}>
          Cancel
        </Button>
        <Button id="set-column-button" color="primary" onClick={handleSetColumns}>
          Set Columns
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ChooseColumnsDialog