import { fireEvent, render, screen } from '@testing-library/react'

import { PostCard } from '@pages/components/PostCard'
import { mockPosts } from './mock/mockData'


describe('Test PostCard Component', () => {
    it('should render successfully', () => {
        expect(render(<PostCard post={mockPosts[0]}/>)).not.toThrowError
    })

    it(('should show/hide post description'), () => {
        render(<PostCard post={mockPosts[0]}/>)
        
        const btn = screen.getAllByRole('button')[0]

        const fullDescription =mockPosts[0].description
        expect(fullDescription.length).toBeGreaterThan(100)

        const description = screen.getByText(fullDescription.slice(0,99) + '...')
        
        expect(description.textContent?.slice(99, mockPosts[0].description.length -1)).not.toBeInTheDocument
        fireEvent.click(btn)
        expect(description.textContent?.slice(99, mockPosts[0].description.length -1)).toBeInTheDocument
    })

    it('should collapse/expand comment section ', () => {
        render(<PostCard post={mockPosts[0]}/>)
        const btn = screen.getAllByRole('button')[1]

        fireEvent.click(btn)

        const comments = screen.getByText('Comments')
        expect(comments).toBeInTheDocument

        fireEvent.click(btn)
        expect(comments).not.toBeInTheDocument
    })
})