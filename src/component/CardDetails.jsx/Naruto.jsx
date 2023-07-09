import React from "react";
import "./CardDetails.css";
import { motion } from "framer-motion";

const Naruto = () => {
  return (
    <>
      <div className="NarutoCard">
        <div className="Narutocontent">
          <motion.h1
            style={{ color: "white" }}
            initial={{ x: -600 }}
            animate={{ x: [0, 600, 0] }}
            transition={{ duration: 3, delay: 0.2 }}
          >
            Naruto
          </motion.h1>

          <img
            className="Narutoimg"
            src="https://c4.wallpaperflare.com/wallpaper/738/62/544/naruto-chidori-naruto-naruto-uzumaki-rasengan-naruto-sasuke-uchiha-hd-wallpaper-preview.jpg"
            alt="Naruto-img"
            srcset=""
          />


          <div className="narutoDescription">
            Naruto" is a popular anime series that captivated audiences around
            the world. Created by Masashi Kishimoto, it tells the story of
            Naruto Uzumaki, a young ninja from the Hidden Leaf Village who
            dreams of becoming the strongest ninja and the village's Hokage, the
            leader and protector of his people. The series is set in a fictional
            world where ninjas coexist with various supernatural elements.
            Naruto, initially an outcast due to the presence of a powerful demon
            fox sealed within him, faces numerous challenges throughout his
            journey. His indomitable spirit, unwavering determination, and
            never-give-up attitude inspire those around him. The narrative
            explores themes of friendship, loyalty, and the pursuit of one's
            dreams. Naruto forms strong bonds with his teammates and friends,
            Sasuke Uchiha and Sakura Haruno, as they train together under the
            guidance of their sensei, Kakashi Hatake. The trio goes on missions,
            battles dangerous enemies, and gradually uncovers dark secrets about
            their village's history. As the story progresses, Naruto discovers
            his lineage as a descendant of the prestigious Uzumaki clan and the
            child of the Fourth Hokage. He also learns about the existence of a
            dangerous organization called Akatsuki, whose members seek to
            capture powerful creatures called Tailed Beasts, including the one
            sealed within Naruto. Throughout the series, Naruto undergoes
            intense training and masters various powerful techniques, including
            the iconic Rasengan and his signature move, the Shadow Clone Jutsu.
            He also taps into the powers of the Nine-Tailed Fox, known as
            Kurama, to protect his friends and village from formidable threats.
            "Naruto" showcases an expansive cast of characters, each with their
            unique backgrounds and abilities. From Naruto's mentors like Jiraiya
            and the wise Third Hokage, to his rivals like Sasuke and his brother
            Itachi, to his friends and fellow villagers, each character adds
            depth and complexity to the story. The anime successfully blends
            thrilling action sequences with heartfelt moments of camaraderie and
            self-discovery. It has garnered a massive fan base worldwide,
            inspiring spin-offs, movies, video games, and even a sequel series,
            "Naruto: Shippuden," which continues the story with Naruto and his
            friends as young adults. In conclusion, "Naruto" is a captivating
            anime that takes viewers on a journey filled with adventure,
            friendship, and self-belief. Naruto Uzumaki's quest to become the
            strongest ninja and protect his loved ones resonates with audiences,
            making it a timeless and beloved series in the world of anime.
          </div>



<div className="howtowatch">

<h3>Here's a guide on how to watch Naruto:</h3>

1. Understand the Naruto series: Naruto is a popular anime and manga series created by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja with a dream to become the Hokage, the leader of his village. The series is divided into two main parts: Naruto (part one) and Naruto Shippuden (part two).

2. Choose your preferred viewing method: Naruto can be watched through various platforms, including streaming services, DVD sets, or online sources. Decide which method suits you best based on availability and convenience.

3. Start with Naruto (part one): Begin by watching Naruto, which consists of 220 episodes. It introduces the characters and lays the foundation for the story. You can follow Naruto's journey from his early days as a mischievous young ninja to his growth as he faces various challenges.

4. Transition to Naruto Shippuden (part two): After completing Naruto, move on to Naruto Shippuden. This is the continuation of the story, taking place two and a half years after the events of Naruto. Naruto Shippuden follows Naruto and his friends as they face even greater threats and confront their own pasts. Naruto Shippuden has a total of 500 episodes.

5. Fillers: Naruto series includes a number of filler episodes, which are episodes not based on the original manga storyline. While some fillers can be enjoyable, others may not contribute much to the main plot. If you prefer to skip the fillers and focus on the main story, you can find online guides that list which episodes are fillers. This allows you to maintain a smoother viewing experience.

6. Movies and spin-offs: Alongside the main series, there are also Naruto movies and spin-off series such as "Boruto: Naruto Next Generations." The movies provide additional stories and adventures featuring the characters from the Naruto universe. You can watch these after completing Naruto Shippuden.

7. Engage with the fandom: Naruto has a passionate and dedicated fanbase. Join online communities, such as forums or social media groups, to discuss the series, share theories, and connect with other fans. This can enhance your overall Naruto experience.

Remember, watching Naruto is a personal journey, and you can adjust the viewing experience to suit your preferences. Enjoy the exciting world of Naruto and immerse yourself in the epic ninja saga!
</div>
        </div>
      </div>
    </>
  );
};

export default Naruto;
