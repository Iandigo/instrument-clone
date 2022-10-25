import React from "react";
import styles from "./Home.module.css";
import ReactPlayer from "react-player/youtube";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.media}>
        <ReactPlayer
          width="90%"
          height="900px"
          url="https://www.youtube.com/watch?v=hlWiI4xVXKY"
        />
      </div>
      <div className={styles.achivements}>
        <div className={styles.title}>
          <h1>
            We enrich human lives through the thoughtful application of desgin
            and technology
          </h1>
        </div>

        <div className={styles.news}>
          <img className={styles.newsimg} src="/assets/woman.jpg" alt="woman" />
          <div className={styles.textfield}>
            <h3>
              It is with great excitement that we announce Kara Place as
              Instrument’s next CEO.
            </h3>
            <button className={styles.button}>Read More</button>
          </div>
        </div>

        <div className={styles.news}>
          <div className={`${styles.textfield} ${styles.left}`}>
            <h3>
              We're proud be be recognized as a Best Workplace for Women
              Innovators by Fast Company.
            </h3>
            <button className={styles.button}>Learn More</button>
          </div>
          <img
            className={styles.newsimg}
            src="/assets/workplace.jpg"
            alt="workplace"
          />
        </div>

        <div className={styles.news}>
          <img className={styles.newsimg} src="/assets/phone.jpg" alt="phone" />
          <div className={styles.textfield}>
            <h3>
              As a full-service partner to the world's most ambitious companies,
              we create transformational change through best-in-class digital
              products and communications.
            </h3>
            <button className={styles.button}>What we do</button>
          </div>
        </div>
      </div>

      <div className={styles.works}>
        <div className={styles.title}>
          <h1>Explore a few of our most impactful projects</h1>
          <button className={styles.button}>Our work</button>
        </div>

        <div className={styles.content}>
          <div className={styles.workcontent}>
            <img
              className={styles.imgcover}
              src="/assets/institute.jpg"
              alt="institute"
            />
            <div className={styles.textcontent}>
              <h2>Eames Insitute</h2>
              <p>
                Ray and Charles Eames laid the foundation for modern design and
                created work that has transcended time. With an aspiration to
                bring the Eameses' timeless methodologies to a modern audience,
                the Eames Institute enlisted Instrument to co-create a digital
                platform to unveil their vast collection to the world.
              </p>
            </div>
          </div>
          <div className={` ${styles.leftside}`}>
            <img
              className={styles.imgcover}
              src="/assets/dropbox.jpg"
              alt="dropbox"
            />
            <div className={styles.textcontent}>
              <h2>Dropbox "For All Things Worth Saving"</h2>
              <p>
                To evolve and mature how Dropbox engages with their customers,
                we developed a multi-year brand platform as well as launched its
                first integrated campaign titled 'For All Things Worth
                Saving'—an ecosystem of branded experiences aimed to remind
                people of the inherent value of their digital files.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slider}></div>
      <div className={styles.contact}>
        <div className={styles.title}>
          <h1>We'd love to be your partner</h1>
          <button className={styles.button}>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
