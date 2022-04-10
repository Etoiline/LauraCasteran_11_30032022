import '../../styles/desktop/CardLogement.css'
import '../../styles/mobile/CardLogement.mobi.css'
import React from 'react'
import RateLogement from './RateLogement'



function CardLogement (props) {
  console.log(props.logement)
  const rating = props.logement.rating
  const name = props.logement.host.name.split(' ')
  console.log(name)
  return (
    <div>
      <img src={props.logement.pictures[0]} alt='logement' />
    <section className='presentation'>
      <div>
        <h1>{props.logement.title}</h1>
        <p>{props.logement.location}</p>
      </div>
      <div className='proprietaire'>
        <div className='proprietaire_name'>
          {name.map((elt, index) => (
            <p key={index}>{elt}</p>
          ))}
        </div>
        <img src={props.logement.host.picture} alt='prorpiétaire' />
      </div>
    </section>
    <section className= "tagRate">
      <div className='tags'>
        {
          props.logement.tags.map((tag,index) => (
            <p key={index} className='tag'>{tag}</p>
          ))
        }
      </div>
      <RateLogement rate={props.logement.rating}/>
    </section>
    <section>
      <p>{props.logement.description}</p>
      <div>
        {/* <ul>
          {
            props.logement.equipements.map((equipement) => (
              <li>{equipement}</li>
            ))
          }
        </ul> */}
      </div>
    </section> 

    </div>
  )
}

export default CardLogement