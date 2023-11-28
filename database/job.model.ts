import { Document, Schema, Types, model, models } from 'mongoose';

// Interface for Job document
interface IJob extends Document {
  title: string;
  description: string;
  company: string;
  location: string;
  salary: number;
  requirements: string[];
  posted_by: Schema.Types.ObjectId; // Reference to User schema
  posted_date: Date;
  // Other job-specific fields
}

// Create a Mongoose schema
const JobSchema: Schema<IJob> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  requirements: [{ type: String }],
  posted_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  posted_date: { type: Date, default: Date.now, required: true },
  // Other job-specific fields
});

const Job = models.Job || model<IJob>('Job', JobSchema);
export default Job;
