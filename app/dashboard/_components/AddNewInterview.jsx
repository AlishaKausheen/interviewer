//import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger , DialogHeader} from '@radix-ui/react-dialog'

"use client"
import React, { useState } from 'react'
import { Button } from '../../../components/button'
import { Input } from '../../../components/input'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/dialog"


function AddNewInterview() {
  const [openDialog,setOpenDialog] = useState(false);
  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
      onClick={()=>setOpenDialog(true)}>
        <h2 className='text-lg text-center'>+ Add New</h2>
      </div>
      
     
     <Dialog open={openDialog}>
  
  <DialogContent className='max-w-2xl'>
    <DialogHeader>
      <DialogTitle className='text-2xl'>Tell us more about your Job interview</DialogTitle>
      <DialogDescription>
        <div>
          
          <h2>Add details about your Job position/role, Job description and years of experience</h2>
          <div>
            <label> Job Role/Position</label>
            <Input placeholder='Ex. Full-stack developer'/>
          </div>
        </div>
        <div className='flex gap-5 justify-end'>
          <Button variant="ghost" onClick={()=> setOpenDialog(false)}>Cancel</Button>
          <Button>Start Interview</Button>
        </div>
      </DialogDescription>

    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview
