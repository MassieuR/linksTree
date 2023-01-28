import React from 'react'

const LinkList = ( {title, link} ) => {
    
  return (
    <section className="personal">
            <h2>{title}</h2>
            <ul className='links'>
                {link.map(link => (
                    <li class="icon-wrapper"><img class="icon" src={link.src} alt="discord-icon"/><a href={link.href}><span>{link.name}</span></a></li>
                ))}
            </ul>
        </section>
  )
}

export default LinkList
