import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

const connectDB = (url: string) => {
  return mongoose.connect(url).then(() => console.log('Connected to the DB'));
};

export { connectDB };
