import app from '../services/firebase';
import { CHAT_CHANNEL_ID } from '../constants/config';

const database = app.database();
const ref = database.ref(`/messages/${CHAT_CHANNEL_ID}`);

export default ref.orderByChild('createdAt').limitToLast(1).startAt(Date.now());
