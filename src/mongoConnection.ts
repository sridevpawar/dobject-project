import mongoose = require('mongoose');
import { dbName, key, cosmosPort} from '../env/environment';

const mongoUri = `mongodb://${dbName}:${key}@${dbName}.documents.azure.com:${cosmosPort}/${dbName}?ssl=true`;
function connect() {
  return mongoose.connect(mongoUri, { useNewUrlParser: true });
}

export const mongoConnection = {
  connect,
  mongoose
};
