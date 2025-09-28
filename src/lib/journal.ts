import matter from 'gray-matter';

export interface JournalPost {
  slug: string;
  title: string;
  date: string;
  lastUpdated: string;
  tags: string[];
  readTime: string;
  status: 'published' | 'draft' | 'archived';
  content: string;
  excerpt?: string;
}

export interface JournalFrontmatter {
  title: string;
  slug: string;
  date: string;
  lastUpdated: string;
  tags: string[];
  readTime: string;
  status: 'published' | 'draft' | 'archived';
}

// Simulated journal posts data (in real implementation, this would be loaded from MDX files)
const journalPostsData: JournalPost[] = [
  {
    slug: "tryhackme-advanced-labs",
    title: "TryHackMe Advanced Labs: What I Learned",
    date: "2024-12-15",
    lastUpdated: "2024-12-15",
    tags: ["cybersecurity", "penetration-testing", "labs", "learning"],
    readTime: "6 min",
    status: "published",
    content: "Completing advanced network penetration labs focusing on privilege escalation techniques has been transformative for my understanding of real-world security.",
    excerpt: "Hands-on penetration testing labs that transformed my understanding of real-world security challenges."
  },
  {
    slug: "cybersecurity-as-philosophy",
    title: "Why I See Cybersecurity as Philosophy",
    date: "2024-12-10",
    lastUpdated: "2024-12-10",
    tags: ["philosophy", "cybersecurity", "reflection"],
    readTime: "5 min",
    status: "published",
    content: "Cybersecurity isn't only about firewalls and exploits—it's about how we think about trust, power, and systems.",
    excerpt: "Exploring the intersection of trust, power, and human behavior in security systems."
  },
  {
    slug: "linux-troubleshooting-lessons",
    title: "Fixing Lubuntu Taught Me More Than Just Linux",
    date: "2024-11-25",
    lastUpdated: "2024-11-25",
    tags: ["linux", "troubleshooting", "learning"],
    readTime: "4 min",
    status: "published",
    content: "While troubleshooting GRUB errors and dependency conflicts, I learned not just commands, but patience.",
    excerpt: "How a broken bootloader became a masterclass in systematic problem-solving and resilience."
  }
];

export const getAllJournalPosts = (): JournalPost[] => {
  return journalPostsData
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getLatestJournalPosts = (count: number = 3): JournalPost[] => {
  return getAllJournalPosts().slice(0, count);
};

export const getJournalPostBySlug = (slug: string): JournalPost | undefined => {
  return journalPostsData.find(post => post.slug === slug && post.status === 'published');
};

export const getJournalPostsByTag = (tag: string): JournalPost[] => {
  return getAllJournalPosts().filter(post => 
    post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  );
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  journalPostsData.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};