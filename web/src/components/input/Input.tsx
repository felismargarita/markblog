import React from 'react'
import classnames from 'classnames'

interface InputProps {
  className?:string
  placeholder?:string
  type?:string
  inputStyle?:React.CSSProperties
  maxLength?:number
  value?:string
  onChange?:(value:string|undefined|null)=>void
  autoFocus?:boolean
  disabled?:boolean
}

const Input:React.FC<InputProps> = ({className,placeholder,type,inputStyle,maxLength,value,onChange,autoFocus,disabled})=>{
  const classes = classnames('login-input',className)
  return <div className={classes}>
    <input
    value={value}
    onInput={e=>{
      if(onChange){
        onChange(e.currentTarget.value)
      }
    }}
    autoFocus={autoFocus}
    maxLength={maxLength}
    placeholder={placeholder} 
    type={type} 
    disabled={disabled}
    style={inputStyle}/>
  </div>
}

export default Input