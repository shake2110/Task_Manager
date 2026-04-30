const config: any = {
  max: +(process.env.DB_MAX_CLIENTS || "20"),
  idleTimeoutMillis: 30000,
};

if (process.env.DATABASE_URL) {
  config.connectionString = process.env.DATABASE_URL;
} else {
  config.user = process.env.DB_USER;
  config.password = process.env.DB_PASSWORD;
  config.database = process.env.DB_NAME;
  config.host = process.env.DB_HOST;
  config.port = +(process.env.DB_PORT || "5432");
}

export default config;
