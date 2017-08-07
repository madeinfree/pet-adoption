import { h, Component } from 'preact'
import { axiosGet } from '../../util/axios-get'
import withState from '../Recompose/withState.react'
import handlerDidMount from '../Recompose/handlerDidMount.react'

import Card from '../Card/card.react'

const contentStyle = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingTop: 20
  }
}

const enhance = withState('pets-data', 'updatePetsData', [])
const enhanceDidMount = handlerDidMount((props) => {
  axiosGet('/api/v1/pet.json')
    .then(response => {
      if (response.status === 200) {
        const data = response.data.result.results
        props.updatePetsData(state => {
          return data
        })
      }
    })
})

const Content = enhance(enhanceDidMount((props) => {
  const petsData = props['pets-data']
  return (
    <div style={contentStyle.wrapper}>
      {
        petsData.map(pet => {
          return (
            <div style={{ marginBottom: 10 }}>
              <Card
                Name={ pet.Name }
                ImageName={ pet.ImageName }
                Variety={ pet.Variety }
                Gender={ pet.Sex }
                Reason={ pet.Reason }
                Note={ pet.Note }
                Phone={ pet.Phone }
                Email={ pet.Email }
                IsSterilization={ pet.IsSterilization }
              />
            </div>
          )
        })
      }
    </div>
  )
}))

export default Content
