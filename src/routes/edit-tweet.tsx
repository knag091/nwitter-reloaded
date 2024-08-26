import styled from "styled-components";
import { auth, db } from "../routes/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ITweet } from "../components/timeline";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;
const Column = styled.div``;
const Photo = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-top: 30px;
`;
const Username = styled.div`
  font-weight: 600;
  font-size: 40px;
`;
const Payload = styled.textarea`
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  margin-top: 50px;
  font-size: 16px;
  color: white;
  background-color: black;
  width: 100%;
  resize: none;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`;
const EditButton = styled.button`
  background-color: green;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

export default function EditTweet() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isloading, setLoading] = useState(true);
  const [tweet, setTweet] = useState<ITweet | null>(null); // 초기값을 null로 설정
  const [editedTweet, setEditedTweet] = useState<string>(""); // 추가된 상태
  const user = auth.currentUser;

  useEffect(() => {
    if (!id) return;
    const tweetRef = doc(db, "tweets", id);

    try {
      const road = async () => {
        const docSnap = await getDoc(tweetRef);
        if (docSnap.exists()) {
          const data = docSnap.data() as ITweet;
          setTweet(data);
          setEditedTweet(data.tweet || "");
          setLoading(false);
        }
      };
      road();
    } catch (error) {}
  }, []);

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newTweet = e.target.value;
    setEditedTweet(newTweet);
  }
  const onclick = async () => {
    if (!id) return;
    const tweetRef = doc(db, "tweets", id);

    try {
      await updateDoc(tweetRef, { tweet: editedTweet });
      navigate("/");
    } catch (error) {}
  };

  return (
    <Wrapper>
      <Column>
        <Username>{user?.displayName}</Username>
        <EditButton onClick={onclick}>Edit</EditButton>

        {isloading ? (
          "Loading..."
        ) : (
          <>
            <Payload value={editedTweet} onChange={onChange}></Payload>
            {tweet?.photo ? <Photo src={tweet?.photo} /> : null}
          </>
        )}
      </Column>
    </Wrapper>
  );
}
