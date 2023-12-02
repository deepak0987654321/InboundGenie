import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import Layout from "../layout"

export default function IndexPage() {
  return (
    <Layout showNavbar={false} showSideBar={false}>
      <section className=" relative flex min-h-screen justify-center items-center flex-col bg-auth-pattern">
        <div className="flex flex-col max-w-[520px] min-w-[520px] gap-8 bg-background px-14 py-10">
          <div className="text-center w-full">
            <img src="../logo.svg" alt="logo" className="mx-auto" />
          </div>
          <div className="flex flex-col gap-3">
            <h2>Sign in</h2>
            <p>
              Don't have an account? <Link href="/signup">Sign up</Link>
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-8">
              <div className="groups">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter email address"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                />
              </div>
              <div className="groups">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter password"
                  type="password"
                  autoCapitalize="none"
                  autoCorrect="off"
                />
                <div className="text-right">
                  <Link href="/forgot-password">Forgot password</Link>
                </div>
              </div>

              {/* <Button  typeof="submit" className="button-default bg-primary mt-3">Sign in</Button> */}
              <Button asChild className="no-underline">
                <Link href="/">Sign in</Link>
              </Button>
            </div>
          </form>

          <div className="groups mt-3">
            <Separator orientation="horizontal" className="border" />
            <div className="flex items-center justify-center w-full">
              <p className="divider-text">Or</p>
            </div>
          </div>
          <Button variant="outline" className="border-primary button-default">
            {" "}
            <img src="/google.svg" alt="google icon" className="px-4" />{" "}
            Continue with Google
          </Button>
        </div>
      </section>
    </Layout>
  )
}
