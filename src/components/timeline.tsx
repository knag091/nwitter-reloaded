import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../routes/firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";

export interface ITweet {
  id: string;
  photo: string;
  tweet: string;
  userId: string;
  username: string;
  createdAt: number;
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function TimeLine() {
  const [tweets, setTweet] = useState<ITweet[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fatchTweets = async () => {
      const tweetsQuery = query(
        collection(db, "tweets"),
        orderBy("createdAt", "desc"),
        limit(25)
      );
      // const spanshot = await getDocs(tweetsQuery);
      // const tweets = spanshot.docs.map((doc) => {
      //   const { tweet, createdAt, userId, username, photo } = doc.data();
      //   return {
      //     tweet,
      //     createdAt,
      //     userId,
      //     username,
      //     photo,
      //     id: doc.id,
      //   };
      // });
      // console.log(tweets)

      unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          const { tweet, createdAt, userId, username, photo } = doc.data();
          return {
            tweet,
            createdAt,
            userId,
            username,
            photo,
            id: doc.id,
          };
        });
        setTweet(tweets);
      });
    };
    fatchTweets();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);
  return (
    <Wrapper>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}
