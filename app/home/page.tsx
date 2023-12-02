import * as React from "react"

import Layout from "../layout"
import Card from "./card"
import InfoCard from "./infoCard"

export default function IndexPage() {
  return (
    <Layout showNavbar={true} showSideBar={true}>
      <section className=" main-container grid items-center gap-10 pb-8 md:pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Card title={"Sources"} onAddText={"Add sources"} />
          <Card title={"Keywords"} onAddText={"Add keywords"} />
        </div>
        <div className="grid gap-6">
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </section>
    </Layout>
  )
}
