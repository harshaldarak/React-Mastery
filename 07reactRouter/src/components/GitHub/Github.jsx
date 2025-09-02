import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/harshaldarak")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
      Github Followers : {data.following}
      <img
        src={data.avatar_url}
        alt={data.login}
        className='rounded-full w-24 h-24 mx-auto'
      />
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const res = await fetch("https://api.github.com/users/harshaldarak");
  console.log(res);
  return res.json();
};
