export default function GeneratedContent({
  loading,
  content,
}: {
  loading: boolean;
  content: string;
}) {
  return (
    <div className="flex flex-col gap-4 w-52">
      {loading ? (
        <>
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>{" "}
        </>
      ) : (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit minima
          illum accusantium consequuntur doloribus veritatis, rerum deleniti magni, non
          facere earum obcaecati velit ipsa aperiam. Assumenda rerum fugit ullam.
        </p>
      )}
    </div>
  );
}
