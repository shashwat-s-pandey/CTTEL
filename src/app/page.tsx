"use client";

import '@/app/globals.css';
import Cards from '@/components/Cards';
import Footer from '@/components/Footer';
import Header from "@/components/Header";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Card, CardHeader, CardBody } from "@nextui-org/react";
import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function Home() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
      <Header>
      </Header>
      <Navbar className='bg-black items-center'>
        <NavbarContent justify='start' className="flex space-x-4 font-bold text-gray-400">
          <NavbarItem isActive>
            <Link className='hover:text-gray-100' href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link className='hover:text-gray-100' href="#">
              Sign on (Duty)
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className='hover:text-gray-100' color="foreground" href="#">
              Sign off (Duty)
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end' className="font-bold text-gray-400"> 
          <NavbarItem>
            <Button onPress={onOpen} className='hover:text-gray-100' href="#">Login</Button>
          </NavbarItem>
        </NavbarContent> 
      </Navbar>
      <Cards>
      </Cards>

      <Footer>
      </Footer>
    </div>
  );
}
