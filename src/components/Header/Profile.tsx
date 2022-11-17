import { Box, Flex, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
         <Box mr="4" textAlign="right">
          <Text>Júlia Castro</Text>
          <Text color="gray.300" fontSize="small">juzicastro12@gmail.com</Text>
        </Box>
      )}
       
      <Avatar size="md" name="Julia Castro" src="https://github.com/juliasc12.png" />
    </Flex>
  )
}