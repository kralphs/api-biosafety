import { createSchema, Type, typedModel } from 'ts-mongoose';

const ProjectSchema = createSchema({
    idPrefix: Type.string({required: true}), //a prefix to the id to communicate project type to the user - this use case is common and needs to be maintained
    idNumber: Type.number(), //unique identifier - auto-incremented across all entities
    title: Type.string(),
    status: Type.string(),
    projectType: Type.string(),
    departmentChair: Type.objectId(),
    dateReceived: Type.date(), //date the project was submitted into the Biosafety office for review
    dateCreated: Type.date(), //date the project was generted
    createdBy: Type.objectId(),
    pi: Type.objectId(),
    copis: Type.array().of(Type.objectId()),
    roles: Type.array().of({
        roleName:Type.string(),
        person: Type.objectId()
    }),
    agentToxinInvolved: Type.array().of(Type.string()),
    fundingSouces:Type.array().of(Type.objectId()),
    experimentalEffects: Type.array().of({
        type:Type.string(),
        explanation:Type.string()
    }),
    keyPersonnel: Type.array().of({
        person: Type.objectId(),
        duties:Type.string(),
        experience:Type.string()
    }),
    nonTechnicalSynopsis: Type.string(),
    transgenicAnimals: Type.array().of({
        name:Type.string(),
        geneticallyAlteredDesc:Type.string(),
        procurementDesc:Type.string(),
        markingDesc:Type.string()
    }),
    rdna: Type.array().of({
        dnaSource:Type.string(),
        dnaNature:Type.string(),
        recipeintOrganism:Type.string(),
        vectorList:Type.string(),
        vectorMap:Type.string()
    }),
    nihGuidelines: Type.array().of(Type.string()),
    foreignGeneExpression: Type.string(),
    fieldRelease: Type.array().of({
        usdaPermitID: Type.string(),
        file: Type.string()
    }),
    infectiousAgent: Type.array().of({
        name: Type.string(),
        humanHazard: Type.string(),
        animalHazard: Type.string(),
        plantHazard: Type.string()
    }),
    cdcAgent: Type.array().of({
        permitNumber: Type.string(),
        permitDocument: Type.string()
    }),
    humanAffect: Type.array().of({
        description: Type.string(),
        vaccineAvailable: Type.boolean(),
        selectAgentToxins: Type.boolean()
    }),
    aphisPermit: Type.array().of({
        permitID: Type.string(),
        permitDocument: Type.string()
    }),
    proposedBiocontainmentLevel: Type.string(),
    decontaminationMethods: Type.array().of({
        type: Type.string(),
        method: Type.string()
    }),
    ppe: Type.array().of(Type.string()),
    ppeSpecialPrecautions: Type.string(),
    safetyEquipmentLocation: Type.array().of({
        equipment: Type.string(),
        location: Type.string(),
        certificationDate: Type.date()
    }),
    animalInvolved: Type.array().of({
        number: Type.number(),
        type: Type.string(),
        disposalMethod: Type.string(),
        howIsAgentShed: Type.string(),
        facilityPrecautions: Type.string()
    })
}, { strictQuery: true })

export default typedModel('Projects', ProjectSchema)