import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepages } from "../../store/homepages/actions";
import Homepage from "../../components/Homepage";
import { selectHomepages } from "../../store/homepages/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const homepages = useSelector(selectHomepages);

  useEffect(() => {
    dispatch(fetchHomepages());
  }, [dispatch]);

  return (
    <div>
      <h1>Homepages</h1>
      {homepages.map((homepage) => {
        return (
          <Homepage
            key={homepage.id}
            id={homepage.id}
            title={homepage.title}
            description={homepage.description}
            backgroundColor={homepage.backgroundColor}
            color={homepage.color}
            showLink={true}
          />
        );
      })}
    </div>
  );
}
