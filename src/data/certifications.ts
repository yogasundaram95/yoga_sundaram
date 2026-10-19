export type Certification = {
  name: string;
  issuer: string;
  date: string;
  status: "Completed" | "In Progress";
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
    issuer: "Microsoft",
    date: "Dec 2025",
    status: "Completed",
    credentialUrl: "https://learn.microsoft.com/en-us/users/ramaswamyyogasundaram-5466/credentials/certification/fabric-data-engineer-associate?tab=credentials-tab",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google (Coursera)",
    date: "Oct 2024",
    status: "Completed",
  },
  {
    name: "Oracle Cloud Data Management Certified Foundations Associate",
    issuer: "Oracle",
    date: "Nov 2023",
    status: "Completed",
  },
];
