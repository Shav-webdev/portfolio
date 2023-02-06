import './style.scss';
export interface CardProps {
  img: string;
  url: string;
  name: string;
  desc?: string;
}

const Card = ({ img, url, name, desc }: CardProps) => {
  return (
    <div className="card">
      <div
        className={'card-before'}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={'card-after'}></div>
      <div className={'card-content'}>
        <h2 className={'card-title'}>{name}</h2>
        <p className={'card-desc'}>{desc}</p>
        <a className={'btn primary'} href={url} target="_blank">
          View
        </a>
      </div>

      {/*<img src={img} className="card-img-top" alt={name} />*/}
      {/*<div className="card-body">*/}
      {/*  <h5 className="card-title dino-game-tr">{name}</h5>*/}
      {/*  <p className="card-text dino_js-tr">{desc}</p>*/}
      {/*</div>*/}
    </div>
  );
};

export default Card;
