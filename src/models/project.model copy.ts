import mongoose, { Schema, Document } from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId;

export interface IProject extends Document {
    idPrefix: string,
    idNumber: number,
    title: string,
    status: string,
    projectType: string,
    departmentChair: mongoose.Types.ObjectId,
    dateReceived: Date,
    dateCreated: Date,
    createdBy: mongoose.Types.ObjectId,
    pi: mongoose.Types.ObjectId,
    copis: [
        mongoose.Types.ObjectId
    ],
    roles:[
        {
            roleName: string,
            person: mongoose.Types.ObjectId
        }
    ],
    agentToxinInvolved: string[],
    fundingSouces: mongoose.Types.ObjectId[],
    experimentalEffects:[
        {
            type:string,
            explanation: string
        }
    ],
    keyPersonnel: [
         {
             person: mongoose.Types.ObjectId,
             duties: string,
             experience: string
         } 
    ],
    nonTechnicalSynopsis: string,
    transgenicAnimals:[
        {
            name: string,
            geneticallyAlteredDesc: string,
            procurementDesc: string,
            markingDesc: string
        }
    ],
    rdna:[
        {
            dnaSource:string,
            dnaNature:string,
            recipeintOrganism:string,
            vectorList:string,
            vectorMap:string
        }
    ],
    nihGuidelines:[
        String
    ],
    foreignGeneExpression: string,
    fieldRelease:[
        {
            usdaPermitID: string,
            file: string
        }
    ],
    infectiousAgent: [
        {
            name: string,
            humanHazard: string,
            animalHazard: string,
            plantHazard: string
        }
    ],
    cdcAgent: [
        {
            permitNumber: string,
            permitDocument: string
        }
    ],
    humanAffect: [
        {
            description: string,
            vaccineAvailable: boolean,
            selectAgentToxins: boolean
        }
    ],
    aphisPermit: [
        {
            permitID: string,
            permitDocument: string
        }
    ],
    proposedBiocontainmentLevel: string,
    decontaminationMethods: [
        {
            type: string,
            method: string
        }
    ],
    ppe: [String],
    ppeSpecialPrecautions: string,
    safetyEquipmentLocation: [
        {
            equipment: string,
            location: string,
            certificationDate: Date
        }
    ],
    animalInvolved: [
        {
            number: {type:Number},
            type: string,
            disposalMethod: string,
            howIsAgentShed: string,
            facilityPrecautions: string
        }
    ]
}

let ProjectSchema = new Schema({
    idPrefix: {type:String, require:true}, //a prefix to the id to communicate project type to the user - this use case is common and needs to be maintained
    idNumber: {type:Number}, //unique identifier - auto-incremented across all entities
    title: {type:String},
    status: {type:String},
    projectType: {type:String},
    departmentChair: ObjectId,
    dateReceived: {type:Date}, //date the project was submitted into the Biosafety office for review
    dateCreated: {type:Date}, //date the project was generted
    createdBy: ObjectId,
    pi: ObjectId,
    copis: [
        ObjectId
    ],
    roles:[
        {
            roleName:{type:String},
            person: ObjectId
        }
    ],
    agentToxinInvolved: [String],
    fundingSouces:[ObjectId],
    experimentalEffects:[
        {
            type:{type:String},
            explanation:{type:String}
        }
    ],
    keyPersonnel: [
         {
             person: ObjectId,
             duties:{type:String},
             experience:{type:String}
         } 
    ],
    nonTechnicalSynopsis: {type:String},
    transgenicAnimals:[
        {
            name:{type:String},
            geneticallyAlteredDesc:{type:String},
            procurementDesc:{type:String},
            markingDesc:{type:String}
        }
    ],
    rdna:[
        {
            dnaSource:{type:String},
            dnaNature:{type:String},
            recipeintOrganism:{type:String},
            vectorList:{type:String},
            vectorMap:{type:String}
        }
    ],
    nihGuidelines:[
        String
    ],
    foreignGeneExpression: {type:String},
    fieldRelease:[
        {
            usdaPermitID: {type:String},
            file: {type:String}
        }
    ],
    infectiousAgent: [
        {
            name: {type:String},
            humanHazard: {type:String},
            animalHazard: {type:String},
            plantHazard: {type:String}
        }
    ],
    cdcAgent: [
        {
            permitNumber: {type:String},
            permitDocument: {type:String}
        }
    ],
    humanAffect: [
        {
            description: {type:String},
            vaccineAvailable: {type:Boolean},
            selectAgentToxins: {type: Boolean}
        }
    ],
    aphisPermit: [
        {
            permitID: {type:String},
            permitDocument: {type:String}
        }
    ],
    proposedBiocontainmentLevel: {type:String},
    decontaminationMethods: [
        {
            type: {type:String},
            method: {type:String}
        }
    ],
    ppe: [String],
    ppeSpecialPrecautions: {type:String},
    safetyEquipmentLocation: [
        {
            equipment: {type:String},
            location: {type:String},
            certificationDate: {type:Date}
        }
    ],
    animalInvolved: [
        {
            number: {type:Number},
            type: {type:String},
            disposalMethod: {type:String},
            howIsAgentShed: {type:String},
            facilityPrecautions: {type:String}
        }
    ]
})

export default mongoose.model<IProject>('Projects', ProjectSchema)