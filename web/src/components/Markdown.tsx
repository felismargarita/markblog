import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

const Code:React.FC<any> = ({node, inline, className, children, ...props})=>{
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
  ) : (
    <code className={className} {...props} />
  )
}

const Markdown:React.FC<{children:string}> = ({children})=>{

  return (
    <ReactMarkdown components={{code:Code}} children={children}/>
  )
}

export default Markdown