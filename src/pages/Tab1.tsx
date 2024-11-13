import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useEffect, useState } from 'react';
import './Tab1.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Tab1: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?limit=5')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 5)));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {posts.map(post => (
            <IonItem key={post.id}>
              <IonLabel>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
