

const Post = () => {
  return (
    <div>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2023/10/Devialet-Gemini-II-4.jpg?w=940&h=465&crop=1"
            alt="img"
          />
        </div>
        <div className="texts">
          <h2>
            Devialet’s Gemini II are the most luxurious wireless earbuds you can
            get
          </h2>
          <p className="info">
            <a className="author">Romain Dillet</a>
            <time>2023-10-12 1:55PM</time>
          </p>
          <p>
            Devialet’s isn’t like any other tech company — its products are at
            the intersection of audio engineering and luxury. That’s why its new
            wireless earbuds with active noise cancellation don’t look like
            other earbuds.
              
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
