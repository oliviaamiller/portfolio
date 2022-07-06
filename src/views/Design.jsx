import styles from './Design.css';
import rabbit from '../assets/rabbits4.png';
import penguin from '../assets/penguins.jpeg';
import hands from '../assets/hands3.jpg';

export default function Design() {
  return (
    <>
      <section className={styles.designContainer}>
        <div>
          <img src={rabbit} alt="rabbits playing instruments and dancing" />
        </div>
        <div>
          <img src={penguin} alt="penguins playing in the snow" />
        </div>
        <div>
          <img src={hands} alt="hands forming shadow puppets" />
        </div>
        <div>img 4</div>
      </section>
    </>
  );
}
