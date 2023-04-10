import Spinner from '../components/Spinner';

const Loading = () => {
  return (
    <div>
      <h1 className="text-xl md:text-3xl text-center font-bold py-10">
        Wird geladen...
      </h1>
      <Spinner />
    </div>
  );
};

export default Loading;
