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
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          }
        />
      </div>
    </main>
  );
}
