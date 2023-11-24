
import React from 'react';

import  VisaCard  from "./visacard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
// import AddIcon from '@material-ui/icons/Add';
import { Checkbox } from "@/components/ui/checkbox"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import TableList from './table';
  import Layout from "../layout"


export default function IndexPage() {

  return (
    <Layout showNavbar={true} showSideBar={true}>
    <section className=" main-container relative flex py-10 flex-col">
      <form className="flex flex-col gap-10 ">
        <div className='flex flex-col gap-6 max-w-6xl'>
      <h3>Personal information</h3>
      </div>
      <Separator orientation="horizontal" className="border"/>

        <div className="grid grid-cols-2 gap-10 max-w-6xl">
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
        <div >
          <Button typeof="submit" className="button-default bg-primary min-w-[180px]">Save</Button>
            </div>
      <Separator orientation="horizontal" className="border"/>
      <div className="grid gap-6 max-w-6xl">
        <div className="grid gap-3">
      <h4>Billing settings</h4>
      <p>Payment plan and total</p>
        </div>
      <div className='grid grid-cols-2 gap-10'>
        <div className="block">
            <div className='p-5 border-b flex justify-between'>
                <h5>ITEMS</h5>
                <h5>SUBTOTAL</h5>

            </div>
            <div className='p-5 border-b flex justify-between'>
                <h5>Xxxx Plan</h5>
                <h5>$199</h5>

            </div>
            <div className='p-5 border-b flex justify-between'>

                <h5>TOTAL AMOUNT: <span className='pl-5'>$199</span></h5>

            </div>
        </div>
        <div className='block'/>
        </div> 
      </div>
       
       <Separator orientation="horizontal" className="border"/>
       <div className="grid gap-6 max-w-6xl">
        <div className="grid gap-3">
      <h4>Payment methods</h4>
        </div>
      <div className='grid grid-cols-2 gap-10'>
        <VisaCard />
        <VisaCard />
        </div> 
        <div className=" mt-4">
          <Button typeof="submit" className="bg-primary"> <img src="../images/add.png" alt="add" className='pr-4'/>Add new card</Button>
            </div>
      </div>
       <Separator orientation="horizontal" className="border"/>
       <div className="grid gap-6 ">
        <div className="grid gap-3">
      <h4>Invoices</h4>
        </div>
    <TableList/>
      </div>
    </form>
    </section>
    </Layout>
  )
}
