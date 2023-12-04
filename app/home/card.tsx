import React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface CardProps {
  title: string
  onAddText: string
  onAddButton?: () => void // Define the type for onAddSources prop
}

const Card: React.FC<CardProps> = ({ title, onAddText, onAddButton }) => {
  return (
    <div className="rounded-md bg-white p-5 shadow-center">
      <div className="flex items-center justify-between pb-7">
        <div className="text-lg font-semibold">{title}</div>
        <div className="flex gap-4">
          {/* <Button
            variant="link"
            className="h-2 px-0 text-secondary"
            onClick={onAddButton} // Attach the onClick event to the Button
          >
            {onAddText}
          </Button> */}
          <Button variant="link" className="h-2 px-0 text-secondary">
            Edit
          </Button>
        </div>
      </div>
      <div className="block">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="Facebook"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Facebook
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="Twitter"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Twitter
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="Instagram"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Instagram
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="seo"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Seo marketers forum
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
