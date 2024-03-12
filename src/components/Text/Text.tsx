import './text.css'
import {ReactNode} from "react";

interface TextProps {
    type: 'title' | 'body' | 'price';
    children: ReactNode
}

function Text({ type = 'body', children = "Lorem Ipsum", ...props }:TextProps) {
    return <div className={`text--${type}`}
              {...props}>
                {children}
            </div>
}

export default Text