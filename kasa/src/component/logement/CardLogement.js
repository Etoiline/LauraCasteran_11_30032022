import '../../styles/desktop/CardLogement.css'
import '../../styles/mobile/CardLogement.mobi.css'
import React from 'react'
import RateLogement from './RateLogement'
import Collapse from '../Collapse'
import Slider from '../slider/Slider'



function CardLogement (props) {
  //console.log('equipement',props.logement.equipments)
  const name = props.logement.host.name.split(' ')
  const equipments = props.logement.equipments.join('\n')
  if(props.logement.pictures.length===1){
    console.log('juste 1 image')
    console.log(props.logement.pictures)
  }
  const ShowSlide = () => {
    if (props.logement.pictures.length===1){
      console.log(props.logement.pictures)
      return <img className='cardLogement__img' src={props.logement.pictures} alt='intérieur logement' />
    }
    else {
      return <Slider images={props.logement.pictures} />
    }
  }
  
  return (
    <div className='cardLogement'>
      <ShowSlide />
    <section className='presentation'>
      <div className='presentation_logement'>
        <h1>{props.logement.title}</h1>
        <p>{props.logement.location}</p>
        <div className='tags'>
        {
          props.logement.tags.map((tag,index) => (
            <p key={index} className='tag'>{tag}</p>
          ))
        }
      </div>
      </div>
      <div className='presentation_proprietaire'>
        <div className='presentation_proprietaire_identite'>
          <div className='proprietaire_name'>
            {name.map((elt, index) => (
              <p key={index}>{elt}</p>
            ))}
          </div>
        <img src={props.logement.host.picture} alt='prorpiétaire' />
        </div>
        <RateLogement rate={props.logement.rating}/>
      </div>
    </section>
    <section className='cardLogement_collapse'>
      <Collapse elt={['Description', props.logement.description]}/>
      <Collapse elt={['Équipements', equipments]}/>
    </section> 

    </div>
  )
}

export default CardLogement