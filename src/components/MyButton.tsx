import React from 'react';
import Link from 'next/link';
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
}

export default function MyButton({ children, href }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className='mybutton'>
        <div>{children}</div>
      </Link>
    );
  }
  
  return <button >{children}</button>;
}

