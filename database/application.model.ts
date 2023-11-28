import mongoose, { models, model, Schema } from 'mongoose';

// Define enum for application status
enum ApplicationStatus {
  APPLIED = 'applied',
  UNDER_REVIEW = 'under review',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

// Interface for Application document
interface IApplication extends Document {
  job_id: mongoose.Types.ObjectId;
  applicant_id: mongoose.Types.ObjectId;
  application_date: Date;
  status: ApplicationStatus;
  // Other application-specific fields
}

// Create a Mongoose schema
const ApplicationSchema: Schema<IApplication> = new Schema({
  job_id: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
  applicant_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  application_date: { type: Date, default: Date.now, required: true },
  status: {
    type: String,
    enum: Object.values(ApplicationStatus),
    required: true,
  },
  // Other application-specific fields
});

const Application =
  models.Application || model<IApplication>('Application', ApplicationSchema);
export default Application;
