import { useForm, SubmitHandler } from 'react-hook-form'

import { Flex, Button, Stack } from '@chakra-ui/react'

import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigátorio').email('E-mail inválido'),
  password: yup.string().required('Senha obrigátoria')
})

export default function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log(values)
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360} 
        bg="gray.800" 
        p="8" 
        borderRadius="8"
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="E-mail"
            error={errors.email} 
            {...register('email')} 
          />
          <Input 
            name="password" 
            type="password" 
            label="Senha"
            error={errors.password}  
            {...register('password')} />
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink" 
          size="lg"
          isLoading={isSubmitting}
        >
            Entrar
        </Button>
      </Flex>
    </Flex>
  )
}