import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { loadReviews } from "../../module/thunk/load-reviews";
import { selectIsReviewLoading } from "../../module/selectors";

export const ReviewsContainer = ({ reviewIds, restaurantId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(loadReviews(restaurantId));
  }, [restaurantId]);

  if (!isLoading) {
    return <span>Loading...</span>;
  }

  return <Reviews reviewIds={reviewIds} />;
};