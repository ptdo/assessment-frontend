import { Center, Box, Heading, Text, HStack } from '@chakra-ui/react';
import moment from 'moment'

import { IComment } from '../interfaces';

export default function CommentCard({comment} : {comment: IComment}) {
    return (
        <Center id={comment.id}>
            <Box
                border='solid'
                borderColor={'#356e6f'}
                boxShadow={'xl'}
                borderRadius={'20px'}
                p={6}
                boxSize={'95%'}
            >
            <HStack>
                <Heading fontSize={'xl'}>{comment.title}</Heading>
                <Text fontSize={'sm'}> Created:  {moment(comment.createdAt.toString()).format('MMMM Do, YYYY')}</Text>
            </HStack>
            <Text>{comment.description}</Text>
            </Box>
        </Center>
    )
}