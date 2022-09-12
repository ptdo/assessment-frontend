import { Flex, Box, Heading, Spacer, Button, ButtonGroup, Center, theme, background } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Center>
            <Flex w={'70%'} h={'4rem'} gap='5' m={8}>
                <Box p='2' ml={5}>
                    <Heading size='xl' color='#356e6f'>Blog App</Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap='2' marginRight={5}>
                    <Button variant='ghost' color='#f6e71d' bgColor={'#356e6f'}>Sign Up</Button>
                    <Button variant='ghost' color='#f6e71d' bgColor={'#356e6f'}>Log in</Button>
                </ButtonGroup>
            </Flex>
      </Center>
    )
}