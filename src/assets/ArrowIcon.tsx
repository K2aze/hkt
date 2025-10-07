import type { SVGProps } from "react"
const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none" {...props}
    viewBox="0 0 24 10"
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      d="M23 7H1v-.18h21.494l-5.43-4.708.225-.112L23 7Z"
    />
  </svg>
)
export default ArrowIcon
