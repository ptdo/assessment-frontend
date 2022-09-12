import { useQuery } from 'react-query'
import { useState } from 'react'
import { Center, Heading, Text, HStack, Spinner } from '@chakra-ui/react'
import {
  Pagination,
  PaginationPage,
  PaginationPageGroup,
  PaginationContainer
} from '@ajna/pagination'

import Navbar from './components/Navbar'
import { IPost } from './interfaces/index'
import { PostCard } from './components/PostCard'

const Home = () => {
  // Fetch data from API
  const { isLoading, error, data } = useQuery('post', async () => {
    return (await fetch('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts/')).json()
  })

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(0)
  const postsPerPage = 5
  const totalPages = Math.ceil(data?.length/postsPerPage)
  const pages = []

  for (let i = 1; i <= totalPages; i++){
    pages.push(i)
  }

  const postsDisplayed = postsPerPage * currentPage

  if (isLoading) { 
    return(
      <Center>
        <Heading fontSize={'3xl'} color='#356e6f'>Loading</Heading>
        <Spinner ml={3} color='#356e6f' size='lg' />
      </Center>
    )
  }

  if (error) {
    console.log(error)
  }
  
  return (
    <div className='main'>
      <Navbar />
      {data?.sort((p1: IPost, p2: IPost) => p1.createdAt > p2.createdAt ? -1 : 1)
        .slice(postsDisplayed, postsDisplayed + postsPerPage)
        .map((post:IPost) => <PostCard key={post.id} post={post} />)
      }

      <Pagination 
        pagesCount={totalPages}
        currentPage={currentPage}
        onPageChange={(selected:number) => setCurrentPage(selected-1)}
      >
        <PaginationContainer margin='1% 0 5% 65%'>
            <HStack>
            <Text fontWeight={'bold'} fontSize={'xl'} color='#356e6f'>Page</Text>
              <PaginationPageGroup>
                {pages.map((page: number) => (
                    <PaginationPage 
                      key={page} 
                      page={page} 
                      size={'xl'}
                      variant={'link'}
                      fontSize={'2xl'}
                      color='#356e6f'
                      _focus={{
                        boxShadow:
                          '0 0 1px 2px #f6e71d',
                      }}
                    />
                ))}
              </PaginationPageGroup>
            </HStack>
          </PaginationContainer>
      </Pagination>
    </div>
  )
}

export default Home
