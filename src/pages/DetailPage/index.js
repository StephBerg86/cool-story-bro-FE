import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Homepage from "../../components/Homepage";
import { fetchHomepageById } from "../../store/detailpage/actions";
import { selectHomepageDetails } from "../../store/detailpage/selectors";
import Stories from "../../components/Stories";

export default function DetailPage() {
  const { id } = useParams();
  const homepage = useSelector(selectHomepageDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello");
    dispatch(fetchHomepageById(id));
  }, [dispatch, id]);

  console.log("homepages", homepage);

  return (
    <>
      <div className="detailHP">
        <Homepage
          id={homepage.id}
          title={homepage.title}
          description={homepage.description}
          backgroundColor={homepage.backgroundColor}
          color={homepage.color}
          showLink={false}
        />
      </div>
      <div className="story">
        <Stories homepage={homepage} />
      </div>
    </>
  );
}
