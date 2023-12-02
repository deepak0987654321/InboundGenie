import React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Navbar: React.FC = () => {
  return (
    <div className="main-container">
      <nav className="w-full bg-muted p-4 md:px-10 rounded-md">
        <div className="flex justify-between items-center">
          <h2>
            Welcome back,{" "}
            <span className="text-secondary !text-2xl">Garica</span>
          </h2>
          <>
            <Select>
              <SelectTrigger className="!w-[110px] border-none focus:border-none focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Settings" />
              </SelectTrigger>
              <SelectContent className="!w-[180px]">
                <SelectItem value="Source 1">Source 1</SelectItem>
                <SelectItem value="Source 2">Source 2</SelectItem>
                <SelectItem value="Source 3">Source 3</SelectItem>
              </SelectContent>
            </Select>
          </>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
