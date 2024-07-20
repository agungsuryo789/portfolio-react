import "./home.css";

const Home = () => {
  return (
    <>
      <section>
        <div>
          <h3 className="text-3xl terminal__icon font-bold my-6">hi.</h3>
          <p className="terminal__icon text-lg">
            I'm
            <pre className="text-sm lg:text-base xl:text-lg">{`
▄▀█ █▀▀ █░█ █▄░█ █▀▀   █▀ █░█ █▀█ █▄█ █▀█   █▀ █░█ █▄░█ █▀▄ █▀█ █▀█ █▀█
█▀█ █▄█ █▄█ █░▀█ █▄█   ▄█ █▄█ █▀▄ ░█░ █▄█   ▄█ █▄█ █░▀█ █▄▀ █▄█ █▀▄ █▄█`}</pre>
          </p>
		  <p className="terminal__icon my-2">i like to code fun stuff.</p>
        </div>
        <div>
          <h3 className="terminal__icon text-3xl border-b-2 border-gray-500 border-solid my-6">
            whoami?
          </h3>
          <p className="terminal__icon text-lg">
            I'm a skilled front-end developer weaving magic with HTML, CSS, and
            JavaScript to create visually captivating interfaces. With a
            burgeoning interest in the full-stack landscape.
          </p>
          <p className="text-lg">
            I’ve had the privilege of working at an Hotel software company, and
            a software house company.
          </p>
          <p className="text-lg">
            Currently i work as Front End Developer at{" "}
            <a
              className="font-semibold text-xl"
              href="https://codr.id"
              target="_blank"
            >
              CODR
            </a>{" "}
            and focusing on deepening my knowledge for Fullstack development.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
