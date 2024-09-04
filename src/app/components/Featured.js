import React from 'react';
import styles from './Featured.module.scss';

const Featured = () => {
  return (
    <section className={styles.featured}>
      <div>Title</div>
      <div>
        <h2>title 2</h2>
        <p>
          Exerpt Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Veritatis nemo ad eos ipsa nihil soluta atque architecto assumenda
          nostrum, illo, voluptatem facilis, non error qui. Neque cum debitis
          minima quidem.
        </p>
      </div>
      <div className={styles.actionButtons}>
        <button>Assistir</button>
        <button>Mais informações</button>
      </div>
    </section>
  );
};

export default Featured;
