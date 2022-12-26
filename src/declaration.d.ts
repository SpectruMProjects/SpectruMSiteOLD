declare module '*.module.scss'
declare module '*.module.css'
declare module '*.svg'
declare module '*.jpg' {
  const path: string
  export default path
}

declare module '*.png' {
  const path: string
  export default path
}
declare module '*.webp' {
  const path: string
  export default path
}
