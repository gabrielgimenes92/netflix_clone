import Image from 'next/image';
import styles from './page.module.scss';
import Carrousel from './components/Carrousel';
import Featured from './components/Featured';
import { aShow, linusTechTipsSection } from '../../public/data/shows';

export default function Home() {
  let featured = aShow;

  let discoverNew = {
    title: 'Descubra suas próximas histórias',
    content: [
      {
        showTitle: 'Kaos',
        showBanner: '',
        showVideo: '',
        category: 'series',
        episodes: 8,
        tags: ['Excêntrico', 'Complexo', 'Humor ácido'],
      },
    ],
  };

  let section2 = linusTechTipsSection;

  return (
    <div>
      <main>
        <Featured data={featured} />
        {/* <Carrousel title={discoverNew.title} content={discoverNew.content} /> */}
        <Carrousel data={section2} />
      </main>
    </div>
  );
}
