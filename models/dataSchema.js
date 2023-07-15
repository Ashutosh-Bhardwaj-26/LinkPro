const mongoose = require('mongoose')

const linkData = new mongoose.Schema({
    my_link: { type: String },
    total_clicks: { type: Number },
    app: { type: String },
})

const dataSchema = new mongoose.Schema({
    _id : String,
    recent_links: [linkData],
    top_links: [linkData],
});

module.exports = mongoose.model('dataSchema', dataSchema) 