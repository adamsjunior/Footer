import React from 'react'

const Item = ({ links, title}) => {
  return (
    <ul>
      <h1 className='mb-1 font-semibold'>{title} </h1>
      {links.map((Link) => (
            <li key={Link.name}>
                <a className='text-black  hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6' href={Link.link}>{Link.name}</a>
            </li>
        ))}
    </ul>
  )
}

export default Item
