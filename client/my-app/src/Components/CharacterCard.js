import React from 'react'
import { Card, Avatar } from 'antd'
import gryffindor from '../images/gryffindor.png'
import ravenclaw from '../images/ravenclaw.jpg'
import slytherin from '../images/slytherin.jpg'
import hufflepuff from '../images/hufflepuff.webp'
import hogwarts from '../images/logo.png'

const { Meta } = Card

//então, aqui temos o nosso componente de cards que vamos usar para renderizar cada personagem na página
// como podem ver ele recebe 4 propriedades apenas


export default function CharacterCard({name,image,house,loading}) {

    // func para selecionar a imagem do card ded acordo com a casa em hogwarts
    const setHouseCover = house => {
        switch (house) {
            case 'Gryffindor':
                return gryffindor
            case 'Ravenclaw':
                return ravenclaw
            case "Slytherin":
                return slytherin
            case 'Hufflepuff':
                return hufflepuff
            default:
                return hogwarts
        }
    }

    return (
        <Card
        hoverable
        loading={loading}
        style={{ width: 300, marginTop: 20 }}
        cover={
          <img
            alt="example"
            src={setHouseCover(house)}
          />
        }
      >
        <Meta
          avatar={<Avatar src={image} />}
          title={name}
          //aqui eu especifico que se o personagem não tem casa ele é apenas de hogwarts
          description={house ? house : "Hogwarts"}
        />
      </Card>
    )
}

