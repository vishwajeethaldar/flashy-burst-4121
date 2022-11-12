import {Box, Input, Button, Flex, Text, LinkBox} from '@chakra-ui/react'
import Link from 'next/link';
import Router  from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ClientNavbar } from '../../components';
import Loginfooter from '../../components/footer/Loginfooter';
import { login } from '../../store/auth/authSlice'; 
import { useAppDispatch, useAppSelector } from '../../store/hook';


export interface User {
	email: string;
	password: string;
}


export default function Login() {
    const dispatch = useAppDispatch()
    const auth = useAppSelector(store=>store.auth)

    const [userCredentials, setUserCredentials] = useState<User>({
		email: '',
		password: '',
	});


    function handleChange(e:ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target
    setUserCredentials({...userCredentials,[name]:value});
    }

    function handleLogin(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        dispatch(login(userCredentials))
    }

    useEffect(()=>{
        
        if(auth.isAuth){
            auth.role==="admin"?Router.push('/admin'):Router.push('/')
        }

    },[auth])

  
    
      
        
    
    return (
        <>
           

            <ClientNavbar />
            
            <Flex gap={200} mt={200} ml={[50,200]} direction={['column', 'row']}>
                <Box  h={"auto"} w={250} >
                    <Text fontSize={22}><b>LOG IN</b></Text>
                    <form onSubmit={handleLogin}>
                        <Input 
                            id='email'
                            type='email'
                            name="email"
                            onChange={handleChange}
                            value={userCredentials.email}
                            required
                            placeholder='E-MAIL' 
                            mt={10} 
                            focusBorderColor="none"
                            borderLeft={"none"} 
                            borderTop={"none"} 
                            borderRight={"none"} 
                            borderRadius={"none"}
                        />
                        <Input
                            id='password'
                            type='password'
                            name="password"
                            value={userCredentials.password}
                            onChange={handleChange}
                            required 
                            placeholder='PASSWORD' 
                            mt={5}
                            focusBorderColor="none"
                            borderLeft={"none"} 
                            borderTop={"none"} 
                            borderRight={"none"} 
                            borderRadius={"none"}
                        />
                        <Text 
                            fontSize={9} 
                            mt={10}
                            >
                            HAVE YOU FORGOTTEN YOUR PASSWORD?
                        </Text>
                        <Input 
                            
                            type="submit"
                            value="LOG IN"
                            fontSize={18} 
                            mt={50}
                            size='md'
                            height='45px'
                            width='250px'
                            border='0'
                            bg={"black"}
                            color={"white"}
                            cursor={"pointer"}
                            borderRadius={"none"}
                            variant='none'
                            />
                            
                    </form>
                </Box>

                <Box h={400} w={400}>
                    <Text fontSize={22}><b>REGISTER</b></Text>
                    <Text 
                        fontSize={14} 
                        mt={5}
                        >
                        IF YOU STILL DON'T HAVE A <b>ZARA.COM</b> ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.
                        <br></br>
                        BY GIVING US YOUR DETAILS, PURCHASING IN <b>ZARA.COM</b> WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.
                    </Text>

                    <Button
                        fontSize={18} 
                        mt={140}
                        size='md'
                        height='45px'
                        width='300px'
                        border='0'
                        bg={"black"}
                        color={"white"}
                        borderRadius={"none"}
                        variant='none'
                        >
                        <Link href="/signup">
                            CREATE ACCOUNT
                        </Link>
                    </Button>
                    
                </Box>
            </Flex>

            <Loginfooter />
        </>
    )
  }
  