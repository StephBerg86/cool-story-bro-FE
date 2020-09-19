import React from "react";

export default function Stories(props) {
  return (
    <div>
      {props.homepage.stories.map((story) => {
        return (
          <div
            key={story.id}
            className="stories"
            style={{
              backgroundColor: `${props.homepage.backgroundColor}99`,
              color: props.homepage.color,
            }}
          >
            <h3>{story.name}</h3>
            {story.imageUrl ? (
              <img
                className="storyImages"
                src={story.imageUrl}
                alt={story.name}
              />
            ) : null}
            <div className="storyContent">{story.content}</div>
          </div>
        );
      })}
    </div>
  );
}
