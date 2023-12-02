import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import Layout from "./layout"

export default function IndexPage() {
  return (
    <Layout showNavbar={true} showSideBar={true}>
      <section className=" main-container relative flex  flex-col items-center justify-center">
        <div className="mx-auto grid max-w-lg gap-6 py-20 text-center">
          <div className="mx-auto text-center">
            <img src="../empty-icon.svg" alt="empty icon" />
          </div>
          <div className="grid gap-3">
            <h3>Lorem Ipsum is simply dummy text</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </p>
          </div>
          <div className="block">
            <Button asChild className="button-default bg-primary no-underline">
              <Link href="/add-project">Create keyword alerts</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
