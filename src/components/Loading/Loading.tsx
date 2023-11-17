import { LoadingOverlay, LoadingOverlayProps } from '@mantine/core'
import React from 'react'

const Loading = ({ visible }: LoadingOverlayProps) => {
    return (<LoadingOverlay visible={visible} zIndex={100} loaderProps={{ color: 'var(--accent-color)', type: 'dots' }} />)
}

export default Loading
