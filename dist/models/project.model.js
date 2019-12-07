"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
let ObjectId = mongoose_1.default.Schema.Types.ObjectId;
let ProjectSchema = new mongoose_1.Schema({
    idPrefix: { type: String, require: true },
    idNumber: { type: Number },
    title: { type: String },
    status: { type: String },
    projectType: { type: String },
    departmentChair: ObjectId,
    dateReceived: { type: Date },
    dateCreated: { type: Date },
    createdBy: ObjectId,
    pi: ObjectId,
    copis: [
        ObjectId
    ],
    roles: [
        {
            roleName: { type: String },
            person: ObjectId
        }
    ],
    agentToxinInvolved: [String],
    fundingSouces: [ObjectId],
    experimentalEffects: [
        {
            type: { type: String },
            explanation: { type: String }
        }
    ],
    keyPersonnel: [
        {
            person: ObjectId,
            duties: { type: String },
            experience: { type: String }
        }
    ],
    nonTechnicalSynopsis: { type: String },
    transgenicAnimals: [
        {
            name: { type: String },
            geneticallyAlteredDesc: { type: String },
            procurementDesc: { type: String },
            markingDesc: { type: String }
        }
    ],
    rdna: [
        {
            dnaSource: { type: String },
            dnaNature: { type: String },
            recipeintOrganism: { type: String },
            vectorList: { type: String },
            vectorMap: { type: String }
        }
    ],
    nihGuidelines: [
        String
    ],
    foreignGeneExpression: { type: String },
    fieldRelease: [
        {
            usdaPermitID: { type: String },
            file: { type: String }
        }
    ],
    infectiousAgent: [
        {
            name: { type: String },
            humanHazard: { type: String },
            animalHazard: { type: String },
            plantHazard: { type: String }
        }
    ],
    cdcAgent: [
        {
            permitNumber: { type: String },
            permitDocument: { type: String }
        }
    ],
    humanAffect: [
        {
            description: { type: String },
            vaccineAvailable: { type: Boolean },
            selectAgentToxins: { type: Boolean }
        }
    ],
    aphisPermit: [
        {
            permitID: { type: String },
            permitDocument: { type: String }
        }
    ],
    proposedBiocontainmentLevel: { type: String },
    decontaminationMethods: [
        {
            type: { type: String },
            method: { type: String }
        }
    ],
    ppe: [String],
    ppeSpecialPrecautions: { type: String },
    safetyEquipmentLocation: [
        {
            equipment: { type: String },
            location: { type: String },
            certificationDate: { type: Date }
        }
    ],
    animalInvolved: [
        {
            number: { type: Number },
            type: { type: String },
            disposalMethod: { type: String },
            howIsAgentShed: { type: String },
            facilityPrecautions: { type: String }
        }
    ]
});
exports.default = mongoose_1.default.model('Projects', ProjectSchema);
//# sourceMappingURL=project.model.js.map