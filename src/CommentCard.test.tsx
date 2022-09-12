import { render } from '@testing-library/react'

import CommentCard from '@pages/components/CommentCard'
import { mockPosts } from './mock/mockData'


describe('Test CommentCard Component', () => {
    const { container } = render(<CommentCard comment={mockPosts[0].comments[0]}/>)

    it('should render successfully', () => {
        expect(container.firstChild).not.toBeNull
    })

    it('should render expected format', () => {
        expect(container.firstChild).toMatchSnapshot(`
        <div>
            <div>
                <div>
                    <h2>Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.</h2>
                    <p> Created: May 19th, 2021</p>
                </div>
                <p>Temporibus illo voluptatum illum possimus. Minus laudantium eum. 
                Corrupti provident blanditiis qui sed aperiam ut totam. Cupiditate autem dolor pariatur commodi. Nesciunt incidunt vero repellat reiciendis.</p>
            </div>
        </div>
        `)
    })
})

