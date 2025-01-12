import React from "react";
import { fetchPostById } from "../api/api";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

const PostDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post",id],
    queryFn: () => fetchPostById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error {error.message || "Something went wrong."} </p>;

  return (
    <div className="home">
      <h1>Post {id}</h1>
      <div className="post">
        <h2>{data?.title}</h2>
        <p>{data?.body}</p>
        <Link to={"/"}>Go back</Link>
      </div>
    </div>
  );
};

export default PostDetails;
