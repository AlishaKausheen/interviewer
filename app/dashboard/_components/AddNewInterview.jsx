//import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger , DialogHeader} from '@radix-ui/react-dialog'

"use client"
import React from 'react'
import { Button } from '../../../components/button'
////import {
  //Dialog,
 // DialogContent,
  //DialogDescription,
  //DialogHeader,
  //DialogTitle,
  //DialogTrigger,
//} from '@/components/ui/dialog';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/dialog"


function AddNewInterview() {
  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'>
        <h2 className='text-lg text-center'>+ Add New</h2>
      </div>
      
     <Button>Alisha</Button>
     <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview
