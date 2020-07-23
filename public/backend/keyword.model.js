const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema ({
    keyword: { 
        query: String,
        data: SearchResponse {
            query: String,
            limit: 10,
            offset: 10,
            total: 200,
            verses: SearchVerse {
                id: String,
                orgId: String,
                bibleId: String,
                bookId: String,
                chapterId: String,
                text: String,
                reference: String
            },
            passages: Passage {
                id: String,
                bibleId: String,
                orgId: String,
                content: String,
                reference: String,
                copyright: String
            },
        },
        meta: Meta {
            fums: String,
            fumsId: String,
            fumsJsInclude: String,
            fumsJs: String,
            fumsNoScript: String
        }
}], {
    timestamps: true,
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;