export default function Page({ params }) {
  const { id } = params;
  return (
    <>
      <h1>Hello world {id}</h1>
    </>
  );
}
