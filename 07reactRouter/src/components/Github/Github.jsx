// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://github.com/users/zeeshanchana95")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="GitHub Picture" width={300} />
    </div>
  );
}

export default Github;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://github.com/users/zeeshanchana95");

  return response.json();
};
