import { h, Component } from 'preact'
import { Card } from 'preact-material-components/dist';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';

const cardStyle = {
  card: {
    width: 300
  },
  cardMediaItem: {
    height: 200
  },
  cardBottom: {
    padding: 10
  },
  cardBottomNote: {
    fontSize: 12,
    fontFamily: '微軟正黑體',
    marginTop: 5
  },
  cardBottomItem: {
    marginTop: 5,
    fontSize: 12
  }
}

const CardComponent = ({
  Name,
  ImageName,
  Variety,
  Sex,
  IsSterilization,
  Note,
  Phone,
  Email
}) => {
  const animalName = (Name === '') ? '尚未取名' : Name,
        genderIcon = (Sex === '雄') ? <i className='fa fa-mars'></i> : <i className='fa fa-venus'></i>,
        phoneIcon = <i className='fa fa-phone'></i>,
        emailIcon = <i className='fa fa-envelope-o'></i>
  return (
    <div>
      <Card style={ cardStyle.card }>
				<Card.Primary>
					<Card.Title>{ Variety } - { animalName }</Card.Title>
				</Card.Primary>
        <Card.MediaItem style={ cardStyle.cardMediaItem } src={ ImageName } />
        <div style={ cardStyle.cardBottom }>
          <div style={ cardStyle.cardBottomItem }>{ genderIcon } {IsSterilization}</div>
          <div style={ cardStyle.cardBottomItem }>{ phoneIcon } <a href={`tel:${Phone}`}>{ Phone }</a></div>
          <div style={ cardStyle.cardBottomItem }>{ emailIcon } <a href={`mailto:${Email}`}>{ Email }</a></div>
          <div style={ cardStyle.cardBottomNote }>{ Note }</div>
        </div>
			</Card>
    </div>
  )
}

export default CardComponent
