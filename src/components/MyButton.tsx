import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
}

export default function MyButton({ children, href }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className='mybutton'>
        <div>{children}</div>
      </a>
    );
  }
  
  return <button >{children}</button>;
}

