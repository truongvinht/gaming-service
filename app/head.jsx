
const Head = ({description = 'Gaming Service'}) => {
  return (
    <head>
      <title>Gaming</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </head>
  );
};

export default Head;