import React, { useState, useEffect } from "react";
import useSWR from "swr";

const PostsPage = () => {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(15);
  const [cards, setCards] = useState([]);

  const fetcherFunction = () =>
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => data);

  const { data, error } = useSWR(["/fetch-photos", start, limit], fetcherFunction);

  const filterCards = (val) => {
    const filteredCards = data.filter((item) => item.title.includes(val));
    console.log(filteredCards);
    setCards(filteredCards)
  }

  useEffect(() => {
    if (data && data.length > 0) {
      setCards(data);
    }
  }, [data])

  return (
    <div className="mainWrapper">
      <h1 className="pageTitle">Posts Page Rendered</h1>
      <input type="text" onChange={(val) => filterCards(val.target.value)} />
      <select onChange={(val) => setStart(val.target.value)}>
        <option disabled selected>Set start of pages</option>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>25</option>
        <option>50</option>
        <option>75</option>
      </select>
      <select onChange={(val) => setLimit(val.target.value)}>
        <option disabled selected>Limit number of pages</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
        <option>150</option>
      </select>
      <div className="postsWrapper">
        {data && cards.map((image) => {
          return (
            <div key={image.id} className="post">
              <img src={image.url} alt={image.title} width="310" height="310" />
              <p>{image.title}</p>
            </div>
          );
        })}
      </div>

      <ul className="pagination">
        <li>
          <button type="button" onClick={() => setStart(15)}>Page 1</button>
        </li>
        <li>
          <button type="button" onClick={() => setStart(30)}>Page 2</button>
        </li>
        <li>
          <button type="button" onClick={() => setStart(45)}>Page 3</button>
        </li>
        <li>
          <button type="button" onClick={() => setStart(60)}>Page 4</button>
        </li>
      </ul>
    </div>
  );
};
export default PostsPage;
