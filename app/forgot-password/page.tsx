import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Layout from "../layout"

export default function IndexPage() {
  return (
    <Layout  showNavbar={false} showSideBar={false}>
    <section className=" relative flex min-h-screen justify-center items-center flex-col bg-auth-pattern">
    <div className="flex flex-col max-w-[520px] min-w-[520px] gap-8 bg-background px-14 py-10">
     <div className="text-center w-full">
       <img src="../logo.svg" alt="logo" className="mx-auto" />
     </div>
     <div className="flex flex-col gap-3">
     <h3>Forgot password</h3>
     <p>Enter your email and instructions will sent to you!</p>
     </div>
     <form>
     <div className="flex flex-col gap-8">

       <div className="groups">

<Label htmlFor="email">
       Email address
     </Label>
     <Input
       id="email"
       placeholder="Enter email address"
       type="email"
       autoCapitalize="none"
       autoComplete="email"
       autoCorrect="off"
     />
 </div>
   <Button typeof="submit" className="button-default bg-primary mt-3">Submit</Button>
     </div>
     </form>
     


     </div>
   </section>
    </Layout>
  )
}
