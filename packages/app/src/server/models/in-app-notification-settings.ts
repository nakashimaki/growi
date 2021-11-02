import { Schema, Model, Document } from 'mongoose';
import { getOrCreateModel } from '../util/mongoose-utils';

import { IInAppNotificationSettings } from '../../interfaces/in-app-notification-settings';

export interface InAppNotificationSettingsDocument extends IInAppNotificationSettings, Document {}
export type InAppNotificationSettingsModel = Model<InAppNotificationSettingsDocument>

enum subscribeRules {
  PAGE_CREATE = 'PAGE_CREATE'
}

const inAppNotificationSettingsSchema = new Schema<IInAppNotificationSettings>({
  userId: { type: String },
  defaultSubscribeRules: [
    {
      name: { type: String, require: true, enum: subscribeRules },
      isEnabled: { type: Boolean },
    },
  ],
});

// eslint-disable-next-line max-len
export default getOrCreateModel<InAppNotificationSettingsDocument, InAppNotificationSettingsModel>('InAppNotificationSettings', inAppNotificationSettingsSchema);
