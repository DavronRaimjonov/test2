const UserDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${slug}`
  );
  const res = await data.json();

  return (
    <div>
      UserDetails {slug}
      <div>
        <pre>{JSON.stringify(res, null, 4)}</pre>
      </div>
    </div>
  );
};

export default UserDetails;
