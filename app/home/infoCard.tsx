import React from "react"

import { Button } from "@/components/ui/button"

const InfoCard: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-center p-5">
      <div className="block">
        <div className="flex flex-row gap-4">
          <div className="flex-none">
            <img src="../images/profile.png" alt="profile" />
          </div>
          <div className="flex-auto">
            <div className="flex items-center justify-between">
              <div className="block">
                <h4>Michael Howe</h4>
                <p className="text-gray-500">Reddit</p>
              </div>
              <div className="block">
                <p className="text-sm text-secondary">
                  1:30 pm, 18th jan - 2020
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p>
                Hey Redditors, I'm looking to tune up my inbound marketing for
                Lintly and thought I'd start with I'd like to learn from makers
                how they started their for their products during the initial
                phases of their business.
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-5 items-center">
              <Button typeof="button" size="sm" className=" h-7  bg-secondary ">
                Reply
              </Button>

              <Button
                size="sm"
                className="text-secondary px-0 underline"
                variant="link"
              >
                {" "}
                Add to Leads
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
