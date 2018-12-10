import { Schema } from 'mongoose';

const mainDobjectSchema = Schema({
    timeStamp: String
});

const eventSchema = Schema({
    eventTime: String
});

const fellingSchema = Schema({
    feelingName: String
});

const actionSchema = Schema({
    actiongName: String
});

export const definitions = {
    mainDobjectSchema,
    eventSchema,
    fellingSchema,
    actionSchema
};