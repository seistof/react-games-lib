import React, {useEffect, useState} from 'react';
import uuid from 'uuid/dist/v4'
import style from './info.module.css';
import './style.css';

const displayNone = {
  display: 'none',
  height: '35vh',
  zIndex: '2',
};

const displayBlock = {
  display: 'block',
  height: '35vh',
  zIndex: '2',
};

function Info({match}) {
  const [game, setGame] = useState([]);
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.rawg.io/api/games/${match.params.id}`);
      const data = await response.json();
      setGame(data);
      console.log(data);
    };
    getData();
  }, [match.params.id]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.rawg.io/api/games/${match.params.id}/screenshots`);
      const data = await response.json();
      setScreenshots(data.results);
    };
    getData();
  }, [match.params.id]);

  let imageIndex = -1;
  const handleNextOnClick = () => {
    console.log('Next();');
    console.log(`ImageIndex: ${imageIndex}`);

    const images = document.querySelectorAll('.frame img');
    if (imageIndex === images.length - 1) {
      imageIndex = 0;
    } else {
      imageIndex++;
    }
    images.forEach((image, index) => {
      if (index === imageIndex) {
        console.log(`Index: ${index}`);
        console.log(`?${index === imageIndex}`);
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  };
  const handlePrevOnClick = () => {
    const frame = document.querySelector('.frame');
    const images = frame.querySelectorAll('img');
    if (imageIndex === 0) {
      imageIndex = images.length - 1;
    } else {
      imageIndex--;
    }
    images.forEach((image, index) => {
      if (index === imageIndex) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  };

  return (
    <div className={style.info}>
      <div className={style.top}>
        <div className={style.topLeft}>
          <p className={style.title}>{game.name}</p>
        </div>
        <div className={style.topRight}>
          <div className={style.screenshots}>
            <button className={style.prev} onClick={handlePrevOnClick}>{'<'}</button>
            <div className={'frame'}>
              {screenshots.map((screenshot, index) => (
                <img
                  key={uuid()}
                  style={index === 1 ? displayBlock : displayNone}
                  src={screenshot.image}
                  alt="screenshot"
                />
              ))}
            </div>
            <button className={style.next} onClick={handleNextOnClick}>{'>'}</button>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <p className={style.description}>{game.description_raw}</p>
        {/*<div className={style.botLeft}>bottom left</div>*/}
        {/*<div className={style.botRight}>bottom right</div>*/}
      </div>


      <img className={style.background} src={game.background_image} alt=""/>
    </div>
  );
}

export default Info;