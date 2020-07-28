import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import Homepage from "../../components/Homepage";
import Stories from "../../components/Stories";

export default function MyPage() {
  const { token, homepage, id } = useSelector(selectUser);
  console.log("token, id, homepage?", token, id, homepage);
  const [editMode, setEditMode] = useState(false);
  const [postStoryMode, setpostStoryMode] = useState(false);

  const displayButtons =
    id === homepage.userId && editMode === false && postStoryMode === false;

  return (
    <div>
      hi this is my page
      <Homepage
        id={homepage.id}
        title={homepage.title}
        description={homepage.description}
        backgroundColor={homepage.backgroundColor}
        color={homepage.color}
        showLink={false}
      />
      <div>
        {displayButtons ? (
          <div>
            <button onClick={() => setEditMode(true)}>Edit my page</button>
            <button onClick={() => setpostStoryMode(true)} className="mt-2">
              Post a cool story bro
            </button>
          </div>
        ) : null}

        {editMode ? <p>My homepage form / edit page</p> : null}

        {postStoryMode ? <p>my story form/ post story</p> : null}

        <Stories homepage={homepage} />
      </div>
    </div>
  );
}