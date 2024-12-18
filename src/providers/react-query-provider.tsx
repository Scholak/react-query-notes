'use client'

import { ReactNode } from 'react'
import { queryClient } from '@/lib/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'

type IRootProviderProps = {
	children: ReactNode
}

const ReactQueryProvider = ({ children }: IRootProviderProps) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
