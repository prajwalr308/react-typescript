import React,{useState,useRef} from 'react'

interface Props{
    text:string;
    ok?:boolean;
    red?:string;
    handleChange?:(event: React.ChangeEvent<HTMLInputElement>)=> void
}

export const TextField:React.FC<Props> = ({handleChange}) => {
    const [count, setcount] = useState<number | null | undefined>(5);
    const inputRef= useRef<HTMLInputElement>(null);

    setcount(null)
    return (
        <div>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}
