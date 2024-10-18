//import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger , DialogHeader} from '@radix-ui/react-dialog'

"use client"
import React, { useState } from 'react'
import { Button } from '../../../components/button'
import { Input } from '../../../components/input'
import { Textarea } from '../../../components/textarea'

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
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();

  const onSubmit =(e)=>{
    e.preventDefault();
console.log(jobPosition,jobDesc,jobExperience);
  }
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
        <form onSubmit={onSubmit}>
        <div>
          
          <h2>Add details about your Job position/role, Job description and years of experience</h2>
          <div className='mt-7 my-3'>
            <label> Job Role/Job Position</label>
            <Input placeholder='Ex. Full-stack developer' required
            onChange={(event)=> setJobPosition(event.target.value)}/>
          </div>
          <div className='my-3'>
            <label> Job Description/Tech Stack (In Short)</label>
            <Textarea placeholder='Ex. React, Angular, Nodejs,etc' required
             onChange={(event)=> setJobDesc(event.target.value)}/>
          </div>
          <div className='my-3'>
            <label>Years of experience </label>
            <Input placeholder='Ex. 5' type="number" max="50" min="0" required
             onChange={(event)=> setJobExperience(event.target.value)}/>
          </div>
        </div>
        <div className='flex gap-5 justify-end'>
          <Button type='button' variant="ghost" onClick={()=> setOpenDialog(false)}>Cancel</Button>
          <Button type='submit'>Start Interview</Button>
        </div>
        </form>
      </DialogDescription>

    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview
