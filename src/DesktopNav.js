import { 
  Text, 
  Flex, 
  HStack, 
  Stack,
  IconButton,
  useDisclosure, 
  Box
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouteLink } from "react-router-dom";

function DesktopNav() {
  const links = [
    {
      title: "WORK",
      link: "/work",     
    },
    {
      title: "DESIGN",
      link: "/design",     
    },
    {
      title: "ABOUT",
      link: "/about",     
    }
  ]

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'} px={30}>
      <RouteLink to='/'>
        <Text fontSize='sm'>AAYUSHI GUPTA</Text>
      </RouteLink>
      <IconButton
        size={'md'}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={6} />}
        aria-label={'Open Menu'}
        display={{ md: 'none' }}
        backgroundColor="transparent"
        onClick={isOpen ? onClose : onOpen}/>
      <HStack spacing={30} as={'nav'} display={{ base: 'none', md: 'flex' }}>
      {links.map(({ title, link }) => 
        <RouteLink to={link}>
          <Text fontSize='sm' _hover={{ textDecoration: "underline" }}>
            {title}
          </Text>
        </RouteLink>)}
      </HStack>
    </Flex>
    {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            {links.map(({ title, link }) => 
              <Box paddingLeft={30}>
              <RouteLink to={link}>
                <Text fontSize='sm' _hover={{ textDecoration: "underline" }}>
                  {title}
                </Text>
              </RouteLink>
              </Box>)}
            </Stack>
          </Box>
        ) : null}
    </Box>
  );
}

export default DesktopNav;