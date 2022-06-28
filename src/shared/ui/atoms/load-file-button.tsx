import { Colors } from '@consts'
import { confirmModel } from '@entities/confirm'
import { popUpMessageModel } from '@entities/pop-up-message'
import getFileSize from '@utils/get-file-size'
import React, { useRef, useState } from 'react'
import { FiFile, FiFilePlus, FiImage, FiX } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { Image } from '.'

// const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000

const LoadFileButtonWrapper = styled.label<{ showPulse: boolean; isActive: boolean; topPadding: boolean }>`
    width: 100%;
    min-height: 150px;
    border-radius: var(--brLight);
    background: ${Colors.blue.reallyTransparent};
    border: ${({ showPulse }) => !showPulse && `3px dashed ${Colors.blue.main}`};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: ${({ isActive }) => isActive && 'pointer'};
    pointer-events: ${({ isActive }) => !isActive && 'none'};
    opacity: ${({ isActive }) => !isActive && 0.4};
    box-shadow: ${({ showPulse }) => showPulse && '0px 0px 1px 3px var(--reallyBlue)'};
    position: relative;

    .info {
        left: 10px;
        top: 10px;
        position: absolute;
        display: flex;
        gap: 5px;
        pointer-events: none;

        .info-item {
            padding: 5px 10px;
            background: var(--schedule);
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7em;
            font-weight: 600;
            pointer-events: none;
        }
    }

    .uploaded-files {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
        padding: ${({ topPadding }) => topPadding && '40px 20px'};

        .file-preview {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 10px;
            border-radius: var(--brLight);

            .file-body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            &:hover {
                background: var(--almostTransparentOpposite);
            }

            .file-name {
                max-width: 100px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.8em;
            }

            .remove-button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                position: absolute;
                right: 5px;
                top: 5px;

                svg {
                    width: 18px;
                    height: 18px;
                }
            }

            span {
                font-size: 0.8em;
                opacity: 0.8;
            }
            svg {
                width: 45px;
                height: 45px;
            }
        }
    }

    input[type='file'] {
        display: none;
    }

    .message {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0.7;
        color: ${Colors.blue.lighter};
        pointer-events: none;

        svg {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
        }
    }
`

export interface LoadFileProps {
    label: string
    maxFileSizeInBytes: number
    files: File[]
    setFiles: (args: any) => void
    isActive: boolean
    maxFiles?: number
}

const VALID_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']
const MAX_FILE_SIZE = 20000000

const LoadFileButton = ({ label, files, setFiles, isActive, maxFiles }: LoadFileProps) => {
    const fileInputRef = useRef(null)
    const [showPulse, setShowPulse] = useState(false)
    const { open } = useModal()

    const validateFile = (file: File) => {
        if (VALID_FORMATS.indexOf(file.type) === -1) {
            return false
        }
        return true
    }

    const handleFiles = (loadedFiles: FileList) => {
        if (!!maxFiles && files.length + loadedFiles.length > maxFiles) {
            return popUpMessageModel.events.evokePopUpMessage({
                message: `Нельзя загрузить больше ${maxFiles} файлов`,
                type: 'failure',
            })
        }
        for (let i = 0; i < loadedFiles.length; i++) {
            if (validateFile(loadedFiles[i])) {
                if (loadedFiles[i].size > MAX_FILE_SIZE) {
                    popUpMessageModel.events.evokePopUpMessage({
                        message: 'Размер файла слишком большой. Максимальный размер файла: 15 MB',
                        type: 'failure',
                        time: 10000,
                    })
                } else {
                    setFiles([...files, loadedFiles[i]])
                }
            } else {
                //  files[i].invalid = true
                popUpMessageModel.events.evokePopUpMessage({
                    message: 'Неверный формат файла.',
                    type: 'failure',
                    time: 5000,
                })
            }
        }
    }

    const handleOpenPreview = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, file: File) => {
        e.preventDefault()
        e.stopPropagation()
        const reader = new FileReader()

        reader.onloadend = () => {
            open(<Image src={reader.result as string} loading={false} width={'500px'} height={''} />)
        }

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        setShowPulse(false)
        const files = e.dataTransfer.files

        if (files.length) {
            handleFiles(files)
        }
    }

    const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        setShowPulse(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        setShowPulse(false)
    }

    const filesSelectedHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files

        if (files?.length) {
            handleFiles(files)
        }
    }

    const handleFileRemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) => {
        e.preventDefault()
        e.stopPropagation()
        const tempFiles = files.filter((file) => file.name !== name)

        setFiles([...tempFiles])
    }

    return (
        <LoadFileButtonWrapper
            isActive={isActive}
            showPulse={showPulse}
            onDragOver={(e) => isActive && handleDragOver(e)}
            onDragEnter={(e) => isActive && handleDragEnter(e)}
            onDragLeave={(e) => isActive && handleDragLeave(e)}
            onDrop={(e) => isActive && handleDrop(e)}
            topPadding={!!maxFiles}
        >
            <div className="info">
                <span className="info-item">Макс. размер файла: 15 MB</span>
                {maxFiles && <span className="info-item">Макс. файлов: {maxFiles}</span>}
            </div>
            <input type="file" name="" id="" ref={fileInputRef} onChange={filesSelectedHandle} />
            {!files.length ? (
                <div className="message">
                    <FiFilePlus />
                    <b>Нажмите сюда или перетащите файл</b>
                </div>
            ) : (
                <div className="uploaded-files">
                    {files.map((file) => {
                        return (
                            <div className="file-preview" key={file.name} onClick={(e) => e.preventDefault()}>
                                <div
                                    className="remove-button"
                                    onClick={(e) =>
                                        confirmModel.events.evokeConfirm({
                                            message: 'Вы уверены, что хотите удалить файл?',
                                            onConfirm: () => handleFileRemove(e, file.name),
                                        })
                                    }
                                >
                                    <FiX />
                                </div>
                                <div
                                    className="file-body"
                                    onClick={(e) => file.type.includes('image') && handleOpenPreview(e, file)}
                                >
                                    {file.type.includes('image') ? <FiImage /> : <FiFile />}
                                    <b className="file-name">{file.name}</b>
                                    <span>{getFileSize(file.size)}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </LoadFileButtonWrapper>
    )
}

export default LoadFileButton
