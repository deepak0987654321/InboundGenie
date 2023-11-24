
import React from 'react';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import Layout from "../layout"


export default function IndexPage() {

  return (
    <Layout  showNavbar={true} showSideBar={true}>
    <section className=" main-container relative flex py-10 flex-col">
      <form className="flex flex-col gap-10 ">
        <div className='flex flex-col gap-6 max-w-6xl'>
      <h3>Add Project Details</h3>
      <div className="groups">
     <Label htmlFor="name">
     Project name
           </Label>
           <Input
             id="name"
             placeholder="Enter your project name"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />
       </div>
       </div>
       <Separator orientation="horizontal" className="border"/>
       <div className='flex flex-col gap-6 max-w-6xl'>
       <div className="flex flex-row gap-10 items-end">
        <div className='flex-none flex flex-col gap-3'>
        <Label htmlFor="name">
     Add source
           </Label>
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select source" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Source 1">Source 1</SelectItem>
    <SelectItem value="Source 2">Source 2</SelectItem>
    <SelectItem value="Source 3">Source 3</SelectItem>
  </SelectContent>
</Select>
       </div>
       <div className='flex-auto '>
    <div className='mt-[32px]'>
       <Input
             id="url"
             placeholder="Enter source URl  and click add"
             type="text"
             autoComplete="url"
             autoCorrect="off"
           />
</div>
</div>

       </div>

       </div>
       <Separator orientation="horizontal" className="border"/>
          <div className='flex flex-col gap-6 max-w-6xl'>
          <div className="groups">
     <Label htmlFor="name">
     Add Keyword
           </Label>
           <Input
             id="addkey"
             placeholder="Keyworde"
             type="text"
           />
       </div>
       <div className="flex flex-wrap gap-4">
       <div className="flex items-center space-x-2">
     <Checkbox id="terms" />
     <label
       htmlFor="exact"
       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
     >
       Exact match
       
     </label>
   </div>
   <div className="flex items-center space-x-2">
     <Checkbox id="terms" />
     <label
       htmlFor="Contains"
       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
     >
       Contains
       
     </label>
   </div>
   <div className="flex items-center space-x-2">
     <Checkbox id="terms" />
     <label
       htmlFor="Questionmark"
       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
     >
       Question mark
       
     </label>
   </div>
       </div>
          </div>
            <div className="text-center mt-20">
          <Button typeof="submit" className="button-default bg-primary min-w-[300px]">Save</Button>
            </div>
    </form>
    </section>
    </Layout>
  )
}
