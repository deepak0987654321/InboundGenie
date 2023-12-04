"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

import Layout from "../layout"

interface FormData {
  sources: string[]
  keywords: string[]
}

interface AddSourcesProps {
  onSubmit: (data: FormData) => void
}

export default function IndexPage() {
  const [formData, setFormData] = useState<FormData>({
    sources: [""],
    keywords: [""],
  })

  // Sources input field
  const handleSourceInputChange = (index: number, value: string) => {
    const newSources = [...formData.sources]
    newSources[index] = value
    setFormData({ ...formData, sources: newSources })
  }

  const handleAddSourceInput = () => {
    setFormData({ ...formData, sources: [...formData.sources, ""] })
  }

  const handleRemoveSourceInput = (index: number) => {
    if (formData.sources.length > 1) {
      const newSources = [...formData.sources]
      newSources.splice(index, 1)
      setFormData({ ...formData, sources: newSources })
    }
  }

  // keyword input field
  const handleKeywordInputChange = (index: number, value: string) => {
    const newKeywords = [...formData.keywords]
    newKeywords[index] = value
    setFormData({ ...formData, keywords: newKeywords })
  }

  const handleAddKeywordInput = () => {
    setFormData({ ...formData, keywords: [...formData.keywords, ""] })
  }

  const handleRemoveKeywordInput = (index: number) => {
    if (formData.keywords.length > 1) {
      const newKeywords = [...formData.keywords]
      newKeywords.splice(index, 1)
      setFormData({ ...formData, keywords: newKeywords })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }
  return (
    <Layout showNavbar={true} showSideBar={true}>
      <section className=" main-container relative flex py-10 flex-col">
        <form className="flex flex-col gap-10 " onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 max-w-6xl">
            <h3>Add Project Detailsddd</h3>
            <div className="groups">
              <Label htmlFor="name">Project name</Label>
              <Input
                id="name"
                placeholder="Enter your project name"
                type="text"
                autoComplete="name"
                autoCorrect="off"
              />
            </div>
          </div>
          <Separator orientation="horizontal" className="border" />
          <div className="flex flex-col gap-6 max-w-6xl">
            <div className="flex flex-row gap-10 items-top">
              <div className="flex-none flex flex-col gap-3 w-[280px]">
                <Label htmlFor="name">Add source</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Source 1">Source 1</SelectItem>
                    <SelectItem value="Source 2">Source 2</SelectItem>
                    <SelectItem value="Source 3">Source 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-auto flex-col gap-4 flex items-center mt-7">
                {formData.sources.map((input, index) => (
                  <div className="w-full" key={index}>
                    <Input
                      id="url"
                      placeholder="Enter source URl  and click add"
                      type="text"
                      autoComplete="url"
                      autoCorrect="off"
                      value={input}
                      onChange={(e) =>
                        handleSourceInputChange(index, e.target.value)
                      }
                    />
                    {index > 0 && (
                      <div className="text-right">
                        <Button
                          variant="link"
                          type="button"
                          className="text-secondary"
                          onClick={() => handleRemoveSourceInput(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <Button
                  typeof="button"
                  onClick={handleAddSourceInput}
                  className="bg-primary min-w-[180px]"
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" className="border" />
          <div className="flex flex-col gap-6 max-w-6xl">
            <div className="flex flex-row gap-10 items-end">
              <div className="flex-auto gap-4 flex items-center">
                <div className="groups w-full">
                  <Label htmlFor="name">Add Keyword</Label>
                  <>
                    {formData.keywords.map((input, index) => (
                      <>
                        <Input
                          id="addkey"
                          placeholder="Keywords"
                          type="text"
                          value={input}
                          onChange={(e) =>
                            handleKeywordInputChange(index, e.target.value)
                          }
                        />
                        <>
                          {index > 0 && (
                            <div className="text-right">
                              <Button
                                variant="link"
                                type="button"
                                className="text-secondary"
                                onClick={() => handleRemoveKeywordInput(index)}
                              >
                                Remove
                              </Button>
                            </div>
                          )}
                        </>
                      </>
                    ))}
                  </>
                </div>
              </div>
              <div className="flex-none">
                <div className="block">
                  <Button
                    typeof="button"
                    onClick={handleAddKeywordInput}
                    className="bg-primary min-w-[180px]"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="exact"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Exact match
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="Contains"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Contains
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="Questionmark"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Question mark
                </label>
              </div>
            </div>
          </div>
          <div className="text-center mt-20">
            <Button
              typeof="submit"
              className="button-default bg-primary min-w-[300px]"
            >
              Save
            </Button>
          </div>
        </form>
      </section>
    </Layout>
  )
}
