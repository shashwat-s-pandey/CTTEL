import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'

const Cards = () => {
  return (
    <div className='flex bg-white'>
      <div className='mr-40 mt-5 mb-5 w-100'>
        <Card className='bg-orange-500 p-5 ml-10 items-center max-w-md h-full'>
            <h1 className='text-white font-bold text-2xl items-center text-center pt-2 px-4'>TTE LOBBY</h1>
          <CardBody className="p-5 text-black font-serif flex-wrap flex-col">
            <p className='mb-5'>Every interchange station has a cell for TTEs, called TTE Lobby, where TTEs of originating / terminating / passing trains sign-on / sign-off.
            </p>
            <p>This application will digitize the activities like drawing out of TTE links, accountal of their duty hours and preparation of their TA/night duty allowance bills, TTE earning accountal, etc.</p>
          </CardBody>
        </Card>
      </div>
      <div className='ml-60 w-80'>
        <Card className='h-full'>
          <CardBody className="p-5 flex-wrap flex-col h-full">
            <img className="h-full max-w-50" src="/cttel2.jpg" alt="" />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Cards;