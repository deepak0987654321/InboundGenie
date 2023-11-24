
import React from 'react';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import Layout from "../layout"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function IndexPage() {

  return (
    <Layout showNavbar={true} showSideBar={true}>
    <section className=" main-container relative flex py-10 flex-col">
      <form className="flex flex-col gap-10 ">
        <div className='flex flex-col gap-10 max-w-6xl'>
      <h3>Edit Project Details</h3>
      </div>
      <Separator orientation="horizontal" className="border"/>
      <div className='flex flex-col gap-14 max-w-6xl'>
                                       

                                                <div className="edit-group">
                                                  <div className="flex-none min-w-[120px] ">
                                                  <Label htmlFor="name">
     Project name
           </Label>
                                                  </div>
                                                  <div className="flex justify-end gap-10 w-full">
                                                    <div className="md:flex-auto">
                                                        <div className="grid gap-8">
                                                        <Input
             id="prname"
             placeholder="Facebook"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />
                                                        </div>
                                                    </div>
                                                    <div className="flex-none items-end flex">
                                             
                                                        <Button typeof="submit" className="bg-primary min-w-[180px]">Save</Button>
                                                    </div>
                                                    </div>

                                                </div>
                                                <div className="edit-group">
                                                  <div className="flex-none min-w-[120px] ">
                                                  <Label htmlFor="name">
     Add source
           </Label>
                                                  </div>
                                                  <div className="flex justify-end gap-10 w-full">
                                                    <div className="md:flex-auto">
                                                        <div className="grid gap-8">
                                                        <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select source" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Source 1">Source 1</SelectItem>
    <SelectItem value="Source 2">Source 2</SelectItem>
    <SelectItem value="Source 3">Source 3</SelectItem>
  </SelectContent>
</Select>
<Input
             id="url"
             placeholder="Enter source URl  and click add"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />
                                                        </div>
                                                    </div>
                                                    <div className="flex-none items-end flex">
                                             
                                                        <Button typeof="submit" className="bg-primary min-w-[180px]">Add</Button>
                                                    </div>
                                                    </div>
                                                </div>


                                                <div className="edit-group">
                                                  <div className="flex-none min-w-[120px] ">
                                                  <Label htmlFor="name">
     Add source
           </Label>
                                                  </div>
                                                  <div className="flex justify-end gap-10 w-full">
                                                    <div className="md:flex-auto">
                                                        <div className="grid gap-8">

<Input
             id="name"
             placeholder="Enter your project name"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />
           <Input
             id="name"
             placeholder="Enter your project name"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />
                                                        </div>
                                                    </div>
                                                    <div className="flex-none items-end flex">
                                             
                                                        <Button typeof="submit" className="bg-primary min-w-[180px]">Edit</Button>
                                                    </div>
                                                    </div>
                                                </div>

                                                <div className="edit-group">
                                                  <div className="flex-none min-w-[120px] ">
                                                  <Label htmlFor="name">
     Add source
           </Label>
                                                  </div>
                                                  <div className="flex justify-end gap-10 w-full">
                                                    <div className="md:flex-auto">
                                                        <div className="grid gap-8">

<Input
             id="name"
             placeholder="Enter your project name"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />
           <Input
             id="name"
             placeholder="Enter your project name"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />
                                                        </div>
                                                    </div>
                                                    <div className="flex-none items-end flex">
                                             
                                                        <Button typeof="submit" className="bg-primary min-w-[180px]">Edit</Button>
                                                    </div>
                                                    </div>
                                                </div>
                                         
                                        
                                                <div className="edit-group">
                                                  <div className="flex-none min-w-[120px] ">
                                                  <Label htmlFor="name">
     Add keyboard
           </Label>
                                                  </div>
                                                  <div className="flex justify-end gap-10 w-full">
                                                    <div className="md:flex-auto">
                                                        <div className="grid gap-8">
                                                        <Input
             id="name"
             placeholder="Keyword"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />
                
                                                        <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select source" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Source 1">Source 1</SelectItem>
    <SelectItem value="Source 2">Source 2</SelectItem>
    <SelectItem value="Source 3">Source 3</SelectItem>
  </SelectContent>
</Select>
                                        </div>
                                                    </div>
                                                    <div className="flex-none items-end flex">
                                             
                                                        <Button typeof="submit" className="bg-primary min-w-[180px]">Add</Button>
                                                    </div>
                                                    </div>
                                                </div>

                                                <div className="edit-group">
                                                  <div className="flex-none min-w-[120px] ">
                                                  <Label htmlFor="name">
                                                  Added keywords
           </Label>
                                                  </div>
                                                  <div className="flex justify-end gap-10 w-full">
                                                    <div className="md:flex-auto">
                                                        <div className="grid grid-cols-2 gap-8">
                                                        <Input
             id="name"
             placeholder="Facebook"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />
                                                                   <Input
             id="name"
             placeholder="SEO"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />

                                                                                  <Input
             id="name"
             placeholder="Instagram"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />

                                                                                  <Input
             id="name"
             placeholder="SEO Tools"
             type="text"
             autoComplete="name"
             autoCorrect="off"
           />
                

                                        </div>
                                                    </div>
                                                    <div className="flex-none items-end flex">
                                             
                                                        <Button typeof="submit" className="bg-primary min-w-[180px]">Save</Button>
                                                    </div>
                                                    </div>
                                                </div>

                                            </div>  
 
    

    
            <div className="text-center mt-20">
          <Button typeof="submit" className="bg-primary min-w-[300px]">Save</Button>
            </div>
    </form>
    </section>
    </Layout>
  )
}
