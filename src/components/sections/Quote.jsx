import { quote } from "../../data";

function Quote() {
  const { text, author } = quote;

  if (!text) return null;

  return (
    <section id="quote" className="section quote">
      <blockquote className="quote__text">"{text}"</blockquote>
      {author && <cite className="quote__author">— {author}</cite>}
    </section>
  );
}

export default Quote;
