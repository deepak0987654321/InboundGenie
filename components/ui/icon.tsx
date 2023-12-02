// MyIcon.js
import React from "react"
import Image from "next/image"

interface MyIconProps {
  localPath: string
  alt: string
}

const MyIcon: React.FC<MyIconProps> = ({ localPath, alt }) => (
  <Image src={localPath} alt={alt} width="25" height="25" />
)

export default MyIcon
