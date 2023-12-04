import ShowMore from "../ui/ShowMore";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold">🎄React Holiday</h1>
      <div>
        <h3 className="mb-4 mt-8 text-lg font-semibold">Day 01: Show More</h3>

        <ShowMore
          maxChar={12}
          content={
            "On the first day, the task was to create a simple version of a show more component. So here we go"
          }
        />
      </div>
    </main>
  );
}
