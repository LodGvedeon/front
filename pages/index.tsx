import { Button, Switch } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
// import { Player } from '../types/main'


export interface Player {
  name: string
  score: number
  imgSrc: string
}


const players: Player[] = [ 
  {name: 'Георгий Крымский', score: 10, imgSrc: 'https://wojakparadise.net/wojak/1091/img'},
  {name: 'Александр Горпинчук', score: 20, imgSrc: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Wojak.png/200px-Wojak.png'},
  {name: 'Дмитрий колесников', score: 30, imgSrc: 'https://wojakparadise.net/wojak/59/img'},
  {name: 'Евгений Дровосеков', score: 40, imgSrc: 'https://wojakparadise.net/wojak/53/img'},
  {name: 'Егор Шапарев', score: 50, imgSrc: 'https://wojakparadise.net/wojak/8266/img'}
]

// counter = 15
//


const Main: NextPage = () => {

const [counter, setCounter] = useState(0)

const [Loading, setLoading] = useState(false)
const [isShowAll, setIsShowAll] = useState(false)

const incrementCounter = () => {
  console.log('increment starting')
  setCounter(counter+1)
  console.log(`counter is`, counter)
}

const toggleLoad = () => {
  setLoading(!Loading)
}

interface IPlayerCardProps {
  currentPlayer: Player
}
const PlayerCard = ({
 currentPlayer 
}: IPlayerCardProps) => {
  if(currentPlayer.score <= counter || isShowAll) {
    return (
      <div className='max-w-xs bg-white rounded-lg py-3 px-5 hover:bg-green-200 hover:rounded-3xl duration-500'>
            <img src={currentPlayer.imgSrc} className="w-60 h-60 object-contain" />
            <strong className='font-serif font-bold text-center'>{ currentPlayer.name }</strong>
      </div>
    )
  } else {
    return (<></>)
  }
}

return (
  <div className="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 static ">
    <Head>
      <title>Main page</title>
    </Head>
    <div className="text-yellow-300 mb-8 flex justify-center  ">
      Шкала мощи { counter }
    </div >
    <div className={'flex justify-center resize'}>
      <Button className={'mb-8'} 
      isLoading={Loading}
      onClick={incrementCounter}>
        +1 мощи
      </Button>
    </div>
    <div className={'flex justify-center'}>  
      <Button className={'mb-8'}
      onClick={toggleLoad}>
        Остановите эту машину
      </Button>
    </div>
    <div className="">  
      <div>Показать всех игроков</div>
      <Switch 
        onChange={() => setIsShowAll(!isShowAll)}
      />
    </div>
    <div className="flex gap-4 justify-center">
      {players.map(currentPlayer =>
        <PlayerCard 
          key={currentPlayer.name}
          currentPlayer={currentPlayer}
        />
      )}
    </div>
    <div>
      <img className='absolute bottom-0 h-52 w-screen ' src='https://navigamer.ru/uploads/posts/2020-02/1581940727_raid.jpg' />
    </div>
  </div>
)

/*
'DOta 2 godd game'
*/

}

export default Main