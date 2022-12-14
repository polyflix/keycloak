import { Box, Container, ContainerProps, Theme } from '@mui/material'
import { SxProps } from '@mui/system'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { forwardRef, PropsWithChildren } from 'react'

type PageProps = {
  title?: string
  error?: FetchBaseQueryError | SerializedError
  isLoading?: boolean
  sx?: SxProps<Theme>
} & ContainerProps

// eslint-disable-next-line react/display-name
export const Page = forwardRef<typeof Box, PropsWithChildren<PageProps>>(
  (
    {
      children,
      title = '',
      error,
      isLoading = false,
      sx,
      ...containerProps
    }: PropsWithChildren<PageProps>,
    ref
  ) => (
    <Box sx={{ height: '100%', width: '100%' }} ref={ref}>
        <Container sx={{ ...sx }} {...containerProps}>
            {children}
        </Container>
    </Box>
  )
)
