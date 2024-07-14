import './style.scss';
import { Analytics } from '../../libs/GoogleAnalytics';
export interface CardProps {
  img: string;
  url: string;
  name: string;
  desc?: string;
}

const Card = ({ img, url, name, desc }: CardProps) => {
  const sendCardViewStartEvent = (projectName: string) => {
    Analytics.sendProjectViewStartEventToGA(
      projectName.toLowerCase().replaceAll(' ', '_'),
    );
  };

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
        <a
          onClick={() => sendCardViewStartEvent(name)}
          rel="noreferrer"
          className={'btn primary'}
          href={url}
          target="_blank"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default Card;
