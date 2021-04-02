import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

import {
  Background, 
  Container, 
  Logo, 
  AreaInput, 
  Input, 
  SubmitButton,
  SubmitText, 
} from '../Signin/styles';


export default function SignUp() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

const {signUp} = useContext(AuthContext)

function handleSignUp(){

  signUp(email,password,name)
}
  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input
            placeholder="Name"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            secureTextEntry={false}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Sign Up</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}