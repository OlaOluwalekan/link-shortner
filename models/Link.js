const { Schema, model } = require('mongoose')
const nanoId = require('nanoid')

const LinkSchema = new Schema(
  {
    originalLink: {
      type: String,
      required: [true, 'Please enter the original url'],
    },
    shortLink: {
      type: String,
      unique: true,
    },
    fullLink: {
      type: String,
    },
  },
  { timestamps: true }
)

LinkSchema.pre('save', function () {
  this.shortLink = nanoId.nanoid(10)
  this.fullLink = `https://app-link-shortener.onrender.com/${this.shortLink}`
})

module.exports = model('Link', LinkSchema)
