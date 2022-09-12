import { useState } from 'react';
import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  VStack,
  Avatar,
  Button,
  HStack,
  AvatarGroup,
  Divider,
  useMediaQuery,
} from '@chakra-ui/react';
import moment from 'moment'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'

import { IPost } from '../interfaces/index'
import CommentCard from '../components/CommentCard'


export function PostCard({ post }: {post: IPost}){
    const [clicked, setClicked ] = useState(false)
    const [more, setMore] = useState(false)
    const [minScreen] = useMediaQuery('(min-width: 1260px)')

    return (
      <Center py={6} id={post.id}>
        <Box
          display={clicked && minScreen ? 'flex' : 'block'}
          border={'solid'}
          borderColor={'#f6e71d'}
          bg={'white'}
          boxShadow={'2xl'}
          borderRadius={'20px'}
          p={5}
          boxSize={clicked ? '75%' : '60%'}
          justifyContent='end'
        >
          <Box ml={8} w={clicked ? '70%' : '90%'}>
            <Stack alignItems={'left'}>
              <Heading fontSize={'4xl'} color={'#356e6f'}>{post.title.toUpperCase()}</Heading>
              <Text fontSize={'xl'}>{more ? post.description :
                (post.description.length > 100 ? post.description.slice(0, 99) + '...' : post.description)}
                <Button
                  name='btn-more' 
                  variant={'link'}
                  ml={2} 
                  onClick={() => setMore(!more)}
                >
                  {more ? 'Hide' : 'Read More'}
                </Button>
              </Text>
            </Stack>
            <HStack mt={3} spacing={2} align={'center'} flexWrap={'wrap'}>
              <HStack flexWrap={'wrap'}>
                <AvatarGroup>
                {post.authors.map(author => 
                  <Avatar key={author.id} src={author.avatar} border={''} borderColor={'#356e6f'} />)}
                </AvatarGroup> 
                
              </HStack>

              <HStack flexWrap={'wrap'}>
                {post.authors.map(author => 
                  <Text key={author.id} fontWeight={'bold'} textColor={'#356e6f'}>{author.name}</Text>
                )}
              </HStack>
            
            <HStack ml={65} h={8}>
              {minScreen && <Divider orientation='vertical' />}
              <Text fontSize={'sm'}> Created: {moment(post.createdAt.toString()).format('MMMM Do, YYYY')}</Text> 
            </HStack>

            <Button
              name="btn-comment"
              variant={'link'}
              fontWeight={'bold'}
              color={'#356e6f'}
              rightIcon={clicked ? <ArrowUpIcon /> : <ArrowDownIcon />}
              onClick={() => setClicked(!clicked)}
            >
              {clicked ? 'Hide Comments' : 'Show Comments'}
            </Button>
            </HStack>
          </Box>
          
          {clicked &&
            <Stack display={'flex'} mr={5} alignSelf={'right'} w={minScreen ? '75%' : 'auto'}>
              {!minScreen && <Divider mt={5}/>}
              <HStack>
                <Heading fontWeight={'bold'} fontSize='2xl' color={'#356e6f'}>Comments</Heading>
              </HStack>
              
              <VStack>
                {post.comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
              </VStack>
            </Stack>
          } 
        </Box>
      </Center>
  );
}