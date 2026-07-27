import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletterSection">
      <div className="newsletterContainer">
        <div className="newsletterText">
          <span className="newsletterLabel">Stay Updated</span>
          <h2>Join the Trivenistitch circle.</h2>
          <p>
            Be the first to know about new collections, festive edits, and
            exclusive launches.
          </p>
        </div>

        <form className="newsletterForm">
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
