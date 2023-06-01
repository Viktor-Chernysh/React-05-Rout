import { useMyContext } from 'context/context';

export default function Cast() {
  const {
    credits: { cast },
  } = useMyContext();
  console.log(cast);
  return (
    <div>
      {cast &&
        cast.map(el => (
          <div key={el.credit_id}>
            {el.profile_path ? (
              <img
                src={'https://image.tmdb.org/t/p/original/' + el.profile_path}
                alt=""
                width={140}
              />
            ) : (
              <span>
                <b>no image</b>
              </span>
            )}
            <p>{el.name}</p>
          </div>
        ))}
    </div>
  );
}
