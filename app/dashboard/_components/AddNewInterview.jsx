//import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger , DialogHeader} from '@radix-ui/react-dialog'

"use client"
import React, { useActionState, useState } from 'react'
import { Button } from '../../../components/button'
import { Input } from '../../../components/input'
import { Textarea } from '../../../components/textarea'
import { v4 as uuidv4 } from 'uuid';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/dialog"
//import { ChatSession } from '@google/generative-ai'

import { chatSession, ChatSession } from '../../../utils/GeminiAIModal'
import {db} from '../../../utils/db'
import { LoaderCircle } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import moment from 'moment';
import { MockInterview } from '../../../utils/schema'
import { useRouter } from 'next/navigation'
function AddNewInterview() {
  const [openDialog,setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [JsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const {user} = useUser();

  const onSubmit = async (e)=>{
    setLoading(true);
    e.preventDefault();
console.log(jobPosition,jobDesc,jobExperience);
const InputPrompt= "Job position: "+jobPosition+" , Job Description: "+jobDesc +", Years of Experience:"+ jobExperience+", Depends on Job Position, Job Description and Years of Experience give us "+ process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" interview question along with Answers in JSON format. Give us question and answer field on JSON";
 
const result = await chatSession.sendMessage(InputPrompt);
const MockJsonResp = (result.response.text()).replace('```json', '').replace('```','');
console.log(JSON.parse(MockJsonResp));
setJsonResponse(MockJsonResp);

if(MockJsonResp){
const resp= await db.insert(MockInterview).values({
  mockId:uuidv4(),
  jsonMockResp: MockJsonResp,
  jobPosition: jobPosition,
  jobDesc: jobDesc,
  jobExperience: jobExperience,
  createdBy: user?.primaryEmailAddress?.emailAddress,
  createdAt: moment().format('DD-MM-YYYY')
}).returning({mockId:MockInterview.mockId});
console.log("Insert id",resp);

if(resp){
  setOpenDialog(false);
  router.push('/dashboard/interview/'+resp[0]?.mockId);
}
}else{
  console.log(error);
}
setLoading(false);

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
          <Button type='submit' disable={loading}>
            {loading?<> <LoaderCircle className='animate-spin'/>'Generating from AI'</>:'Start Interview'}
           </Button>
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


