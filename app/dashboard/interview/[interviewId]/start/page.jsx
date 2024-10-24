"use client"


import React, { useEffect, useState } from 'react'
import { db } from '../../../../../utils/db';
import { MockInterview } from '../../../../../utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb } from 'lucide-react';
import Webcam from 'react-webcam';
//import {QuestionsSection} from "./_components/QuestionsSection"
//import {QuestionsSection} from './_components/QuestionsSection'
function StartInterview({params}) {

  const [interviewData,setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  useEffect(()=>{

    GetInterviewDetails();
  },[])

  // used to get interview by mockid/interviewid
  const GetInterviewDetails=async ()=>{
    const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewId));

const jsonMockResp = JSON.parse(result[0].jsonMockResp);
console.log(jsonMockResp);
setMockInterviewQuestion(jsonMockResp);
setInterviewData(result[0]);

}
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        
{/*questions */}
<div className='p-5 border rounded-lg my-5'>
  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
  {mockInterviewQuestion && mockInterviewQuestion.map((question,index)=>(
    <h2 className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex==index&&'bg-blue-800 text-white'}`}>Question #{index+1}</h2>
  ))}
 
  </div>  
  <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
  <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
    <h2 className='flex gap-2 items-center text-primary'>
      <Lightbulb/>
      <strong>Note:</strong>
    </h2>
    <h2 className='text-sm text-primary my-2'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
  </div>
  </div> 
  {/* audio and video recording */}
    <Webcam/>
      </div>

    </div>
  )
}

export default StartInterview
