import { useId } from "react";

interface InputProps {
    type: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    bind?: {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
}

const Input = ({ type = "text", placeholder = "", className, onChange, value, bind }: InputProps) => {
    const id = useId();
    const inputProps = bind || { value, onChange };

    return (
        <div className="mb-[12px] last:mb-0">
            <label htmlFor={id} className="text-neutral-600 mb-[8px] block">{placeholder}</label>
            <input type={type} 
            {...inputProps}
            placeholder={placeholder} value={value} id={id} onChange={onChange} className={`${className} p-[8px_12px] rounded-[4px] border-neutral-200 w-100`} />
        </div>
    )
}

export default Input;