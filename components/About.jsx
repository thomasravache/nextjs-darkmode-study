import React from 'react';
import Image from 'next/image';
import minhaFoto from '../public/foto-perfil-thomas.jpg';
import styles from './tailwindStyles/aboutStyles';

const About = () => {
  return (
    <div className={ styles.aboutContainer }>
      <div className={ styles.aboutContentContainer }>
        <div className={ styles.aboutPersonalInfo }>
          <h1 className={ styles.aboutHeading }>
            Hey There,
          </h1>
          <div className={ styles.aboutTextContainer }>
            <p className="mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid provident hic repudiandae reiciendis pariatur magni qui labore minima, in eveniet atque facere consequatur illo corporis delectus veritatis nulla obcaecati repellat!
            </p>
          </div>
        </div>
        <div className={ styles.aboutImageContainer }>
          <Image
            src={ minhaFoto }
            alt="Profile"
            priority={ true }
            className={ styles.aboutImage }
            width={ 250 }
            height={ 250 }
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
};

export default About;
