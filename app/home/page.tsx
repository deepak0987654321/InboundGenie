import * as React from "react"
import Card from './card';
import InfoCard from './infoCard';
import Layout from "../layout"


export default function IndexPage() {
  return (
<Layout showNavbar={true} showSideBar={true}>
    <section className=" main-container grid items-center gap-6 pb-8 pt-6 md:py-10">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Card />
      <Card />

    </div>
    <div className="grid gap-6 mt-10">
      <InfoCard/>
      <InfoCard/>
      <InfoCard/>

      </div>
    </section>
</Layout>
  )
}
