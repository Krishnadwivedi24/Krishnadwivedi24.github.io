export interface LearningItem {
  number: string;
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  degree: string;
  headline: string;
  intro: string;
  about: {
    heading: string;
    paragraphs: string[];
  };
  learning: LearningItem[];
  currentFocus: {
    heading: string;
    text: string;
  };
  contact: {
    heading: string;
    text: string;
    email: string;
    github?: string;
    linkedin?: string;
  };
  footer: {
    credit: string;
  };
}

export const profile: Profile = {
  name: "Krishna Dwivedi",
  shortName: "Krishna",
  role: "B.Tech CSE (Artificial Intelligence) Student",
  degree: "B.Tech CSE (Artificial Intelligence)",
  headline: "Curious mind. Constant learning. Building what's next.",
  intro:
    "I'm a computer science student exploring programming, problem-solving, and the foundations of software development. I'm focused on learning the fundamentals, improving through practice, and gradually turning ideas into useful things.",
  about: {
    heading: "A little about me.",
    paragraphs: [
      "I'm Krishna, a B.Tech student specializing in Computer Science and Engineering (Artificial Intelligence). I'm developing my programming skills and building a strong foundation in computer science.",
      "I enjoy understanding how technology works, approaching problems logically, and learning concepts step by step. My goal is to grow into a capable software engineer through consistent practice and practical learning.",
    ],
  },
  learning: [
    {
      number: "01",
      title: "Programming",
      description:
        "Learning programming fundamentals, code structure, and writing readable code.",
    },
    {
      number: "02",
      title: "Problem Solving",
      description:
        "Improving logical reasoning and learning to break complex problems into smaller steps.",
    },
    {
      number: "03",
      title: "Computer Science",
      description:
        "Exploring data structures, algorithms, and core computer science concepts.",
    },
    {
      number: "04",
      title: "Artificial Intelligence",
      description:
        "Developing an understanding of AI fundamentals and the ideas behind intelligent systems.",
    },
  ],
  currentFocus: {
    heading: "One step at a time.",
    text: "Right now, I'm focused on strengthening my programming fundamentals, improving my problem-solving skills, and learning the concepts that form the foundation of good software engineering.",
  },
  contact: {
    heading: "Have something in mind?",
    text: "I'm open to connecting with fellow students, developers, and people who enjoy learning and building things.",
    email: "krishnadwivedi9935@gmail.com",
    github: "https://github.com/Krishnadwivedi24",
    linkedin: "https://www.linkedin.com/in/krishna-dwivedi-16b4a2381/",
  },
  footer: {
    credit: "Built with Next.js",
  },
};
