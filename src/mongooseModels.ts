import mongoose = require('mongoose');
import { definitions } from './definition/Definitions';

const mainDobject = mongoose.model('Dobjects', definitions.mainDobjectSchema);
const eventDobject = mainDobject.discriminator('Events', definitions.eventSchema);
const feelingDobject = mainDobject.discriminator('Fell', definitions.fellingSchema);
const actionDobject = mainDobject.discriminator('Action', definitions.actionSchema);


export const mongooseModels  = {
    eventDobject,
    feelingDobject,
    actionDobject
};