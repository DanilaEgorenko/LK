import List from '@ui/list'
import DragAndDropArea from './ui/drag-and-drop-area'
import ListOfFiles from './ui/list-of-files'
import React from 'react'

export interface FileInputProps {
    title?: string
    maxFileSizeInBytes: number
    files: File[]
    setFiles: (args: any) => void
    isActive: boolean
    maxFiles?: number
}

const FileInput = (props: FileInputProps) => {
    return (
        <List>
            <DragAndDropArea {...props} />
            <ListOfFiles files={props.files} setFiles={props.setFiles} />
        </List>
    )
}

export default FileInput
