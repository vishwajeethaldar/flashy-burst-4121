import React, { useEffect, useState } from 'react'
import {Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex,Image,Input,Link,SimpleGrid,Spacer, Stack, Text, useDisclosure,Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,} from "@chakra-ui/react"
import style from "../search/index.module.css"

const SearchPage = () => {
  const [isShowTrends,setIsShowTrends]=useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef:any = React.useRef()
  return (
    <Box>
    <Flex style={{fontFamily:'Neue-Helvetica'}} m={{lg:"auto"}} ml={{sm:"4"}} w={{lg:"12%",sm:"5%"}} gap={{sm:"10px"}} justifyContent={{sm:"flex-start"}} >
        <Box><Link><Text fontSize={"13px"}>WOMAN</Text></Link></Box>
        <Spacer/>
        <Box><Link><Text fontSize={"13px"}>MAN</Text></Link></Box>
        <Spacer/>
        <Box><Link><Text fontSize={"13px"}>KIDS</Text></Link></Box>
    </Flex>
    <Flex my={{lg:"16",sm:"10"}} mt={{sm:"3"}} mb={{sm:"16"}} ml={{lg:"56",sm:"4"}} w={{lg:"82%"}}>
        <Input style={{textTransform:"uppercase"}} onInput={()=>setIsShowTrends(false)} onFocus={()=>setIsShowTrends(true)} focusBorderColor='black' className={style.searchInput} placeholder='ENTER SEARCH TERMS' _placeholder={{color:"black"}} borderColor="black" variant="flushed"/>
    </Flex>
    {isShowTrends && <Stack w={{lg:"5%"}} ml={{lg:"56",sm:"4"}}>
        <Box><Text fontSize={"13px"} as={"b"}>TRENDS</Text></Box>
        <Box><Text cursor={"pointer"} fontSize={"13px"}>DRESS</Text></Box>
        <Box><Text cursor={"pointer"} fontSize={"13px"}>TOP</Text></Box>
        <Box><Text cursor={"pointer"} fontSize={"13px"}>SKIRT</Text></Box>
        <Box><Text cursor={"pointer"} fontSize={"13px"}>BLAZER</Text></Box>
    </Stack>}
    <Flex pr={'6'} direction={'row-reverse'} mb={'10'}><Button variant={"outline"} colorScheme={"whiteAlpha"}  size={"sm"} color={"black"} borderRadius={'none'} ref={btnRef} onClick={onOpen}><Text>FILTERS</Text></Button></Flex>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{"sm":"full",'lg':"xs"}}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
          <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          COLOUR
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      color
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          SIZE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel py={'10'} pb={4}>
      SIZE
    </AccordionPanel>
  </AccordionItem>
</Accordion>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              CANCEL
            </Button>
            <Button colorScheme='blue'>APPLY</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    <SimpleGrid fontSize={{lg:"11px",sm:"13px"}} px={"6"} gap={"10"} border={"1px solid"} columns={{sm:2,md:5,lg:5}}>
        <Box>
          <Link><Image src='https://bit.ly/dan-abramov'/></Link>
          <Flex>
            <Link><Text>SATIN BLAZER WITH TIE DETAIL</Text></Link>
            <Spacer/>
            <Text>₹ 6,990.00</Text>
          </Flex>
        </Box>
        <Box>
          <Image src='https://bit.ly/dan-abramov'/>
          <Flex>
            <Link><Text>SATIN BLAZER WITH TIE DETAIL</Text></Link>
            <Spacer/>
            <Text>₹ 6,990.00</Text>
          </Flex>
        </Box>
        <Box>
          <Image src='https://bit.ly/dan-abramov'/>
          <Flex>
            <Link><Text>SATIN BLAZER WITH TIE DETAIL</Text></Link>
            <Spacer/>
            <Text>₹ 6,990.00</Text>
          </Flex>
        </Box>
        <Box>
          <Image src='https://bit.ly/dan-abramov'/>
          <Flex>
            <Link><Text>SATIN BLAZER WITH TIE DETAIL</Text></Link>
            <Spacer/>
            <Text>₹ 6,990.00</Text>
          </Flex>
        </Box>
        <Box>
          <Image src='https://bit.ly/dan-abramov'/>
          <Flex>
            <Link><Text>SATIN BLAZER WITH TIE DETAIL</Text></Link>
            <Spacer/>
            <Text>₹ 6,990.00</Text>
          </Flex>
        </Box>
        <Box>
          <Image src='https://bit.ly/dan-abramov'/>
        </Box>
        <Box>
          <Image src='https://bit.ly/dan-abramov'/>
        </Box>
        <Box>
          <Image src='https://bit.ly/dan-abramov'/>
        </Box>
        <Box>
          <Image src='https://bit.ly/dan-abramov'/>
        </Box>
        <Box>
          <Image src='https://bit.ly/dan-abramov'/>
        </Box>
        
    </SimpleGrid>
    </Box>
  )
}

export default SearchPage