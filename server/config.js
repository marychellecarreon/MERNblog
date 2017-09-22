const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://marychellecarreon:zfyTsnhOAppGTb6g@cluster0-shard-00-00-oz3tf.mongodb.net:27017,cluster0-shard-00-01-oz3tf.mongodb.net:27017,cluster0-shard-00-02-oz3tf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
  port: process.env.PORT || 8000,
};

export default config;
