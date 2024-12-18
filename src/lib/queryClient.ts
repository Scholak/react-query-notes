import { QueryClient, QueryClientConfig } from '@tanstack/react-query'

export const options: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60,
			gcTime: 1000 * 60,
		},
	},
}

export const queryClient = new QueryClient(options)
