
import React from 'react';
import { Button } from '@/components/ui/button';
import Layout from "./layout"

export default function IndexPage() {

  return (
    <Layout showNavbar={true} showSideBar={true}>
    <section className=" main-container relative flex  justify-center items-center flex-col">
       <div className="grid gap-6 text-center max-w-lg mx-auto py-20">
      <div className="text-center mx-auto">
        <img src="../empty-icon.svg" alt="" />
      </div>
      <div className="grid gap-3">
        <h3>Lorem Ipsum is simply dummy text</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500
        </p>
      </div>
      <div className="block">
        <Button typeof="submit" className="bg-primary button-default">Create keyword alerts</Button>
      </div>
    </div>
    </section>
    </Layout>
  )
}
