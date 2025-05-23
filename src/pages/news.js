export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  const post = await res.json();

  return {
    props: { post },
  };
}

export default function NewsPage({ post }) {
  return (
    <main>
      <h1>Статическая новость</h1>
      <p>{post.title}</p>
    </main>
  );
}
