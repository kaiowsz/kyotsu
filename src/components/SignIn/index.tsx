import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './Elements'

const SignIn = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to="/">kyotsu</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to access your account</FormH1>
                    <FormLabel htmlFor="for">Email</FormLabel>
                    <FormInput type="email" required></FormInput>
                    <FormLabel htmlFor="for">Password</FormLabel>
                    <FormInput type="password" required></FormInput>
                    <FormButton type="submit">Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  )
}

export default SignIn