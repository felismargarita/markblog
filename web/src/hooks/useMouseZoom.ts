import React,{useEffect,useState,useCallback} from 'react'

const useMouseZoom =  ()=>{

  const [value,setValue] = useState<number>(0)

  const changeValue = useCallback((v:WheelEvent)=>{
    if(v.deltaY>0){
      setValue(value=>value-1)
    }else{
      setValue(value=>value+1)
    }
  },[])

  const start = useCallback(()=>{
    document.addEventListener('wheel',changeValue,false)
  },[])

  const release = useCallback(()=>{
    document.removeEventListener('wheel',changeValue,false)
    setValue(0)
  },[])


  return {value,start,release}

}

export default useMouseZoom