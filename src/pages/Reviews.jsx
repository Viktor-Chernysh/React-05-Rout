import { useMyContext } from 'context/context';

export default function Reviews() {
  const value = useMyContext();
  console.log(value?.reviews.results);
  return (
    <div>
      {value &&
        value.reviews.results.map(el => (
          <div key={el.id}>
            {el.author_details.avatar_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${el.author_details.avatar_path}`}
                alt=""
                width={80}
              />
            ) : (
              <p>
                <b>no image</b>
              </p>
            )}
            {el.author}
          </div>
        ))}
    </div>
  );
}
