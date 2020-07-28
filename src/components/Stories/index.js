import React from "react";

export default function Stories(props) {
  return (
    <div>
      {props.homepage.stories.map((story) => {
        return (
          <div key={story.id}>
            <h3>{story.name}</h3>
            {story.imageUrl ? (
              <img src={story.imageUrl} alt={story.name} />
            ) : null}
            <p
              style={{
                backgroundColor: `${props.homepage.backgroundColor}99`,
                color: props.homepage.color,
              }}
            >
              {story.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}
