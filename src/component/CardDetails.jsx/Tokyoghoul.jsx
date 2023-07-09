import React from 'react'
import "./CardDetails.css";
import { motion } from "framer-motion";

const Tokyoghoul = () => {
  return (
    <div className="NarutoCard">
    <div className="Narutocontent">
      <motion.h1
        style={{ color: "white" }}
        initial={{ x: -600 }}
        animate={{ x: [0, 600, 0] }}
        transition={{ duration: 3, delay: 0.2 }}
      >
        Tokyoghoul
      </motion.h1>

      <img
        className="Narutoimg"
        src="https://images8.alphacoders.com/545/thumbbig-545909.webp"
        alt="Naruto-img"
        srcset=""
      />


      <div className="narutoDescription">
      Story: Tokyo Ghoul follows the story of Ken Kaneki, a college student who becomes a half-ghoul after a close encounter with a ghoul named Rize Kamishiro. Ghouls are human-like beings that survive by consuming human flesh. As Ken struggles to adapt to his new existence, he finds himself caught between the human and ghoul worlds, facing the challenges and conflicts that arise.

Themes: The series explores themes of identity, morality, discrimination, and the blurred lines between good and evil. It delves into the struggles faced by both ghouls and humans, as well as the personal journey of Ken Kaneki as he grapples with his dual nature.

Characters: Tokyo Ghoul features a diverse cast of characters, each with their own unique backgrounds, motivations, and conflicts. Ken Kaneki serves as the protagonist, and his transformation from a shy student to a conflicted half-ghoul drives the narrative. Other notable characters include Touka Kirishima, a ghoul with a complicated past, and Investigator Koutarou Amon, who works for the Commission of Counter Ghoul (CCG) to exterminate ghouls.

Dark Atmosphere: Tokyo Ghoul has a dark and gritty atmosphere, reflected in its intense and violent scenes. The series explores the psychological and emotional struggles of its characters, creating a sense of tension and suspense throughout.

Anime Adaptations: The Tokyo Ghoul anime consists of several seasons. The first season adapts the initial storyline of the manga, while the second season, Tokyo Ghoul √A (Root A), takes a different path from the source material. The third season, Tokyo Ghoul:re, follows the sequel manga series and introduces new characters and conflicts.

Action and Horror: Tokyo Ghoul combines action-packed sequences with elements of horror. The battles between ghouls and investigators are intense and visually striking, showcasing the unique abilities and powers of the characters.

Soundtrack: The anime features a captivating soundtrack that complements the dark and emotional atmosphere. The opening and ending theme songs are often praised for their memorable melodies and lyrics.

Manga Adaptation: If you enjoy the anime, you may want to explore the original Tokyo Ghoul manga by Sui Ishida. The manga provides additional details and a deeper exploration of the story and characters.
      </div>



<div className="howtowatch">

<h3> Here's a guide on how to watch the Tokyo Ghoul anime:</h3>

Understand the Tokyo Ghoul series: Tokyo Ghoul is a dark fantasy manga and anime series created by Sui Ishida. It takes place in a world where ghouls, supernatural beings that feed on human flesh, exist in secret alongside humans. The story follows Ken Kaneki, a college student who becomes a half-ghoul after a fateful encounter.

Determine your preferred viewing method: Tokyo Ghoul can be watched through various platforms, including streaming services, DVD sets, or online sources. Choose the method that works best for you based on availability and convenience.

Start with Tokyo Ghoul (Season 1): Begin by watching the first season of Tokyo Ghoul, which consists of 12 episodes. This season introduces the main characters, the world of ghouls, and follows Ken Kaneki's transformation into a half-ghoul. It sets the stage for the story's dark themes and conflicts.

Continue with Tokyo Ghoul √A (Season 2): After completing the first season, move on to Tokyo Ghoul √A, also known as Tokyo Ghoul Root A. This season diverges from the original manga storyline and offers an alternate take on the events. It consists of 12 episodes and continues the narrative from the first season, exploring the conflicts between ghouls and humans.

Conclude with Tokyo Ghoul:re (Season 3): The third season, titled Tokyo Ghoul:re, adapts the sequel manga series. It is set two years after the events of Tokyo Ghoul √A and follows a new protagonist, Haise Sasaki. Tokyo Ghoul:re consists of two parts: Tokyo Ghoul:re Part 1 and Tokyo Ghoul:re Part 2, with a total of 24 episodes. It delves deeper into the complex relationships between ghouls and introduces new threats and mysteries.

Fillers and OVAs: Tokyo Ghoul does not have a significant number of filler episodes, but there are a few original video animations (OVAs) that provide additional content. These OVAs include "Tokyo Ghoul: Jack" and "Tokyo Ghoul: Pinto." While not essential to the main story, they offer further insights into certain characters and events.

Engage with the fandom: Tokyo Ghoul has a dedicated fanbase. Connect with other fans by joining online communities, participating in discussions, and exploring fan theories. This can enrich your viewing experience and provide a platform to share your thoughts on the series.

Remember, Tokyo Ghoul is known for its dark themes, violence, and mature content. Be prepared for intense and emotional moments throughout the series. Enjoy the gripping and thought-provoking world of Tokyo Ghoul!
</div>
    </div>
  </div>
  )
}

export default Tokyoghoul