export default function Home() {
  return (
    <main>
      {/* loop p 100 times */}

      {Array.from({ length: 100 }, (_, i) => {
        return (
          <p key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Quia, voluptatum. Quia, voluptatum. Quia, voluptatum.
            Quia, voluptatum. Quia, voluptatum. Quia, voluptatum. Quia,
            voluptatum. Quia, voluptatum. Quia, voluptatum. Quia, voluptatum.
            Quia, voluptatum. Quia, voluptatum. Quia, voluptatum. Quia,
            voluptatum. Quia, voluptatum. Quia, voluptatum. Quia, voluptatum.
            Quia, voluptatum. Quia, voluptatum. Quia, voluptatum. Quia,
            voluptatum. Quia, voluptatum. Quia, voluptatum. Quia, voluptatum.
            Quia, voluptatum. Quia, voluptatum.
          </p>
        );
      })}
    </main>
  );
}
