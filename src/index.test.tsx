import Home from '@pages/index'
import { render, screen, waitFor } from '@testing-library/react'
import { assert } from 'console'
import { act } from 'react-dom/test-utils'
import { QueryClientProvider, QueryClient } from 'react-query'

import { mockPosts } from './mock/mockData'

const queryClient = new QueryClient();

const mockData = {
    isLoading: false,
    data: {mockPosts},
    error: {}
}

describe(('Test Home Page'), () => {
    beforeAll(() => {
        jest.mock('react-query', () => ({
            useQuery: jest.fn(() => mockData)
        }));
    })

    it(('should render sucessfully'), () => {
        act(() => {
            render(
                <QueryClientProvider client={queryClient}>
                    <Home />
                </QueryClientProvider>
            )
        });

        expect.assertions(true)
    })


    it(('should display at most 5 posts per page'), () => {
        act(() => {
            render(
                <QueryClientProvider client={queryClient}>
                    <Home />
                </QueryClientProvider>
            )
        })

        waitFor(() => {
            expect(screen.getByText(mockPosts[1].title)).toBeInTheDocument
            expect(mockPosts[5].title).not.toBeInTheDocument
        })
    })
})