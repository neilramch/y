"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


const MovieDetails = ({ params }) => {
  const searchParams = useSearchParams();

  const movieName = searchParams.get("name");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`movies/${params?.name}`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.name) fetchPosts();
  }, [params.name]);

  return (
   <>
    <div className="user-profile-container text-center mt-20">
      <h1 className="user-profile-text text-black text-4xl">
        {movieName}'s Profile
      </h1>
    </div>
   </>
  );
};

export default MovieDetails;