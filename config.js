window.CITADEL_CONFIG = {
  // --- General Site Settings ---
  general: {
    siteName: "Citadel Hosting",
    tagline: "Your Minecraft World. Without Limits.",
    currencySymbol: "$",
    defaultBillingCycle: "monthly"
  },

  // --- Server Locations ---
  locations: [
    { id: "us-east", name: "US", flag: "", status: "Coming Soon" }
  ],

  // --- Hosting Plans ---
  plans: [
    {
      name: 'Small Server',
      blurb: 'Vanilla servers and small groups of friends.',
      m: 600,
      a: 6000,
      ram: 6,
      cpu: '2 dedicated threads',
      disk: 30,
      backups: 'Daily, 3 retained',
      support: 'Standard',
      types: ['Forge', 'NeoForge', 'Fabric', 'Modpacks', 'paper'],
    },
    {
      name: 'Medium Server',
      blurb: 'Modded servers with moderate resource needs.',
      m: 1400,
      a: 14000,
      ram: 10,
      cpu: '4 dedicated threads',
      disk: 60,
      backups: 'Daily, 7 retained',
      support: 'Express',
      types: ['Forge', 'NeoForge', 'Fabric', 'Modpacks', 'paper'],
      feat: true
    },
    {
      name: 'Large Server',
      blurb: 'Demanding modpacks and bigger communities.',
      m: 2800,
      a: 28000,
      ram: 18,
      cpu: '6 dedicated threads',
      disk: 120,
      backups: 'Daily, 14 retained',
      support: 'Priority',
      types: ['Forge', 'NeoForge', 'Fabric', 'Modpacks', 'paper'],
    },
    {
      name: 'Network Hosting',
      blurb: 'Several connected servers and proxy networks.',
      m: 5000,
      a: 55000,
      ram: 34,
      cpu: '10 dedicated threads',
      disk: 250,
      backups: 'Daily, 14 retained',
      support: 'Supreme',
      types: ['Any server type'],
    }
  ],

  // --- Frequently Asked Questions ---
  faqs: [
    ['What is Minecraft server hosting?', 'A hosted Minecraft server runs on our hardware instead of your own computer, so your world stays online for your friends or community without leaving your PC on.'],
    ['Which Minecraft versions are supported?', 'Citadel is built to support current and older releases across Vanilla, Paper, Fabric, Forge and NeoForge. The exact supported list will be published before launch and shown during ordering.'],
    ['Can I upload my own modpack?', 'Yes, that is part of the plan: install from supported catalogs or upload a custom pack through the file manager. Catalog installs follow each platform\'s terms.'],
    ['Can I install custom plugins?', 'On plugin-capable software such as Paper, you will be able to upload and manage plugins yourself from the panel.'],
    ['Can I change my server plan?', 'You will be able to upgrade or downgrade from the billing area. Downgrades are limited to plans that fit your current disk usage.'],
    ['Are automatic backups available?', 'Scheduled backups are included on every plan, with retention depending on the plan. A backup is also taken before any modpack update.'],
    ['Can I cancel anytime?', 'Monthly plans can be cancelled from the billing area. Final cancellation and refund terms will be published in the Terms of Service before launch.'],
    ['How does server migration work?', 'Upload your existing world and files through the file manager, or contact support and a human will help you move over. Migration tooling will be documented before launch.'],
    ['How can I contact support?', 'Through our email, support@citadelhosting.org | Or through our community discord']
  ]
};