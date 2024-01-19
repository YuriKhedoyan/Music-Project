const config = {
  mongodb: {
    url: "mongodb://localhost:27017",
    databaseName: "music",
    options: {
      useUnifiedTopology: true,
    }
  },

  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: 'commonjs',
};

export default config;
