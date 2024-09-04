import Image from 'next/image';
import styles from './page.module.scss';
import Carrousel from './components/Carrousel';
import Featured from './components/Featured';

export default function Home() {
  let featured = {
    showTitle: 'Kaos',
    showBanner: '',
    showVideo: '',
    category: 'series',
    episodes: 8,
    tags: ['Excêntrico', 'Complexo', 'Humor ácido'],
  };

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

  return (
    <div>
      <main>
        <Featured />
        <Carrousel title={discoverNew.title} content={discoverNew.content} />
      </main>
    </div>
  );
}
